import { createPlan } from "./plan.js"
import { usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"
import { catalog } from "./catalog.js"

console.log("Welcome to the main module")

// Generates the list of plants to be planted for the year
const yearlyPlan = createPlan()
console.log(yearlyPlan)

// Plants all of the seeds specified in the list of plants
plantSeeds(yearlyPlan)
console.log(usePlants())

// Harvests all of the plants that were planted
const harvestedPlants = harvestPlants(usePlants())
console.log(harvestedPlants)

// Adds harvest to the DOM
const mainHTML = document.querySelector(".container")
mainHTML.innerHTML += catalog(harvestPlants(usePlants()))