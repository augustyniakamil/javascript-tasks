import { getProductPrice } from './task-9';

test('getProductPrice(0) to equal null', () => {
  expect(getProductPrice(0)).toBeNull();
});

test('getProductPrice(3) to equal null', () => {
  expect(getProductPrice(3)).toBeNull();
});

test('getProductPrice(1) to equal 5', () => {
  expect(getProductPrice(1)).toBe(5);
});

test('getProductPrice(2) to equal 10', () => {
  expect(getProductPrice(2)).toBe(10);
});
