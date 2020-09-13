import { getEvenNumbers } from './task-3';

const noEvenNumbersMsg = 'No even numbers.'

test(`getEvenNumbers() to equal '${noEvenNumbersMsg}'`, () => {
  expect(getEvenNumbers()).toBe(noEvenNumbersMsg);
});

test(`getEvenNumbers([]) to equal '${noEvenNumbersMsg}'`, () => {
  expect(getEvenNumbers([])).toBe(noEvenNumbersMsg);
});

test(`getEvenNumbers(['', 'asd']) to equal '${noEvenNumbersMsg}'`, () => {
  expect(getEvenNumbers(['', 'asd'])).toBe(noEvenNumbersMsg);
});

test(`getEvenNumbers(['', '15', 15]) to equal '${noEvenNumbersMsg}'`, () => {
  expect(getEvenNumbers(['', '15', 15])).toBe(noEvenNumbersMsg);
});

test("getEvenNumbers([2, 3, 5, 6, 9, 8, '10']) to equal 'Even numbers: 2, 6, 8'", () => {
  expect(getEvenNumbers([2, 3, 5, 6, 9, 8, '10'])).toBe('Even numbers: 2, 6, 8');
});
