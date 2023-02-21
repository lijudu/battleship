import $ from 'jQuery'
import { ship } from './ship'

const gameBoard = (name) => {
    // Define the x and y coordinates
    const xCoords = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    const yCoords = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

    // Initialize the grid as a 2D array
    const grid = [];
    for (let i = 0; i < yCoords.length; i++) {
        grid[i] = [];
        for (let j = 0; j < xCoords.length; j++) {
        grid[i][j] = '-';
    }
    }

    // each player has 5 ships (placed in allShip array) 
    const ship1 = ship('ship1', 2)
    const ship2 = ship('ship2', 3)
    const ship3 = ship('ship3', 3)
    const ship4 = ship('ship4', 4)
    const ship5 = ship('ship5', 5)

    let allShips = [ship1, ship2, ship3, ship4, ship5]
    let missedShots = []
    let allCoords = []

    // Place the ships
    const shipPlaced = () => {
        for (let ship of allShips) {
            let placed = false;
            while (!placed) {
            // Choose a random starting position and direction for the ship
            const x = Math.floor(Math.random() * xCoords.length);
            const y = Math.floor(Math.random() * yCoords.length);
            const horizontal = Math.random() < 0.5;
            
            // Check if the ship fits in the chosen position and direction
            let fits = true;
            let coords = [];
            for (let i = 0; i < ship.length; i++) {
                const xx = horizontal ? x + i : x;
                const yy = horizontal ? y : y + i;
                if (xx >= xCoords.length || yy >= yCoords.length || grid[yy][xx] !== '-') {
                fits = false;
                break;
                }
                coords.push(xCoords[xx] + yCoords[yy]);
                console.log(xCoords[xx] + yCoords[yy])
            }
            
            // If the ship fits, place it and mark the grid with 'X'
            if (fits) {
                for (let coord of coords) {
                grid[yCoords.indexOf(coord.slice(1))][xCoords.indexOf(coord.slice(0, 1))] = 'X';
                if (name == 'player1') {
                    $('#squarep.' + coord).css('background-color', '#b9c2a9')
                } else if (name == 'computer') {
                    // remove computer ship placed later...
                    $('#square.' + coord).css('background-color', '#b9c2a9')
                }
                }
                allCoords.push(coords)
                console.log(allCoords)
                placed = true;
            }
            }
        }

        ship1.coord = allCoords[0]
        ship2.coord = allCoords[1]
        ship3.coord = allCoords[2]
        ship4.coord = allCoords[3]
        ship5.coord = allCoords[4]
    }

    shipPlaced()

    // //given a ship in allShips, push coordinates to ship and return coordinate
    // const shipPlaced = (shipNumb, shipLoc) => {

    //     // user input places ships and then gameboard pushes ship coord 
    //     allShips[shipNumb].coord = shipLoc

    //     // can just use ship1 = [], ship 2=[] ie dont need to push to ship?
    //     return allShips

    // }

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
        if (sunkShips.length == 5) {
            return true
        } else if (sunkShips.length < 5) {
            return false
        }

    }

    return { shipPlaced, receiveAttack, allSunk }
}

export { gameBoard }