import {createWheat} from "./seeds/wheat.js"
import {createAsparagus} from "./seeds/asparagus.js"
import {createCorn} from "./seeds/corn.js"
import {createPotato} from "./seeds/potato.js"
import {createSoybean} from "./seeds/soybean.js"
import {createSunflower} from "./seeds/sunflower.js"
import {addPlant} from "./field.js"


export const plantSeeds = (plan) =>{

    for(var i = 0; i < plan.length; i++){
        for(var j = 0; j < plan[i].length; j++){
    
            if(plan[i][j] ==="Asparagus"){
                addPlant(createAsparagus())
            }
            if(plan[i][j] ==="Wheat"){
                addPlant(createWheat())
            }
            if(plan[i][j] ==="Corn"){
                addPlant(createCorn())
            }
            if(plan[i][j] ==="Potato"){
                addPlant(createPotato())
            }
            if(plan[i][j] ==="Sunflower"){
                addPlant(createSunflower())
            }
            if(plan[i][j] ==="Soybean"){
                addPlant(createSoybean())
            }
        }
    }


}


