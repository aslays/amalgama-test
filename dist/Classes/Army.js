"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dataPuntos = _interopRequireDefault(require("../data/dataPuntos"));

var _dataCivilizaciones = _interopRequireDefault(require("../data/dataCivilizaciones"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

require("dotenv").config();

var Army = /*#__PURE__*/function () {
  function Army(civilization, pikemens, archers, gentlemans) {
    _classCallCheck(this, Army);

    this.civilization = civilization;
    this.pikemens = pikemens;
    this.archers = archers;
    this.gentlemans = gentlemans;
  }

  _createClass(Army, [{
    key: "getCivilizationClass",
    value: function () {
      var _getCivilizationClass = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                data = [{
                  civilization: this.civilization,
                  pikemens: this.pikemens,
                  archers: this.archers,
                  gentlemans: this.gentlemans
                }];
                return _context.abrupt("return", data);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getCivilizationClass() {
        return _getCivilizationClass.apply(this, arguments);
      }

      return getCivilizationClass;
    }()
  }, {
    key: "calculatePoints",
    value: function () {
      var _calculatePoints = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var points_units_p, points_units_a, points_units_g, total;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                points_units_p = _dataPuntos["default"].find(function (pts) {
                  return pts.unidad === 'Piquero';
                }).puntos_aportados * this.pikemens;
                points_units_a = _dataPuntos["default"].find(function (pts) {
                  return pts.unidad === 'Arquero';
                }).puntos_aportados * this.archers;
                points_units_g = _dataPuntos["default"].find(function (pts) {
                  return pts.unidad === 'Caballero';
                }).puntos_aportados * this.gentlemans;
                total = points_units_p + points_units_a + points_units_g;
                return _context2.abrupt("return", {
                  points: {
                    points_pikemens: points_units_p,
                    points_archers: points_units_a,
                    points_gentlemans: points_units_g,
                    total_points: total
                  }
                });

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 8]]);
      }));

      function calculatePoints() {
        return _calculatePoints.apply(this, arguments);
      }

      return calculatePoints;
    }()
  }, {
    key: "getDataCivilization",
    value: function () {
      var _getDataCivilization = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _this = this;

        var data;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                data = _dataCivilizaciones["default"].find(function (cvl) {
                  return cvl.civilizacion === _this.civilization;
                });
                return _context3.abrupt("return", data);

              case 5:
                _context3.prev = 5;
                _context3.t0 = _context3["catch"](0);
                console.log(_context3.t0);

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 5]]);
      }));

      function getDataCivilization() {
        return _getDataCivilization.apply(this, arguments);
      }

      return getDataCivilization;
    }()
  }, {
    key: "getInitialMoney",
    value: function () {
      var _getInitialMoney = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", {
                  gold: 1000
                });

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function getInitialMoney() {
        return _getInitialMoney.apply(this, arguments);
      }

      return getInitialMoney;
    }()
  }]);

  return Army;
}();

var _default = Army;
exports["default"] = _default;