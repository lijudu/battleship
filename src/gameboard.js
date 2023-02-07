const allShips = require('./ship');

// receiveAttack()
// keep track of missed shots
// report if all ships have been sunk 

const ship1 = [[1,1], [2,1]]
const ship2 = [[1,2], [2,2], [3,2]]

const gameBoard = () => {
    //given a ship in allShips, push coordinates to ship and return coordinate
    const shipPlaced = () => {
        const x = [1,2,3,4,5,6,7,8,9,10]
        const y = [1,2,3,4,5,6,7,8,9,10]



        // user input places ships and then gameboard pushes ship coord  = do later
        allShips[0].coord.push([1,1], [2,1])
        allShips[1].coord.push([1,2], [2,2], [3,2])

        // can just use ship1 = [], ship 2=[] ie dont need to push to ship?

        return allShips[0].coord, allShips[1].coord

    }

    const receiveAttack = () => {
        // given a pair of coordinates, does it exist within allShips[ships].coord?
        const testCoord = [1,1]
        const testShip = ship1
        // testShip should be allShips[0].coord

        const includesCoord = testShip.some(a => testCoord.every((v, i) => v === a[i]))

        if (includesCoord === true) {
           return allShips[0].isHit()
        } else if (includesCoord === false){
            // record missed shot somehow
            console.log('record missed coordinate and later display')
        }
    }

    const allSunk = () => {
        if (allShips.every(ship => ship.isSunk()) === true) {
            return true
        } else if (allShips.every(ship => ship.isSunk()) !== true) {
            return false
        }
    }

    return { shipPlaced, receiveAttack, allSunk }
}


module.exports = gameBoard()