"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _rateLimiter = _interopRequireDefault(require("../middlewares/rateLimiter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function () {
  "use strict";

  require("dotenv").config();

  var routes = require("express").Router();

  var apiRoot = "";
  var windowEnv = process.env.TIME_RATELIMIT || 60000;
  var maxParams = process.env.MAX_RATELIMIT || 150;
  apiRoot = process.env.INTEGRADORES_ROOT || "";
  routes.use("/ejercitos", require("./EjercitosRoutes"));
  return routes;
}();

exports["default"] = _default;