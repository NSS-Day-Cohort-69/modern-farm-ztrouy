// Array that keeps track of all planted seeds Objects
const plants = []

// Adds a seeds Object to plants Array
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

// Returns plants Array
export const usePlants = () => {
    return plants
}