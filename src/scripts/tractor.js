import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"


// Calls addPlant with the appropriate argument based on String input from Array 
export const plantSeeds = (plantingPlan) => {
    for (const row of plantingPlan) {
        for (const column of row) {
            if (column === "Asparagus") {
                addPlant(createAsparagus())
            } else if (column === "Corn") {
                addPlant(createCorn())
            } else if (column === "Potato") {
                addPlant(createPotato())
            } else if (column === "Soybean") {
                addPlant(createSoybean())
            } else if (column === "Sunflower") {
                addPlant(createSunflower())
            } else if (column === "Wheat") {
                addPlant(createWheat())
            }
        }
    }
}