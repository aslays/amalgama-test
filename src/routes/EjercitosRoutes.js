const Router = require("express").Router()
import TrainingController from "../Controllers/TrainingController"
import ArmyController from "../Controllers/ArmyController"
import TransformationController from "../Controllers/TransformationController"
import BattleController from "../Controllers/BattleController"
require("dotenv").config()

const trainingCtrl = new TrainingController()
const armyCtrl = new ArmyController()
const transformCtrl = new TransformationController()
const battleCtrl = new BattleController()

//Create Armys

// http://localhost:3102/ejercitos/army/civilization=Ingleses
//create and display Army info
Router.get("/army/civilization=:civilization", armyCtrl.getCivilization.bind(armyCtrl))

// http://localhost:3102/ejercitos/new/civilization=Chinos&pikemens=10&archers=20&gentlemans=3
//create and display custom Army
Router.get("/new/civilization=:civilization&pikemens=:pikemens&archers=:archers&gentlemans=:gentlemans", armyCtrl.newArmy.bind(armyCtrl))


//Trainings

//http://localhost:3102/ejercitos/army/training/civilization=Bizantinos
//Trainee Army and display result
Router.get("/army/training/civilization=:civilization", trainingCtrl.trainingArmy.bind(trainingCtrl))


//Transformation
//http://localhost:3102/ejercitos/army/transform/civilization=Ingleses
Router.get("/army/transform/civilization=:civilization", transformCtrl.transformationArmy.bind(transformCtrl))


//Battle
//battle and display result
//http://localhost:3102/ejercitos/battle/civilization1=Ingleses&civilization2=Chinos
Router.get("/battle/civilization1=:civilization1&civilization2=:civilization2", battleCtrl.battle.bind(battleCtrl))




module.exports = Router