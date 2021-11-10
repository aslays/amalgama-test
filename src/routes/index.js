import rateLimitFn from "../middlewares/rateLimiter"

export default (function() {
    "use strict"
    require("dotenv").config()
    var routes = require("express").Router()
    var apiRoot = ""

    let windowEnv = process.env.TIME_RATELIMIT || 60000
    let maxParams = process.env.MAX_RATELIMIT || 150
    
    apiRoot = process.env.INTEGRADORES_ROOT || ""

    routes.use(`/ejercitos`, require("./EjercitosRoutes"))


    return routes
})()