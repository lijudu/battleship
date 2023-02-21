
const ship = (name, length) => {    
    // each ship also records its coordinates and number of hits
    let hits = []
    let coord = []

    // if ship coordinates = attack coord, then will place that attack coord into a hit array 
    const isHit = (location) => {
        hits.push(location)
    }
    // if hits array length == ship length, then return true (ship has sunk)
    const isSunk = () => {
        let hitNumb = hits.length
        let shipLength = length
        if (hitNumb === shipLength) {
            console.log('sunk')
            return true 
        } else if (hitNumb !== shipLength) {
            return false
        }
    }

    return {name, length, isHit, isSunk, coord }
}

export { ship }