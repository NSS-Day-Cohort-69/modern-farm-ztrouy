export const harvestPlants = (plantsArray) => {
    const seeds = []
    
    for (const plant of plantsArray) {
        let plantOutput = 0

        debugger
        if (plant.constructor === Array && plant[0].type === "Corn") {
            plantOutput = plant[0].output
        } else {
            plantOutput = plant.output
        }

        for (let i = 0; i < plantOutput; i++) {
            if (plant.constructor === Array && plant[0].type === "Corn") {
                seeds.push(plant[0])
            } else {
                seeds.push(plant)
            }
        }
    }

    return seeds
}