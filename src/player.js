import {gameBoard} from './gameboard.js'

const player = (name) => {
  // set up gameboard
  let board = gameBoard()
  // set up ships
  const place = (shipNumb, shipLoc) => {
    // takes in ship number (starting at 0), and coord array 
    board.shipPlaced(shipNumb, shipLoc)
    return ('ship placed  ')
    // board.shipPlaced(1, ['2a', '2b'])
  }
  // receive attack given some input coordinate 
  const isAttacked = (inputCoord) => {
    board.receiveAttack(inputCoord)
    return ('attack received')
  }
  // determine if all of players ships have sunk (= gameover)
  const sunk = () => {
    
    if(board.allSunk() == true) {
      return ('restart game')
    } else if (board.allSunk() == false) {
      return ('continue game')
    }

  }

  return {name, isAttacked, place, sunk}
}



export { player }