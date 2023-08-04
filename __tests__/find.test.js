const filter = require('../src/find');

test('Check if firstGrownUp returns 20', () => {
  const inputAges = [15, 17, 30, 25, 18];
  const result = filter.firstGrownUp(inputAges);

  const expectedValue = 30;

  expect(result).toEqual(expectedValue);
});


test('Check if firstOrange has an orange value', () => {
  const inputFruit = ['apple', 'orange', 'pear'];
  const result = filter.firstOrange(inputFruit);

  const expectedValue = 'orange';

  expect(result).toEqual(expectedValue);
});


test('Check if there is a value in firstLengthOver5Name with length greater than 5', () => {
  const names = ['Amy', 'Robert', 'Bob', 'David', 'Mark', 'Mike'];

  const result = filter.firstLengthOver5Name(names);

  expect(result.length).toBeGreaterThan(5);
});

