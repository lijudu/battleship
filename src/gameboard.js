import { ship } from './ship'

const gameBoard = () => {
    // each player has 5 ships (placed in allShip array) 
    let ship1 = ship(2, 0)
    let ship2 = ship(3, 0)
    // const ship3 = ship(3, 0)
    // const ship4 = ship(4, 0)
    // const ship5 = ship(5, 0)

    let allShips = [ship1, ship2]

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

    const receiveAttack = (n) => {
        console.log('attack received')
        return n
        // // given a pair of coordinates, does it exist within allShips[ships].coord?
        // const attackCoord = [1,1]
        // const testShip = allShips[0]
        // const missed = []
        // // testShip should be allShips[0].coord

        // const includesCoord = testShip.some(a => attackCoord.every((v, i) => v === a[i]))

        // if (includesCoord === true) {
        //    return allShips[0].isHit()
        // } else if (includesCoord === false){
        //     // put missed coord in an array []
        //     missed.push(attackCoord) 
        //     return missed
        // }
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

export { gameBoard }