"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BaseController2 = _interopRequireDefault(require("./BaseController"));

var _ArmyController = _interopRequireDefault(require("./ArmyController"));

var _dataCostoTransformacion = _interopRequireDefault(require("../data/dataCostoTransformacion"));

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

var TransformationController = /*#__PURE__*/function (_BaseController) {
  _inherits(TransformationController, _BaseController);

  var _super = _createSuper(TransformationController);

  function TransformationController() {
    _classCallCheck(this, TransformationController);

    return _super.call(this);
  }

  _createClass(TransformationController, [{
    key: "transformationArmy",
    value: function () {
      var _transformationArmy = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
        var internal,
            ArmyTransform,
            ArmyArray,
            moneyForTraining,
            unitToDiscount,
            k,
            i,
            costTransform,
            _args = arguments;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                internal = _args.length > 3 && _args[3] !== undefined ? _args[3] : false;
                _context.prev = 1;
                //const ArmyCtrl = new Army(req.params.civilization)
                ArmyTransform = new _ArmyController["default"]();
                _context.next = 5;
                return ArmyTransform.getCivilization(req, res, next, true);

              case 5:
                ArmyArray = _context.sent;
                //console.log(ArmyArray[0])
                //default money 1000
                moneyForTraining = 1000;
                unitToDiscount = 0;
                _context.t0 = regeneratorRuntime.keys(ArmyArray[0]);

              case 9:
                if ((_context.t1 = _context.t0()).done) {
                  _context.next = 37;
                  break;
                }

                k = _context.t1.value;

                if (!(k !== "civilization" && k !== "gentlemans")) {
                  _context.next = 35;
                  break;
                }

                i = 0;

              case 13:
                if (!(i < ArmyArray[0][k])) {
                  _context.next = 35;
                  break;
                }

                _context.next = 16;
                return this.calculateCostTransform(k);

              case 16:
                costTransform = _context.sent;
                unitToDiscount++;

                if (!(moneyForTraining - costTransform > 0)) {
                  _context.next = 27;
                  break;
                }

                moneyForTraining -= costTransform;

                if (!(ArmyArray[0][k] - 1 == i)) {
                  _context.next = 25;
                  break;
                }

                _context.next = 23;
                return this.evolutionUnit(ArmyArray, k, unitToDiscount);

              case 23:
                ArmyArray = _context.sent;
                unitToDiscount = 0;

              case 25:
                _context.next = 32;
                break;

              case 27:
                if (!(ArmyArray[0][k] - 1 == i)) {
                  _context.next = 32;
                  break;
                }

                _context.next = 30;
                return this.evolutionUnit(ArmyArray, k, unitToDiscount - 1);

              case 30:
                ArmyArray = _context.sent;
                unitToDiscount = 0;

              case 32:
                i++;
                _context.next = 13;
                break;

              case 35:
                _context.next = 9;
                break;

              case 37:
                if (!internal) {
                  _context.next = 39;
                  break;
                }

                return _context.abrupt("return", ArmyArray);

              case 39:
                return _context.abrupt("return", res.status(200).send(ArmyArray).json());

              case 42:
                _context.prev = 42;
                _context.t2 = _context["catch"](1);
                console.log(_context.t2);

              case 45:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 42]]);
      }));

      function transformationArmy(_x, _x2, _x3) {
        return _transformationArmy.apply(this, arguments);
      }

      return transformationArmy;
    }()
  }, {
    key: "evolutionUnit",
    value: function () {
      var _evolutionUnit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(Army, unit, migrate) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.t0 = unit;
                _context2.next = _context2.t0 === "pikemens" ? 3 : _context2.t0 === "archers" ? 6 : 9;
                break;

              case 3:
                Army[0].archers += migrate;
                Army[0].pikemens -= migrate; //console.log("pik ", Army[0].pikemens)

                return _context2.abrupt("return", Army);

              case 6:
                Army[0].archers -= migrate;
                Army[0].gentlemans += migrate;
                return _context2.abrupt("return", Army);

              case 9:
                return _context2.abrupt("return", Army);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function evolutionUnit(_x4, _x5, _x6) {
        return _evolutionUnit.apply(this, arguments);
      }

      return evolutionUnit;
    }()
  }, {
    key: "calculateCostTransform",
    value: function () {
      var _calculateCostTransform = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(unit) {
        var cost;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                cost = 0;
                _context3.t0 = unit;
                _context3.next = _context3.t0 === "pikemens" ? 4 : _context3.t0 === "archers" ? 5 : 6;
                break;

              case 4:
                return _context3.abrupt("return", cost = _dataCostoTransformacion["default"].find(function (cst) {
                  return cst.unidad === "Piquero";
                }).costo_transformacion);

              case 5:
                return _context3.abrupt("return", cost = _dataCostoTransformacion["default"].find(function (cst) {
                  return cst.unidad === "Arquero";
                }).costo_transformacion);

              case 6:
                return _context3.abrupt("return", cost);

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function calculateCostTransform(_x7) {
        return _calculateCostTransform.apply(this, arguments);
      }

      return calculateCostTransform;
    }()
  }]);

  return TransformationController;
}(_BaseController2["default"]);

var _default = TransformationController;
exports["default"] = _default;