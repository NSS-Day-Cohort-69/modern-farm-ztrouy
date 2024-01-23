export const catalog = (harvestArray) => {
    let htmlString = ""

    for (const plant of harvestArray) {
        htmlString += `<section class="plant">${plant.type}</section>`
    }

    return htmlString
}