const filter = require('../src/map');

test('Check if halfNumbers returns even numbers', () => {

  const value = [10, 20, 30];

  const result = filter.halfNumbers(value);

  const expectedValue = [5, 10, 15];

  expect(result).toEqual(expectedValue);

});


test('Check if spliceNames returns names starting with Hello', () => {
  const names = ['Bob','Mark','John'];

  const result = filter.spliceNames(names);

  const expectedValue = ['Hello Bob', 'Hello Mark', 'Hello John'];

  expect(result).toEqual(expectedValue);
});



test('Check if addSerialNumber will return an item starting with a number', () => {
  const fruit = ['apple', 'orange', 'pear'];

  const result = filter.addSerialNumber(fruit);

  const expectedValue = ['1. apple', '2. orange', '3. pear'];

  expect(result).toEqual(expectedValue);
})