import BaseController from "./BaseController"
import ArmyController from "./ArmyController"
import dataCostoEntrenamiento from "../data/dataCostoEntrenamiento"
import Army from "../Classes/Army"


class TrainingController extends BaseController {
    constructor() {
      super()
    }


    async trainingArmy(req, res, next, internal = false) {
        try {
                        
            const ArmyTrainee = new ArmyController()
            const ArmyClass = new Army()
            
            let ArmyArray = await ArmyTrainee.getCivilization(req, res, next, true)
                        
            //const cost = dataCostoEntrenamiento.find(cst => cst.unidad === req.params.unit).costo_entrenamiento
            //const pointsByCost = dataCostoEntrenamiento.find(cst => cst.unidad === req.params.unit).puntos_obtenidos
            
            //default money 1000
            const money = await ArmyClass.getInitialMoney()
            let moneyForTraining = money.gold
            let pointsIncrement = 0
            for(let k in ArmyArray[0]) {
            //console.log(k)
                if( k !== "civilization" ){
                    
                    for(let i = 0; i < ArmyArray[0][k] ; i++){
                        //console.log(ArmyArray[0][k])
                        const costTraining = await this.calculateCostTraining(k)

                        if(moneyForTraining - costTraining > 0){
                            
                            moneyForTraining -= costTraining
                                                       
                            pointsIncrement = await this.calculateTraining(k)
                           
                            ArmyArray[1].points.total_points += pointsIncrement
                            ArmyArray[2].gold = moneyForTraining
                            
                            ArmyArray = await this.addPointsUnit(ArmyArray, pointsIncrement, k)

                            //console.log(k,pointsIncrement)
                        }
                                                
                    } 
                    
                }
            }       
                        
            
            if(internal)
            return ArmyArray
        
            return res.status(200).send(ArmyArray).json()
               
        
        } catch (err) {
            console.log(err)
        }
    }

    
    async calculateTraining(unit){

        let points = 0

        switch (unit){
            case "pikemens":            
                return points = dataCostoEntrenamiento.find(cst => cst.unidad === "piqueros").puntos_obtenidos
            case "archers":
                return points = dataCostoEntrenamiento.find(cst => cst.unidad === "arquero").puntos_obtenidos
            case "gentlemans":
                return points = dataCostoEntrenamiento.find(cst => cst.unidad === "caballero").puntos_obtenidos
        
            default: 
                return points
        }

    }


    async calculateCostTraining (unit){

        let cost = 0

        switch (unit){
            case "pikemens":            
                return cost = dataCostoEntrenamiento.find(cst => cst.unidad === "piqueros").costo_entrenamiento
            case "archers":
                return cost = dataCostoEntrenamiento.find(cst => cst.unidad === "arquero").costo_entrenamiento
            case "gentlemans":
                return cost = dataCostoEntrenamiento.find(cst => cst.unidad === "caballero").costo_entrenamiento
        
            default: 
                return cost
        }

    }
    async addPointsUnit(Army, pointsAdd, unit){

        switch (unit){
            case "pikemens":            
                Army[1].points.points_pikemens += pointsAdd
                return Army
            case "archers":
                Army[1].points.points_archers += pointsAdd
                return Army
            case "gentlemans":
                Army[1].points.points_gentlemans += pointsAdd
                return Army
        
            default: 
                return Army
        }


    }


}
export default TrainingController