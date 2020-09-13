import { hasPermission } from './task-13';

test('hasPermission([]) to equal true', () => {
  expect(hasPermission([])).toBe(true);
});

test("hasPermission([], 'P1') to equal false", () => {
  expect(hasPermission([], 'P1')).toBe(false);
});

test("hasPermission(['P2', 'P3'], 'P1') to equal false", () => {
  expect(hasPermission(['P2', 'P3'], 'P1')).toBe(false);
});

test("hasPermission(['P2', 'P3'], 'P3') to equal true", () => {
  expect(hasPermission(['P2', 'P3'], 'P3')).toBe(true);
});
