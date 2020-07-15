import {createPlan} from "./plan.js"
import {createWheat} from "./seeds/wheat.js"

const yearlyPlan = createPlan()

console.log(yearlyPlan)
console.log(createWheat())