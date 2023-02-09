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
        const y = ['a','b','c','d','e','f','g','h','i','j']

        // user input places ships and then gameboard pushes ship coord  = do later
        allShips[0].coord.push('1a')
        allShips[1].coord.push('1b', '2b')

        // can just use ship1 = [], ship 2=[] ie dont need to push to ship?
        return allShips

    }

    const receiveAttack = (shotCoord) => {
        let missedShots = []

        let attackCoord = shotCoord
        // given coordinates, does it exist within allShips[ships].coord?
        const shipIndex = allShips.findIndex(ship => ship.coord.includes(attackCoord))

        // if attackCoord does not exist within ship.coord, push in to missedShots array
        if (shipIndex === -1) {
            missedShots.push(attackCoord)
        // if attackCoord is a coordinate in ship.coord, increase hit of attacked ship
        } else if (shipIndex !== -1){
            return allShips[shipIndex].isHit()
        }

        return missedShots
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