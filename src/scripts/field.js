const plants = []

export const addPlant = (seed) => {
    debugger
    if (Array.isArray(seed) === true) {
        for (const element of seed) {
            plants.push(element)
        }
    } else {
        plants.push(seed)
    }
}

export const usePlants = () => {
    return plants
}