import { getPeople } from './task-10';

test('getPeople() to equal []', () => {
  expect(getPeople()).toEqual([]);
});

test("getPeople('aa') to equal []", () => {
  expect(getPeople('aa')).toEqual([]);
});

test("getPeople('aaa') to equal []", () => {
  expect(getPeople('aaa')).toEqual([]);
});

test("getPeople('joh') to equal [{firstName: 'John', lastName: 'Smith', age: 40}, {firstName: 'John', lastName: 'Camp', age: 20}]", () => {
  expect(getPeople('joh')).toEqual([{firstName: 'John', lastName: 'Smith', age: 40}, {firstName: 'John', lastName: 'Camp', age: 20}]);
});

test("getPeople('joHn s') to equal [{firstName: 'John', lastName: 'Smith', age: 40}]", () => {
  expect(getPeople('joHn s')).toEqual([{firstName: 'John', lastName: 'Smith', age: 40}]);
});

