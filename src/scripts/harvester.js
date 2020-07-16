export const harvestPlants = (plantsArr) =>{


const seedsArr = []

for(const plant of plantsArr){
    if(plant.type === "Asparagus"){
        for(let i = 0;i<plant.output;i++){
            seedsArr.push(plant)
        }
    }
    
    if(plant.type === "Corn"){
        for(let i = 0;i<plant.output/5;i++){
            seedsArr.push(plant)
        }
    }
    if(plant.type === "Potato"){
        for(let i = 0;i<plant.output;i++){
            seedsArr.push(plant)
        }
    }
    if(plant.type === "Soybean"){
        for(let i = 0;i<plant.output;i++){
            seedsArr.push(plant)
        }
    }
    if(plant.type === "Sunflower"){
        for(let i = 0;i<plant.output;i++){
            seedsArr.push(plant)
        }
    }
    if(plant.type === "Wheat"){
        for(let i = 0;i<plant.output;i++){
            seedsArr.push(plant)
        }
    }
}


return seedsArr

}