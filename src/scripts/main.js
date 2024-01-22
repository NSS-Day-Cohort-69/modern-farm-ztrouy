import { createPlan } from "./plan.js"

import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

import { addPlant, usePlants } from "./field.js"

console.log("Welcome to the main module")

const yearlyPlan = createPlan()

console.log(yearlyPlan)

const asparagusSeed = createAsparagus()
console.log(asparagusSeed)

const cornSeed = createCorn()
console.log(cornSeed)

addPlant(createPotato())
addPlant(createCorn())

console.log(usePlants())