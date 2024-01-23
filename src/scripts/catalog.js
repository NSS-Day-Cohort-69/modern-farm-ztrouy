// Generates HTML for all harvested plants
export const catalog = (harvestArray) => {
    let htmlString = ""

    // Adds each harvested plant to HTML
    for (const plant of harvestArray) {
        htmlString += `<section class="plant">${plant.type}</section>`
    }

    return htmlString
}