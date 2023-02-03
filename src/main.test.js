const player1 = require('./ship');

test('player1', () => {
    // expect(player1.length).toBe(2);
    expect(player1.isHit()).toBe('increase hit counter');
})