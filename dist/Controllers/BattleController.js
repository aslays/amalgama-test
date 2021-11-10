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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

var BattleController = /*#__PURE__*/function (_BaseController) {
  _inherits(BattleController, _BaseController);

  var _super = _createSuper(BattleController);

  function BattleController() {
    _classCallCheck(this, BattleController);

    return _super.call(this);
  }

  _createClass(BattleController, [{
    key: "battle",
    value: function () {
      var _battle = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
        var internal,
            Army1,
            ArmyArray1,
            Army2,
            ArmyArray2,
            ArmyWin,
            Army,
            _args = arguments;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                internal = _args.length > 3 && _args[3] !== undefined ? _args[3] : false;
                _context.prev = 1;
                //const ArmyCtrl = new Army(req.params.civilization)
                req.params.civilization = req.params.civilization1;
                Army1 = new _ArmyController["default"]();
                _context.next = 6;
                return Army1.getCivilization(req, res, next, true);

              case 6:
                ArmyArray1 = _context.sent;
                req.params.civilization = req.params.civilization2;
                Army2 = new _ArmyController["default"]();
                _context.next = 11;
                return Army1.getCivilization(req, res, next, true);

              case 11:
                ArmyArray2 = _context.sent;
                //console.log(ArmyArray[0])
                ArmyWin = '';
                Army = [];

                if (!(ArmyArray1[1].points.total_points > ArmyArray2[1].points.total_points)) {
                  _context.next = 22;
                  break;
                }

                ArmyWin = ArmyArray1[0].civilization;
                _context.next = 18;
                return this.processArmyLooser(ArmyArray2);

              case 18:
                Army = _context.sent;
                //Army = [ArmyArray1, ...[Army]]
                Army = [ArmyArray1[0]].concat([Army]);
                _context.next = 31;
                break;

              case 22:
                if (!(ArmyArray1[1].points.total_points < ArmyArray2[1].points.total_points)) {
                  _context.next = 30;
                  break;
                }

                ArmyWin = ArmyArray2[0].civilization;
                _context.next = 26;
                return this.processArmyLooser(ArmyArray1);

              case 26:
                Army = _context.sent;
                //Army = [ArmyArray2, ...[Army]]
                Army = [ArmyArray2[0]].concat([Army]);
                _context.next = 31;
                break;

              case 30:
                ArmyWin = 'Tie';

              case 31:
                //let Army = [ArmyArray1, ...[ArmyArray2]]
                //console.log(ArmyArray)
                Army = [{
                  Win: ArmyWin
                }].concat(_toConsumableArray(Army));

                if (!internal) {
                  _context.next = 34;
                  break;
                }

                return _context.abrupt("return", Army);

              case 34:
                return _context.abrupt("return", res.status(200).send(Army).json());

              case 37:
                _context.prev = 37;
                _context.t0 = _context["catch"](1);
                console.log(_context.t0);

              case 40:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 37]]);
      }));

      function battle(_x, _x2, _x3) {
        return _battle.apply(this, arguments);
      }

      return battle;
    }()
  }, {
    key: "processArmyLooser",
    value: function () {
      var _processArmyLooser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(Array) {
        var sortable, result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                sortable = Object.entries(Array[0]).sort(function (_ref, _ref2) {
                  var _ref3 = _slicedToArray(_ref, 2),
                      a = _ref3[1];

                  var _ref4 = _slicedToArray(_ref2, 2),
                      b = _ref4[1];

                  return a - b;
                }).splice(0, 2).reduce(function (r, _ref5) {
                  var _ref6 = _slicedToArray(_ref5, 2),
                      k = _ref6[0],
                      v = _ref6[1];

                  return _objectSpread(_objectSpread({}, r), {}, _defineProperty({}, k, v));
                }, {}); // for(k in sortable){
                //     if(sortable){
                //     }
                // }
                //let result = [sortable, ...[Array[1]]]

                result = sortable;
                return _context2.abrupt("return", result);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function processArmyLooser(_x4) {
        return _processArmyLooser.apply(this, arguments);
      }

      return processArmyLooser;
    }()
  }]);

  return BattleController;
}(_BaseController2["default"]);

var _default = BattleController;
exports["default"] = _default;