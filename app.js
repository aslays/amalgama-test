import "@babel/polyfill"
import express from "express"
//import fs from "fs"
import http from "http"
import path from "path"
//import https from "https"
import cors from "cors"
import helmet from "helmet"
import winston from "winston"
//import bodyParser from "body-parser"
import expressWinston from "express-winston"
import indexRouter from "./src/routes/index"
//import Sequelize from "sequelize"
//import oauth from "./middlwares/oauth"
import compression from "compression"
const app = express()

/*
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }))
app.use(
  bodyParser.json({
    parameterLimit: 100000,
    limit: "10mb",
    extended: true
  })
)
*/
require("dotenv").config()
require("winston-daily-rotate-file")
app.disable("x-powered-by")
const corsOptions = {
  origin: "*",
  methods: "GET, POST, PUT, DELETE, PATCH",
}
app.use(cors(corsOptions))
app.use(helmet())
app.use(compression())
app.use(helmet.xssFilter())
app.use(helmet.noSniff())
app.use(helmet.frameguard({ action: "deny" }))
app.use(helmet.hidePoweredBy())
app.use(helmet.referrerPolicy({ policy: "same-origin" }))

const loggerConsoleCompile = winston.format.combine(
  winston.format.colorize(),
  winston.format.printf((info) => {
    const { message, ...args } = info

    let log = ""

    if (
      Number(info.meta.res.statusCode) >= 100 &&
      Number(info.meta.res.statusCode) <= 305
    ) {
      log =
        "\x1b[42m \x1b[37m" + info.meta.res.statusCode + "\x1b[39m \x1b[49m "
    } else if (
      Number(info.meta.res.statusCode) >= 400 &&
      Number(info.meta.res.statusCode) <= 420
    ) {
      log =
        "\x1b[43m \x1b[37m" + info.meta.res.statusCode + " \x1b[39m \x1b[49m"
    } else if (
      info.meta.res.statusCode >= 500 &&
      info.meta.res.statusCode <= 600
    ) {
      log = "\x1b[41m \x1b[37m" + info.meta.res.statusCode + "\x1b[39m \x1b[49m"
    } else if (info.meta.res.statusCode == 422) {
      log = "\x1b[46m \x1b[37m" + info.meta.res.statusCode + "\x1b[39m \x1b[49m"
    } else {
      log = info.meta.res.statusCode
    }
    log =
      process.env.NAME_SERVICE +
      " - " +
      log +
      " " +
      info.meta.req.method +
      "  " +
      info.meta.req.url +
      " \x1b[47m\x1b[30m" +
      info.meta.responseTime +
      "ms\x1b[49m \x1b[39m" +
      message
    return `${log}`
  })
)

app.use(
  expressWinston.logger({
    transports: [
      new winston.transports.Console({
        format: loggerConsoleCompile,
      }),
    ],
    meta: true,
    msg: " \x1b[4m{{req.connection.remoteAddress}}\x1b[24m \n ",
    expressFormat: false,
    colorize: true,
    ignoreRoute: function (req, res) {
      return false
    },
  })
)

app.use(
  expressWinston.logger({
    transports: [
      new winston.transports.DailyRotateFile({
        filename: "./logs/application-%DATE%.log",
        datePattern: "YYYY-MM-DD-HH",
        zippedArchive: true,
        maxSize: "20m",
        maxFiles: "14d",
      }),
    ],
    meta: true,
    msg: "METHOD:{{req.method}} | URL:{{req.url}} | STATUS:{{res.statusCode}} | ResponseTime:{{res.responseTime}}ms | UA:{{req.headers['user-agent']}} ",
    expressFormat: false,
    colorStatus: true,
    ignoreRoute: function (req, res) {
      return false
    },
  })
)

const { handleError, ErrorHandler } = require("./src/core/handler")
//app.use(oauth)
app.use(express.static(path.join(__dirname, "../public")))
app.get("/", (req, res) => {
  res.send(`
    <h1>${process.env.NAME_SERVICE || "NAME_SERVICE"} ${
    process.env.VERSION_SERVICE || "VERSION_SERVICE"
  } </h1>
    <h3>${process.env.DESCRIPTION_SERVICE || "DESCRIPTION_SERVICE"}</h3>
    <h3>${process.env.INTEGRADORES_ROOT || "DESCRIPTION_SERVICE"}</h3>
  `)
})
app.use("/", indexRouter)
app.use((err, req, res, next) => {
  handleError(err, res)
})


// HTTPS
/*
const certificate = {
  key: fs.readFileSync("./certificates/app.key"),
  cert: fs.readFileSync("./certificates/app.cert")
}
*/
const server = http.createServer(app).listen(process.env.HTTP_PORT)
//https.createServer(certificate, app).listen(process.env.HTTPS_PORT)

const io = require("./src/core/Socket-io")
io.attach(server)

process.stdout.write("\x1Bc")
console.log(
  `HTTP Server PORT ${process.env.HTTP_PORT} | HTTPS Server PORT ${process.env.HTTPS_PORT}`
)
if (process.env.NODE_ENV === "development") {
  const title = `Amalgama Test | PID: ${process.pid} | HTTP: ${process.env.HTTP_PORT} | HTTPS: ${process.env.HTTPS_PORT}`
  // set terminal title
  process.stdout.write(
    String.fromCharCode(27) + "]0;" + title + String.fromCharCode(7)
  )
}
export default app
