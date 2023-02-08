import {gameBoard} from './gameboard.js'

// play against computer
// receive attacking coordinate value, store this
// alternate turns (async/wait??) receiving hits
// player/compuer each have 5 ships
// computer should not hit same coordinate twice (use an API?)

const player = (name) => {
  let board = gameBoard()
  // receive attack
  let attack = () => {
    return board.receiveAttack(22)
  }
  

  return {name, attack}
}
export { player }