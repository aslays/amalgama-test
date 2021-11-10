"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _handler = require("../core/handler");

var _expressValidator = require("express-validator");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BaseController = /*#__PURE__*/function () {
  function BaseController() {
    _classCallCheck(this, BaseController);
  }

  _createClass(BaseController, [{
    key: "default",
    value: function () {
      var _default2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
        var response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return (0, _handler.callService)(req.method, req.originalUrl, req.body, {
                  "Content-Type": "application/json"
                });

              case 3:
                response = _context.sent;
                return _context.abrupt("return", res.status(response.status).json(response.data));

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);
                return _context.abrupt("return", this.handleError(next, 500, {
                  message: _context.t0
                }));

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      function _default(_x, _x2, _x3) {
        return _default2.apply(this, arguments);
      }

      return _default;
    }()
  }, {
    key: "validateFields",
    value: function () {
      var _validateFields = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, next) {
        var _this = this;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", new Promise(function (resolve, reject) {
                  var errors = (0, _expressValidator.validationResult)(req);

                  if (!errors.isEmpty()) {
                    return _this.handleError(next, 422, errors.array());
                  }

                  resolve();
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function validateFields(_x4, _x5) {
        return _validateFields.apply(this, arguments);
      }

      return validateFields;
    }()
  }, {
    key: "handleError",
    value: function handleError(next) {
      var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
      var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      return next(new _handler.ErrorHandler(status, message));
    }
  }]);

  return BaseController;
}();

var _default3 = BaseController;
exports["default"] = _default3;