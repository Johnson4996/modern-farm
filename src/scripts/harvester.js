export const harvestPlants = (plantsArr) =>{


const seedsArr = []

for(const plant of plantsArr){
    if(plant.type === "Asparagus"){
        for(let i = 0;i<plant.output;i++){
            seedsArr.push(plant)
        }
    } else if(plant.type === "Corn"){
        
        for(let i = 0;i<plant.output/2;i++){
            seedsArr.push(plant)
        }
    }else if(plant.type === "Potato"){
        for(let i = 0;i<plant.output;i++){
            seedsArr.push(plant)
        }
    }else if(plant.type === "Soybean"){
        for(let i = 0;i<plant.output;i++){
            seedsArr.push(plant)
        }
    }else if(plant.type === "Sunflower"){
        for(let i = 0;i<plant.output;i++){
            seedsArr.push(plant)
        }
    }else if(plant.type === "Wheat"){
        for(let i = 0;i<plant.output;i++){
            seedsArr.push(plant)
        }
    }
}


return seedsArr

}