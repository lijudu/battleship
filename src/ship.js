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

export { ship }