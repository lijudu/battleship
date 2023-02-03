const ship = (length, hits, sunk) => {
    const isHit = (hits) => (hits++);
    const isSunk = (length, hits) => console.log('calculate based on length and hit')

    return { length, hits, sunk, isHit, isSunk}
}

const player1 = ship(2,0,false);


module.exports = player1;