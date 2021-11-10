import BaseController from "./BaseController"
import Army from "../Classes/Army"


class ArmyController extends BaseController {
    constructor() {
      super()
    }



    async getCivilization(req, res, next, internal = false) {
       
        try {
        
            const ArmyClass = new Army(req.params.civilization)

            const dataCivilization = await ArmyClass.getDataCivilization()
            
            if(dataCivilization){
                ArmyClass.pikemens = dataCivilization.piqueros
                ArmyClass.archers = dataCivilization.arqueros
                ArmyClass.gentlemans = dataCivilization.caballeros
                
                let result = await ArmyClass.getCivilizationClass();
                
                const points = await ArmyClass.calculatePoints();
                const money = await ArmyClass.getInitialMoney();
                           
                result = [...result, points, money]
                //result = result.concat(points)
            

                if(internal)
                return result
                            
                return res.status(200).send(result).json();
                
            }
            else{
                return res.status(404).send({error:true, message: "army not found"}).json()
            } 

        } catch (err) {
            console.log(err)
        }
    }




    async newArmy(req, res) {
 
        const ArmyClass = new Army(req.params.civilization, req.params.pikemens, req.params.archers, req.params.gentlemans)
          
        try {

            let result = await ArmyClass.getCivilizationClass();
            
            const points = await ArmyClass.calculatePoints();
            const money = await ArmyClass.getInitialMoney();
                    
            result = [...result, points, money]

            return res.status(200).send(result).json();

        } catch (err) {
            console.log(err)
        }
    }
    





    
}
export default ArmyController