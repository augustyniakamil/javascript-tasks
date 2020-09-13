import { getMaxNumber } from './task-1';

test('getMaxNumber() to equal null', () => {
  expect(getMaxNumber()).toBeNull();
});

test("getMaxNumber(true, false, '', isNaN) to equal null", () => {
  expect(getMaxNumber(true, false, '', isNaN)).toBeNull();
});

test("getMaxNumber(true, 'test', null, 7, undefined) to equal 7", () => {
  expect(getMaxNumber(true, 'test', null, 7, undefined)).toBe(7);
});

test("getMaxNumber(1, true, 'test', null, 7, undefined, '15', '') to equal 7", () => {
  expect(getMaxNumber(1, true, 'test', null, 7, undefined, '15', '')).toBe(7);
});

