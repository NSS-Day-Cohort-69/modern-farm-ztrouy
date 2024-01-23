// Returns an Array of seeds Objects based on a similar input Array
// For each seeds Object in original Array, new Array will have an increased number equal to Object.output
export const harvestPlants = (plantsArray) => {
    const harvest = []
    
    // Iterates through passed in Array
    for (const plant of plantsArray) {
        
        let plantOutput = 0

        // Determines how many times to push Object to new Array
        if (plant.type === "Corn") {
            plantOutput = plant.output / 2
        } else {
            plantOutput = plant.output
        }

        // Iterates plantOutput number of times
        for (let i = 0; i < plantOutput; i++) {
            harvest.push(plant)
        }
    }

    return harvest
}