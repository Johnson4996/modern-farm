export const harvestPlants = (plantsArr) =>{


const seedsArr = []

for(const plant of plantsArr){
    if(plant.type === "Asparagus"){
        for(let i = 0;i<plant.output;i++){
            seedsArr.push(plant)
        }
    } else if(Array.isArray(plant)){
       //this is checking for corn array
        const onePlant = plant[0]
        for(let i = 0;i<onePlant.output;i++){

            seedsArr.push(onePlant)
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