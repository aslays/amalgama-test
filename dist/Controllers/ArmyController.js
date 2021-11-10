"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BaseController2 = _interopRequireDefault(require("./BaseController"));

var _Army = _interopRequireDefault(require("../Classes/Army"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

var ArmyController = /*#__PURE__*/function (_BaseController) {
  _inherits(ArmyController, _BaseController);

  var _super = _createSuper(ArmyController);

  function ArmyController() {
    _classCallCheck(this, ArmyController);

    return _super.call(this);
  }

  _createClass(ArmyController, [{
    key: "getCivilization",
    value: function () {
      var _getCivilization = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
        var internal,
            ArmyClass,
            dataCivilization,
            result,
            points,
            money,
            _args = arguments;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                internal = _args.length > 3 && _args[3] !== undefined ? _args[3] : false;
                _context.prev = 1;
                ArmyClass = new _Army["default"](req.params.civilization);
                _context.next = 5;
                return ArmyClass.getDataCivilization();

              case 5:
                dataCivilization = _context.sent;

                if (!dataCivilization) {
                  _context.next = 25;
                  break;
                }

                ArmyClass.pikemens = dataCivilization.piqueros;
                ArmyClass.archers = dataCivilization.arqueros;
                ArmyClass.gentlemans = dataCivilization.caballeros;
                _context.next = 12;
                return ArmyClass.getCivilizationClass();

              case 12:
                result = _context.sent;
                _context.next = 15;
                return ArmyClass.calculatePoints();

              case 15:
                points = _context.sent;
                _context.next = 18;
                return ArmyClass.getInitialMoney();

              case 18:
                money = _context.sent;
                result = [].concat(_toConsumableArray(result), [points, money]); //result = result.concat(points)

                if (!internal) {
                  _context.next = 22;
                  break;
                }

                return _context.abrupt("return", result);

              case 22:
                return _context.abrupt("return", res.status(200).send(result).json());

              case 25:
                return _context.abrupt("return", res.status(404).send({
                  error: true,
                  message: "army not found"
                }).json());

              case 26:
                _context.next = 31;
                break;

              case 28:
                _context.prev = 28;
                _context.t0 = _context["catch"](1);
                console.log(_context.t0);

              case 31:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 28]]);
      }));

      function getCivilization(_x, _x2, _x3) {
        return _getCivilization.apply(this, arguments);
      }

      return getCivilization;
    }()
  }, {
    key: "newArmy",
    value: function () {
      var _newArmy = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var ArmyClass, result, points;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                ArmyClass = new _Army["default"](req.params.civilization, req.params.pikemens, req.params.archers, req.params.gentlemans);
                _context2.prev = 1;
                _context2.next = 4;
                return ArmyClass.getCivilizationClass();

              case 4:
                result = _context2.sent;
                _context2.next = 7;
                return ArmyClass.calculatePoints();

              case 7:
                points = _context2.sent;
                result = [].concat(_toConsumableArray(result), [points]);
                return _context2.abrupt("return", res.status(200).send(result).json());

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2["catch"](1);
                console.log(_context2.t0);

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 12]]);
      }));

      function newArmy(_x4, _x5) {
        return _newArmy.apply(this, arguments);
      }

      return newArmy;
    }()
  }]);

  return ArmyController;
}(_BaseController2["default"]);

var _default = ArmyController;
exports["default"] = _default;