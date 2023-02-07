const ship = (length, hits, sunk) => {
    const isHit = () => {
        return hits + 1
    }
    const isSunk = () => {
        if(length === hits) {
            return sunk = true
        } else if (length !== hits){
            return sunk = false
        }
    }
    const coord = []

    return { length, isHit, isSunk, coord }
}

// allShips should be an array that contains up to 5 ships with different lengths
const ship1 = ship(2, 2)
const ship2 = ship(3, 3)
// const ship3 = ship(3, 0)
// const ship4 = ship(4, 0)
// const ship5 = ship(5, 0)

const allShips = [ship1, ship2]

module.exports = allShips;