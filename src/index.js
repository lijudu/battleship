import $ from 'jQuery'
import './styles.css'

import { player } from './player.js'

// create player1 and computer 
const player1 = player('player1')
const player2 = player('computer')

// computer starts first, keep computer attempted coordinates in an array
let playerTurn = false
let compAttempted = []

function computerAttack() {
    if (playerTurn == false) {
        // computer starts first, generate random attack coordinate
        const letters = ['a','b','c','d','e','f','g','h','i','j']
    
        const randomXInt = letters[Math.floor((Math.random() * 10))]
        const randomY = String(Math.floor((Math.random() * 10) + 1))
    
        const compCoord = randomXInt + randomY

        // if attempted coordinate not a duplicate:
        if (compAttempted.find(item => item == compCoord) ==  undefined) {
            compAttempted.push(compCoord)
            // mark player1 board as hit received
            $('#squarep.' + compCoord).append('<div class="hit"></div>')
            // attack player1 board
            player1.isAttacked(compCoord)
            
            // has player1 ship all sunk?
            if(player1.sunk() === true) {
                // gameover, show replay button
                $('#main').append('<div id="gameover"><div class="declare">Computer Wins!</div><div class="playagain"><button class="replay">Replay</button></div></div>')
                playerTurn = false
                $('#computer').off('click')
                return 
            }
            
            // if not all sunk, continue with player1 turn 
            playerTurn = true
        } else   {
            // find new attack coord
            computerAttack()
        }
        }
}


function playerAttack() {
    let playerAttempted = []

    if (playerTurn == true) {
        let getAttack = ""
    
        $('#computer').on('click', function(e){
            getAttack = e.target.className
            // see if player has already clicked before
            const findAttempt = playerAttempted.find(item => item == getAttack)

            // if player has clicked on same target, do nothing
            if (getAttack == 'hit') {
                // do nothing
            } else if (findAttempt == undefined) {
                // record coordinate as an attempt
                playerAttempted.push(getAttack)
                // create hit mark on board
                $('#square.' + getAttack).append('<div class="hit"></div>')
                // see if computer board ship hit, then mark on board
                if(player2.isAttacked(getAttack)== true) {
                    $('#square.' + getAttack).css('background-color', '#9e6b60')
                }
                // determine if computer board all ships have sunk = gameover
                if(player2.sunk() ===  true){
                    $('#computer').off('click')
                    $('#main').append('<div id="gameover"><div class="declare">Player 1 Wins!</div><div class="playagain"><button class="replay">Replay</button></div></div>')
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

// replay button function
function restart() {
    $(document).on('click', '.replay', function() {
        location.reload()
    })
}

// gameloop
(function gameLoop() {
    computerAttack()
    playerAttack()
    restart()
   
})();


