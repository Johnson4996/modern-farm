import {createPlan} from "./plan.js"
import { usePlants } from "./field.js"
import {plantSeeds} from "./tractor.js"


const yearlyPlan = createPlan()
console.log(yearlyPlan)
const seedToPlant = plantSeeds(yearlyPlan)
console.log(usePlants())




