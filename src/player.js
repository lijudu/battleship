import $ from 'jQuery'
import {gameBoard} from './gameboard.js'

const player = (name) => {
  // set up gameboard
  let board = gameBoard(name)
  // set up ships
  const place = () => {
    // board.shipPlaced()
  }
  // receive attack given some input coordinate 
  const isAttacked = (inputCoord) => {

    // board.receiveAttack(inputCoord) 

    if (board.receiveAttack(inputCoord)== true) {
      return true
    }
  }
  // determine if all of players ships have sunk (= gameover)
  const sunk = () => {
    
    if(board.allSunk() == true) {
      return true
    } else if (board.allSunk() == false) {
      return false
    }

  }

  return {name, isAttacked, place, sunk}
}



export { player }