"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BaseController2 = _interopRequireDefault(require("./BaseController"));

var _ArmyController = _interopRequireDefault(require("./ArmyController"));

var _dataCostoEntrenamiento = _interopRequireDefault(require("../data/dataCostoEntrenamiento"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var TrainingController = /*#__PURE__*/function (_BaseController) {
  _inherits(TrainingController, _BaseController);

  var _super = _createSuper(TrainingController);

  function TrainingController() {
    _classCallCheck(this, TrainingController);

    return _super.call(this);
  }

  _createClass(TrainingController, [{
    key: "trainingArmy",
    value: function () {
      var _trainingArmy = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
        var internal,
            ArmyTrainee,
            ArmyArray,
            moneyForTraining,
            pointsIncrement,
            k,
            i,
            costTraining,
            _args = arguments;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                internal = _args.length > 3 && _args[3] !== undefined ? _args[3] : false;
                _context.prev = 1;
                ArmyTrainee = new _ArmyController["default"]();
                _context.next = 5;
                return ArmyTrainee.getCivilization(req, res, next, true);

              case 5:
                ArmyArray = _context.sent;
                //const cost = dataCostoEntrenamiento.find(cst => cst.unidad === req.params.unit).costo_entrenamiento
                //const pointsByCost = dataCostoEntrenamiento.find(cst => cst.unidad === req.params.unit).puntos_obtenidos
                //default money 1000
                moneyForTraining = 1000;
                pointsIncrement = 0;
                _context.t0 = regeneratorRuntime.keys(ArmyArray[0]);

              case 9:
                if ((_context.t1 = _context.t0()).done) {
                  _context.next = 31;
                  break;
                }

                k = _context.t1.value;

                if (!(k !== "civilization")) {
                  _context.next = 29;
                  break;
                }

                i = 0;

              case 13:
                if (!(i < ArmyArray[0][k])) {
                  _context.next = 29;
                  break;
                }

                _context.next = 16;
                return this.calculateCostTraining(k);

              case 16:
                costTraining = _context.sent;

                if (!(moneyForTraining - costTraining > 0)) {
                  _context.next = 26;
                  break;
                }

                moneyForTraining -= costTraining;
                _context.next = 21;
                return this.calculateTraining(k);

              case 21:
                pointsIncrement = _context.sent;
                ArmyArray[1].points.total_points += pointsIncrement;
                _context.next = 25;
                return this.addPointsUnit(ArmyArray, pointsIncrement, k);

              case 25:
                ArmyArray = _context.sent;

              case 26:
                i++;
                _context.next = 13;
                break;

              case 29:
                _context.next = 9;
                break;

              case 31:
                if (!internal) {
                  _context.next = 33;
                  break;
                }

                return _context.abrupt("return", ArmyArray);

              case 33:
                return _context.abrupt("return", res.status(200).send(ArmyArray).json());

              case 36:
                _context.prev = 36;
                _context.t2 = _context["catch"](1);
                console.log(_context.t2);

              case 39:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 36]]);
      }));

      function trainingArmy(_x, _x2, _x3) {
        return _trainingArmy.apply(this, arguments);
      }

      return trainingArmy;
    }()
  }, {
    key: "calculateTraining",
    value: function () {
      var _calculateTraining = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(unit) {
        var points;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                points = 0;
                _context2.t0 = unit;
                _context2.next = _context2.t0 === "pikemens" ? 4 : _context2.t0 === "archers" ? 5 : _context2.t0 === "gentlemans" ? 6 : 7;
                break;

              case 4:
                return _context2.abrupt("return", points = _dataCostoEntrenamiento["default"].find(function (cst) {
                  return cst.unidad === "piqueros";
                }).puntos_obtenidos);

              case 5:
                return _context2.abrupt("return", points = _dataCostoEntrenamiento["default"].find(function (cst) {
                  return cst.unidad === "arquero";
                }).puntos_obtenidos);

              case 6:
                return _context2.abrupt("return", points = _dataCostoEntrenamiento["default"].find(function (cst) {
                  return cst.unidad === "caballero";
                }).puntos_obtenidos);

              case 7:
                return _context2.abrupt("return", points);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function calculateTraining(_x4) {
        return _calculateTraining.apply(this, arguments);
      }

      return calculateTraining;
    }()
  }, {
    key: "calculateCostTraining",
    value: function () {
      var _calculateCostTraining = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(unit) {
        var cost;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                cost = 0;
                _context3.t0 = unit;
                _context3.next = _context3.t0 === "pikemens" ? 4 : _context3.t0 === "archers" ? 5 : _context3.t0 === "gentlemans" ? 6 : 7;
                break;

              case 4:
                return _context3.abrupt("return", cost = _dataCostoEntrenamiento["default"].find(function (cst) {
                  return cst.unidad === "piqueros";
                }).costo_entrenamiento);

              case 5:
                return _context3.abrupt("return", cost = _dataCostoEntrenamiento["default"].find(function (cst) {
                  return cst.unidad === "arquero";
                }).costo_entrenamiento);

              case 6:
                return _context3.abrupt("return", cost = _dataCostoEntrenamiento["default"].find(function (cst) {
                  return cst.unidad === "caballero";
                }).costo_entrenamiento);

              case 7:
                return _context3.abrupt("return", cost);

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function calculateCostTraining(_x5) {
        return _calculateCostTraining.apply(this, arguments);
      }

      return calculateCostTraining;
    }()
  }, {
    key: "addPointsUnit",
    value: function () {
      var _addPointsUnit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(Army, pointsAdd, unit) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.t0 = unit;
                _context4.next = _context4.t0 === "pikemens" ? 3 : _context4.t0 === "archers" ? 5 : _context4.t0 === "gentlemans" ? 7 : 9;
                break;

              case 3:
                Army[1].points.points_pikemens += pointsAdd;
                return _context4.abrupt("return", Army);

              case 5:
                Army[1].points.points_archers += pointsAdd;
                return _context4.abrupt("return", Army);

              case 7:
                Army[1].points.points_gentlemans += pointsAdd;
                return _context4.abrupt("return", Army);

              case 9:
                return _context4.abrupt("return", Army);

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function addPointsUnit(_x6, _x7, _x8) {
        return _addPointsUnit.apply(this, arguments);
      }

      return addPointsUnit;
    }()
  }]);

  return TrainingController;
}(_BaseController2["default"]);

var _default = TrainingController;
exports["default"] = _default;