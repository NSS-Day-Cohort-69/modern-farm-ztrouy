export const harvestPlants = (plantsArray) => {
    const seeds = []
    
    for (const plant of plantsArray) {
        let plantOutput = 0

        if (plant.type === "Corn") {
            plantOutput = plant.output / 2
        } else {
            plantOutput = plant.output
        }

        for (let i = 0; i < plantOutput; i++) {
            seeds.push(plant)
        }
    }

    return seeds
}