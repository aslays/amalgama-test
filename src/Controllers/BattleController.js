import BaseController from "./BaseController"
import ArmyController from "./ArmyController"



class BattleController extends BaseController {
    constructor() {
      super()
    }


    async battle(req, res, next, internal = false) {
        try {
           
            
            req.params.civilization = req.params.civilization1
            const Army1 = new ArmyController()
            let ArmyArray1 = await Army1.getCivilization(req, res, next, true)
            
            req.params.civilization = req.params.civilization2
            const Army2 = new ArmyController()
            let ArmyArray2 = await Army1.getCivilization(req, res, next, true)
            
            let ArmyWin = ''
            let Army = []

            if(ArmyArray1[1].points.total_points > ArmyArray2[1].points.total_points ){
                
                ArmyWin = ArmyArray1[0].civilization
                Army = await this.processArmyLooser(ArmyArray2)


                Army = [ArmyArray1[0], ...[Army]]
            
            }else if(ArmyArray1[1].points.total_points < ArmyArray2[1].points.total_points){
                
                ArmyWin = ArmyArray2[0].civilization
                Army = await this.processArmyLooser(ArmyArray1)

              
                Army = [ArmyArray2[0], ...[Army]]
            }else{

                ArmyWin = 'Tie'
                

            }
           
            Army = [{Win:ArmyWin}, ...Army]

            if(internal)
            return Army
        
            return res.status(200).send(Army).json()
        
        } catch (err) {
            console.log(err)
        }
    }
        

    async processArmyLooser(Array) {
               
        let sortable = Object.entries(Array[0])
        .sort(([,a],[,b]) => a-b)
        .splice(0,2)
        .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
        
        let result = sortable

        return result;
    
    }



}
export default BattleController