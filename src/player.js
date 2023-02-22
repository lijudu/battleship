import $ from 'jQuery'
import {gameBoard} from './gameboard.js'

const player = (name) => {
  // set up gameboard with random coordinates for ships
  let board = gameBoard(name)

  // receive attack given some input coordinate 
  const isAttacked = (inputCoord) => {
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

  return {name, isAttacked, sunk}
}



export { player }