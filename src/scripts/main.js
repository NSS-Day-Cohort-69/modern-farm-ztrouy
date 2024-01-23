import { createPlan } from "./plan.js"

import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

import { addPlant, usePlants } from "./field.js"

import { plantSeeds } from "./tractor.js"

import { harvestPlants } from "./harvester.js"

import { catalog } from "./catalog.js"

console.log("Welcome to the main module")

const yearlyPlan = createPlan()

console.log(yearlyPlan)

plantSeeds(yearlyPlan)

console.log(usePlants())

console.log(harvestPlants(usePlants()))

const mainHTML = document.querySelector(".container")
mainHTML.innerHTML += catalog(harvestPlants(usePlants()))