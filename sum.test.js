const add = require('./sum')


test('adding 5 times 5  to equal 25', () => {
    expect(add(5,5,5,5,5)).toBe(25);
  });