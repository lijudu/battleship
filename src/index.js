import $ from 'jquery'

import { player } from './player.js'


$("#main").text('hello!')

const player1 = player('mandu')
const player2 = player('computer')

console.log(player1.attack())
