const shipTest = require('./ship');

test('shipTest', () => {
    expect(shipTest('hello')).toBe('hello');
})