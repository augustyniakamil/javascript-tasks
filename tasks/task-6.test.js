import { sumCart } from './task-6';

test('sumCart([]) to equal 0', () => {
  expect(sumCart([])).toBe(0);
});

test('sumCart([{id: 1, count: 1, price: 3}, {id: 2, count: 2, price: 2}]) to equal 7', () => {
  expect(sumCart([{id: 1, count: 1, price: 3}, {id: 2, count: 2, price: 2}])).toBe(7);
});
