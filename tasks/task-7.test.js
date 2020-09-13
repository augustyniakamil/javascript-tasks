import { formatCreditCardNumber } from './task-7';

test('formatCreditCardNumber() to equal null', () => {
  expect(formatCreditCardNumber()).toBeNull();
});

test("formatCreditCardNumber('') to equal null", () => {
  expect(formatCreditCardNumber('')).toBeNull();
});

test("formatCreditCardNumber('12) to equal null", () => {
  expect(formatCreditCardNumber('12')).toBeNull();
});

test("formatCreditCardNumber(' 1 2 ') to equal null", () => {
  expect(formatCreditCardNumber(' 1 2 ')).toBeNull();
});

test("formatCreditCardNumber(' 11 11222 2333 34444 ') to equal '1111 2222 3333 4444'", () => {
  expect(formatCreditCardNumber(' 11 11222 2333 34444 ')).toBe('1111 2222 3333 4444');
});

test("formatCreditCardNumber('1111 2222 3333 4444') to equal '1111 2222 3333 4444'", () => {
  expect(formatCreditCardNumber('1111 2222 3333 4444')).toBe('1111 2222 3333 4444');
});


