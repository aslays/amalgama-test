import dataPuntos from "../data/dataPuntos"
import dataCivilizaciones from "../data/dataCivilizaciones"

require("dotenv").config()

class Army {
    
    
    constructor ( civilization, pikemens, archers, gentlemans ){
      
        this.civilization = civilization;
        this.pikemens = pikemens
        this.archers = archers
        this.gentlemans = gentlemans
        
    }

    async getCivilizationClass() {
       
        
        const data = [{  
                        civilization: this.civilization,
                        pikemens : this.pikemens,
                        archers : this.archers,
                        gentlemans: this.gentlemans 
                     }]
                
        return data

    }


    async calculatePoints(){

        try {
            
            const points_units_p = dataPuntos.find(pts => pts.unidad === 'Piquero').puntos_aportados * this.pikemens
            const points_units_a = dataPuntos.find(pts => pts.unidad === 'Arquero').puntos_aportados * this.archers
            const points_units_g = dataPuntos.find(pts => pts.unidad === 'Caballero').puntos_aportados * this.gentlemans
            const total = points_units_p + points_units_a + points_units_g

            return { points : {
                        points_pikemens : points_units_p,
                        points_archers : points_units_a,
                        points_gentlemans : points_units_g,
                        total_points : total    
                    } 
                }

        } catch (err) {
            console.log(err)
        }    
    }

    
    async getDataCivilization(){


        try{

            const data = dataCivilizaciones.find(cvl => cvl.civilizacion === this.civilization)

            return data


        }catch(err){

            console.log(err)
        }

    }


    async getInitialMoney(){
        
        //all Armys
        return { gold: 1000}

    }
  
    
}

export default Army