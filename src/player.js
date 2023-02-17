import $ from 'jQuery'
import {gameBoard} from './gameboard.js'

const player = (name) => {
  // set up gameboard
  let board = gameBoard()
  // set up ships
  const place = (shipNumb, shipLoc) => {
    // takes in ship number (starting at 0), and coord array 
    board.shipPlaced(shipNumb, shipLoc)

    // show ship on board css
    if (name='player1') {
      shipLoc.forEach((item) => {
        $('#squarep.' + item).css('background-color', '#b9c2a9')
      })
    }

    return ('ship placed')
  }
  // receive attack given some input coordinate 
  const isAttacked = (inputCoord) => {
    // if(name=='computer' && board.receiveAttack(inputCoord)== true) {
    //   $('#square.' + inputCoord).css('background-color', '#b9c2a9')
    // }
    // else if (name='player1') {
    //   board.receiveAttack(inputCoord) 
    // }
    board.receiveAttack(inputCoord) 
      // if (board.receiveAttack(inputCoord) == true) {
      //   // change hit color
        
      // 

  }
  // determine if all of players ships have sunk (= gameover)
  const sunk = () => {
    
    if(board.allSunk() == true) {
      console.log('all ships sunk')
      return true
    } else if (board.allSunk() == false) {
      console.log('continue')
      return false
    }

  }

  return {name, isAttacked, place, sunk}
}



export { player }