const plants = []

export const addPlant = (seed) => {
    plants.push(seed)
}

export const usePlants = () => {
    return plants
}