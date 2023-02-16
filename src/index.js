import $ from 'jQuery'
import './styles.css'

import { player } from './player.js'

const player1 = player('player1')
const player2 = player('computer')

// place player1 ships
player1.place(0, ['a1', 'b1'])
player1.place(1, ['a2', 'b2', 'c2'])
// console.log(player1.place(0, ['a1', 'b1']))
// console.log(player1.place(1, ['a2', 'b2', 'c2']))

// place computer ships 
player2.place(0, ['a1', 'b1'])
player2.place(1, ['a2', 'b2', 'c2'])
// console.log(player2.place(0, ['a1', 'b1']))
// console.log(player2.place(1, ['a2', 'b2', 'c2']))

// computer attacks player1 = return player1.attack, create loop 
let playerTurn = false
let compAttempted = []

function computerAttack() {
    if (playerTurn == false) {
        // computer starts first, generate random attack coordinate
        const letters = ['a','b','c','d','e','f','g','h','i','k']
    
        const randomXInt = letters[Math.floor((Math.random() * 9))]
        const randomY = String(Math.floor((Math.random() * 10) + 1))
    
        const compCoord = randomXInt + randomY

        if(compAttempted.find(item => item == compCoord)) {
            console.log('duplicate')
        } else {
            $('#squarep.' + compCoord).append('<div class="hit"></div>')
        }

        compAttempted.push(compCoord)
        console.log(compCoord)
        console.log(compAttempted)
        // see if player1 ship has been attacked
        player1.isAttacked(compCoord)
    
        // has player1 ship all sunk?
        if(player1.sunk() === true) {
            $('#main').append('<div class="declare">Computer Wins!</div>')
            return
        }
    
        // if not all sunk, continue with player1 turn 
        playerTurn = true
        return compAttempted
        }
}

function playerAttack() {
    if (playerTurn == true) {
        let getAttack = ""
    
        $('#computer').on('click', function(e){
            getAttack = e.target.className
            $('#square.' + getAttack).append('<div class="hit"></div>')
            console.log(getAttack)
    
            // see if computer ship has been attacked
            player2.isAttacked(getAttack)
    
            // see if computer ship has all been sunk 
            if(player2.sunk() ===  true){
                $('#computer').off('click')
                $('#main').append('<div class="declare">Player1 Wins!</div>')
                $('#main').append('<div class="replay"><button class="replay">Replay</button></div>')
                return
            }
    
            // if not all sunk, then continue with computer turn 
            playerTurn = false

            // computer Turn
            computerAttack()
        })
    
    }
}


(function gameLoop() {
    computerAttack()
    playerAttack()
   
})();


// console.log(player1.isAttacked('a1'))
// console.log(player1.isAttacked('b1'))
// console.log(player1.isAttacked('a2'))
// console.log(player1.isAttacked('b2'))
// console.log(player1.isAttacked('c2'))

// check if any ship has sunk or continue game
// console.log(player1.sunk())

