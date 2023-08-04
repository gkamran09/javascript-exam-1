const filter = require('../src/filter');

test('Check if filterEvenNumbers returns even numbers', () => {
    const value = 10;

    const result = filter.filterEvenNumbers([value]);

    const expectedValue = [value];
    expect(result).toEqual(expectedValue);
});



test('Check if number is not an even number', () => {
    const value = 9;

    const result = filter.filterEvenNumbers([value]);

    const expectedValue = [value];
    expect(result).not.toEqual(expectedValue);
});



test('Check if filterLengthWith4 returns words with 4 letters', () => {
    const value = 'test';

    const result = filter.filterLengthWith4([value]);

    const expectedValue = [value];

    expect(result).toEqual(expectedValue);
})

test('Check if filterLengthWith4 returns words not equal to 4 letters', () => {
    const value = 'testing';

    const result = filter.filterLengthWith4([value]);

    const expectedValue = [value];

    expect(result).not.toEqual(expectedValue);
})



test('Check if filterLetters returns letter starting with letter a', () => {
    const value = 'apple';

    const result = filter.filterStartWithA([value]);

    const expectedValue = [value];

    expect(result).toEqual(expectedValue);
});


test('Check if filterLetters returns letter starting with letter b instead of a', () => {
    const value = 'banana';

    const result = filter.filterStartWithA([value]);

    const expectedValue = [value];

    expect(result).not.toEqual(expectedValue);
});