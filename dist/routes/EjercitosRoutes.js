"use strict";

var _TrainingController = _interopRequireDefault(require("../Controllers/TrainingController"));

var _ArmyController = _interopRequireDefault(require("../Controllers/ArmyController"));

var _TransformationController = _interopRequireDefault(require("../Controllers/TransformationController"));

var _BattleController = _interopRequireDefault(require("../Controllers/BattleController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Router = require("express").Router();

require("dotenv").config();

var trainingCtrl = new _TrainingController["default"]();
var armyCtrl = new _ArmyController["default"]();
var transformCtrl = new _TransformationController["default"]();
var battleCtrl = new _BattleController["default"](); //Create Armys
// http://localhost:3102/ejercitos/army/civilization=Ingleses
//create and display Army info

Router.get("/army/civilization=:civilization", armyCtrl.getCivilization.bind(armyCtrl)); // http://localhost:3102/ejercitos/new/civilization=Chinos&pikemens=10&archers=20&gentlemans=3
//create and display custom Army

Router.get("/new/civilization=:civilization&pikemens=:pikemens&archers=:archers&gentlemans=:gentlemans", armyCtrl.newArmy.bind(armyCtrl)); //Trainings
//http://localhost:3102/ejercitos/army/training/civilization=Bizantinos
//Trainee Army and display result

Router.get("/army/training/civilization=:civilization", trainingCtrl.trainingArmy.bind(trainingCtrl)); //Transformation
//http://localhost:3102/ejercitos/army/transform/civilization=Ingleses

Router.get("/army/transform/civilization=:civilization", transformCtrl.transformationArmy.bind(transformCtrl)); //Battle
//battle and display result
//http://localhost:3102/ejercitos/battle/civilization1=Ingleses&civilization2=Chinos

Router.get("/battle/civilization1=:civilization1&civilization2=:civilization2", battleCtrl.battle.bind(battleCtrl));
module.exports = Router;