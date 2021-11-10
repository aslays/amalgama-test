"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _expressRateLimit = _interopRequireDefault(require("express-rate-limit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rateLimitFn = function rateLimitFn(windowMsParams, maxParams) {
  return (0, _expressRateLimit["default"])({
    windowMs: windowMsParams,
    max: maxParams,
    message: "Too many requests, please try again later.",
    headers: true,
    keyGenerator: function keyGenerator(req, res) {
      return req.headers["x-forwarded-for"] || req.connection.remoteAddress + req.headers.authorization || "";
    }
  });
};

var _default = rateLimitFn;
exports["default"] = _default;