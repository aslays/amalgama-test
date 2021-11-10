import rateLimit from "express-rate-limit"

const rateLimitFn = (windowMsParams, maxParams) => {
  return rateLimit({
    windowMs: windowMsParams,
    max: maxParams,
    message: "Too many requests, please try again later.",
    headers: true,
    keyGenerator: function (req, res) {
      return (
        req.headers["x-forwarded-for"] ||
        req.connection.remoteAddress + req.headers.authorization ||
        ""
      )
    },
  })
}

export default rateLimitFn
