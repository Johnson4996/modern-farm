import {createPlan} from "./plan.js"
import { usePlants } from "./field.js"
import {plantSeeds} from "./tractor.js"
import {harvestPlants} from "./harvester.js"


const yearlyPlan = createPlan()
console.log(yearlyPlan)
const seedToPlant = plantSeeds(yearlyPlan)
const plantArr = usePlants ()
const seedsArr = harvestPlants(plantArr)
console.log(plantArr)




