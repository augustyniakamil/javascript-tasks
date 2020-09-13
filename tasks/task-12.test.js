import { mergeAndSortNumberArrays } from './task-12';

test('mergeAndSortNumberArrays() to equal []', () => {
  expect(mergeAndSortNumberArrays()).toEqual([]);
});

test('mergeAndSortNumberArrays([]) to equal []', () => {
  expect(mergeAndSortNumberArrays([])).toEqual([]);
});

test('mergeAndSortNumberArrays([], []) to equal []', () => {
  expect(mergeAndSortNumberArrays([], [])).toEqual([]);
});

test('mergeAndSortNumberArrays([], [2, 1]) to equal [1, 2]', () => {
  expect(mergeAndSortNumberArrays([], [2, 1])).toEqual([1, 2]);
});

test('mergeAndSortNumberArrays([1, 3], [2, 1]) to equal []', () => {
  expect(mergeAndSortNumberArrays([1, 3], [2, 1])).toEqual([1, 1, 2, 3]);
});
