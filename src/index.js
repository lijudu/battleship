import $ from 'jquery'
import './styles.css'

import { player } from './player.js'
import { loadGrid } from './DOM'


$(loadGrid())

const player1 = player('mandu')
// const player2 = player('computer')

// place player1 ships
console.log(player1.place(0, ['1a', '1b']))
console.log(player1.place(1, ['2a', '2b', '2c']))

// computer attacks player1 = return player1.attack
console.log(player1.isAttacked('1a'))
console.log(player1.isAttacked('1b'))
console.log(player1.isAttacked('2a'))
console.log(player1.isAttacked('2b'))
console.log(player1.isAttacked('2c'))

console.log(player1.sunk())

