const ship = (length, hits, sunk) => {
    const isHit = () => (hits + 1);
    const isSunk = () => {
        if(length === hits) {
            return sunk = true
        } else if (length !== hits){
            return sunk = false
        }
    }

    return { length, hits, isHit, isSunk }
}

const player1 = ship(2,1);


module.exports = player1;