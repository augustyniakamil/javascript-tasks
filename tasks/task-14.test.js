import { hasPermissions } from './task-14';

test('hasPermissions([]) to equal true', () => {
  expect(hasPermissions([])).toBe(true);
});

test('hasPermissions([], []) to equal true', () => {
  expect(hasPermissions([], [])).toBe(true);
});

test("hasPermissions([], ['P1']) to equal false", () => {
  expect(hasPermissions([], ['P1'])).toBe(false);
});

test("hasPermissions(['P2', 'P3'], ['P1']) to equal false", () => {
  expect(hasPermissions(['P2', 'P3'], ['P1'])).toBe(false);
});

test("hasPermissions(['P2', 'P3'], ['P3']) to equal true", () => {
  expect(hasPermissions(['P2', 'P3'], ['P3'])).toBe(true);
});

test("hasPermissions(['P2', 'P3'], ['P2', 'P3']) to equal true", () => {
  expect(hasPermissions(['P2', 'P3'], ['P2', 'P3'])).toBe(true);
});

test("hasPermissions(['P2', 'P4'], ['P2', 'P3']) to equal false", () => {
  expect(hasPermissions(['P2', 'P4'], ['P2', 'P3'])).toBe(false);
});
