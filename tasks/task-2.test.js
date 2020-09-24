import { isEven } from './task-2';

test('isEven() to equal null', () => {
  expect(isEven()).toBeNull();
});

test("isEven('') to equal null", () => {
  expect(isEven('')).toBeNull();
});

test('isEven(false) to equal null', () => {
  expect(isEven(false)).toBeNull();
});

test('isEven(NaN) to equal null', () => {
  expect(isEven(NaN)).toBeNull();
});

test('isEven(15) to equal false', () => {
  expect(isEven(15)).toBe(false);
});

test("isEven('15') to equal null", () => {
  expect(isEven('15')).toBeNull();
});

test('isEven(6) to equal true', () => {
  expect(isEven(6)).toBe(true);
});

test('isEven(0) to equal true', () => {
  expect(isEven(0)).toBe(true);
});
