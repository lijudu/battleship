const allShips = require('./ship');
const gameBoard = require('./gameboard');

// test('ship1', () => {
//     expect(ship1.length).toBe(2);
//     expect(ship1.isHit()).toBe('increase hit counter');
//     expect(ship1.isHit()).toEqual(2)
//     expect(ship1.isSunk()).toBe(false)
// })

test('newBoard', () => {
    // expect(gameBoard.shipPlaced(allShips[1])).toEqual([[1,2], [2,2], [3,2]])
    expect(gameBoard.receiveAttack()).toEqual(1)
})