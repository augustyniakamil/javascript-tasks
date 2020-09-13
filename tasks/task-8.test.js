import { isPalindrome } from './task-8';

test('isPalindrome() to equal false', () => {
  expect(isPalindrome()).toBe(false);
});

test("isPalindrome('') to equal false", () => {
  expect(isPalindrome('')).toBe(false);
});

test("isPalindrome('dog') to equal false", () => {
  expect(isPalindrome('dog')).toBe(false);
});

test("isPalindrome('level) to equal true", () => {
  expect(isPalindrome('level')).toBe(true);
});

test("isPalindrome('My gym) to equal true", () => {
  expect(isPalindrome('My gym')).toBe(true);
});

