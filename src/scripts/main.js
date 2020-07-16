import {createPlan} from "./plan.js"
import {createWheat} from "./seeds/wheat.js"
import {createAsparagus} from "./seeds/asparagus.js"
import {createCorn} from "./seeds/corn.js"
import {createPotato} from "./seeds/potato.js"
import {createSoybean} from "./seeds/soybean.js"
import {createSunflower} from "./seeds/sunflower.js"
import { usePlants } from "./field.js"
import {addPlant} from "./field.js"


const yearlyPlan = createPlan()
console.log(yearlyPlan)

const seedObj = createWheat
addPlant(seedObj)
const use = usePlants()
console.log(use)