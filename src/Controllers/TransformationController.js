import BaseController from "./BaseController"
import ArmyController from "./ArmyController"
import dataCostoTransformacion from "../data/dataCostoTransformacion"
import Army from "../Classes/Army"


class TransformationController extends BaseController {
    constructor() {
      super()
    }


    async transformationArmy(req, res, next, internal = false) {
        try {
            //const ArmyCtrl = new Army(req.params.civilization)
            
            const ArmyTransform = new ArmyController()
            const ArmyClass = new Army()
            
            let ArmyArray = await ArmyTransform.getCivilization(req, res, next, true)
            
            //console.log(ArmyArray[0])

            //default money 1000
            const money = await ArmyClass.getInitialMoney()
            let moneyForTraining = money.gold
            let unitToDiscount = 0
            for(let k in ArmyArray[0]) {
            //console.log(k)
                if( k !== "civilization" && k !== "gentlemans" ){
                    
                    for(let i = 0; i < ArmyArray[0][k] ; i++){
                        //console.log("tamaño", ArmyArray[0][k])
                        const costTransform = await this.calculateCostTransform(k)
                                                                        
                        unitToDiscount++

                        if(moneyForTraining - costTransform > 0){
                            
                            moneyForTraining -= costTransform
                                                 

                            if( ArmyArray[0][k] -1 == i){
                               
                               ArmyArray = await this.evolutionUnit(ArmyArray, k, unitToDiscount) 

                               unitToDiscount = 0
                            }

                            
                            
                        }else{
                            //si se acaba el dinero, tiene que editar el Array en la ultima ejecucion valida

                            if( ArmyArray[0][k] -1 == i){
                                 
                                ArmyArray = await this.evolutionUnit(ArmyArray, k, unitToDiscount-1) 
 
                                unitToDiscount = 0
                             }

                        }

                        ArmyArray[2].gold = moneyForTraining
                                                
                    } 

                }
            }       
            
            //console.log(ArmyArray)

            if(internal)
            return ArmyArray
        
            return res.status(200).send(ArmyArray).json()
        
        } catch (err) {
            console.log(err)
        }
    }

    
    async evolutionUnit(Army, unit, migrate){

        switch (unit){
            case "pikemens":
                Army[0].archers += migrate            
                Army[0].pikemens -= migrate
                //console.log("pik ", Army[0].pikemens)
                return Army
            case "archers":
                Army[0].archers -= migrate
                Army[0].gentlemans += migrate
                return Army
                    
            default: 
                return Army
        }


    }

    async calculateCostTransform (unit){

        let cost = 0

        switch (unit){
            case "pikemens":            
                return cost = dataCostoTransformacion.find(cst => cst.unidad === "Piquero").costo_transformacion
            case "archers":
                return cost = dataCostoTransformacion.find(cst => cst.unidad === "Arquero").costo_transformacion
                    
            default: 
                return cost
        }

    }



}
export default TransformationController