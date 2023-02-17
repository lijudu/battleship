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
let playerAttempted = []

function computerAttack() {
    if (playerTurn == false) {
        // computer starts first, generate random attack coordinate
        const letters = ['a','b','c','d','e','f','g','h','i','k']
    
        const randomXInt = letters[Math.floor((Math.random() * 9))]
        const randomY = String(Math.floor((Math.random() * 10) + 1))
    
        const compCoord = randomXInt + randomY

        const findCompAttempt = compAttempted.find(item => item == compCoord)

        if (findCompAttempt == undefined) {
            compAttempted.push(compCoord)
            $('#squarep.' + compCoord).append('<div class="hit"></div>')
            console.log(compAttempted)
            player1.isAttacked(compCoord)
            
            // has player1 ship all sunk?
            if(player1.sunk() === true) {
            $('#main').append('<div class="declare">Computer Wins!</div>')
            return
            }
            
            // if not all sunk, continue with player1 turn 
            playerTurn = true
            return compAttempted
        } else if (findCompAttempt != undefined) {
            console.log('duplicate')
            // find new attack coord
            computerAttack()
        }
        }
}

function playerAttack() {
    if (playerTurn == true) {
        let getAttack = ""
    
        $('#computer').on('click', function(e){
            // player unable to hit same target twice

            getAttack = e.target.className
            // see if player has already clicked before
            const findAttempt = playerAttempted.find(item => item == getAttack)

            if (getAttack == 'hit') {
                // do nothing
            } else if (findAttempt == undefined) {
                // record coordinate as an attempt
                playerAttempted.push(getAttack)
                // create hit mark on board
                $('#square.' + getAttack).append('<div class="hit"></div>')
                console.log(playerAttempted)
                // see if computer board ship hit 
                // player2.isAttacked(getAttack)

                if(player2.isAttacked(getAttack)== true) {
                    $('#square.' + getAttack).css('background-color', '#78323e')
                }

                // determine if computer board all ships have sunk
                if(player2.sunk() ===  true){
                    $('#computer').off('click')
                    $('#main').append('<div class="declare">Player1 Wins!</div>')
                    $('#main').append('<div class="replay"><button class="replay">Replay</button></div>')
                    return
                }
                // return playerTurn back to computer
                playerTurn = false
                // wait for computer attack
                computerAttack()
            }

        })
    
    }
}

function restart() {
    $(document).on('click', '.replay', function() {
        location.reload()
    })
}


(function gameLoop() {
    computerAttack()
    playerAttack()
    restart()
   
})();


