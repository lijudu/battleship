import {gameBoard} from './gameboard.js'

// play against computer
// receive attacking coordinate value, store this
// alternate turns (async/wait??) receiving hits
// player/compuer each have 5 ships
// computer should not hit same coordinate twice (use an API?)

const player = (name) => {
  // set up gameboard
  let board = gameBoard()
  // set up ships
  let place = () => {
    return board.shipPlaced()
  }
  // receive attack
  let attack = () => {
    return board.receiveAttack('1b')
  }
  // return sunk ship
  let sunk = () => {
    return board.allSunk()
  }
  

  return {name, attack, place, sunk}
}
export { player }