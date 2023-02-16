import $ from 'jQuery'
import { ship } from './ship'

const gameBoard = () => {
    // each player has 5 ships (placed in allShip array) 
    const ship1 = ship(2)
    const ship2 = ship(3)
    // const ship3 = ship(3)
    // const ship4 = ship(4)
    // const ship5 = ship(5)

    let allShips = [ship1, ship2]
    let missedShots = []

    //given a ship in allShips, push coordinates to ship and return coordinate
    const shipPlaced = (shipNumb, shipLoc) => {

        // user input places ships and then gameboard pushes ship coord 
        allShips[shipNumb].coord = shipLoc

        
        // can just use ship1 = [], ship 2=[] ie dont need to push to ship?
        return allShips

    }

    const receiveAttack = (shotCoord) => {
        // let missedShots = []

        let attackCoord = shotCoord

        // given coordinates, does it exist within allShips[ships].coord?
        const shipIndex = allShips.findIndex(ship => ship.coord.includes(attackCoord))

        // if attackCoord does not exist within ship.coord, push in to missedShots array
        if (shipIndex === -1) {
            return missedShots
          
        // if attackCoord is a coordinate in ship.coord, increase hit of attacked ship
        } else if (shipIndex !== -1){
            console.log('hit')
            allShips[shipIndex].isHit(attackCoord)
            return true
        }
    
    }

    const allSunk = () => {
        let sunkShips = []

        // iterate through allShips array and check if each ship has been sunk
        // if ship has been sunk, then increase number of sunkShips 
        for(let i=0; i<allShips.length; i++) {
            if(allShips[i].isSunk() == true) {
                sunkShips.push('x')
                console.log(sunkShips)

            }
        }
        // if length of sunkShips == total number of ships, then all ships have been sunk
        if (sunkShips.length == 2) {
            return true
        } else if (sunkShips.length < 2) {
            return false
        }

    }

    return { shipPlaced, receiveAttack, allSunk }
}

export { gameBoard }