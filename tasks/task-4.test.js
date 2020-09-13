import { getPeopleFullNames } from './task-4';

test('getPeopleFullNames([]) to equal ', () => {
  expect(getPeopleFullNames([])).toEqual([]);
});

test("getPeopleFullNames([{firstName: 'John', lastName: 'Smith'}, {firstName: 'Frank', lastName: 'Camp'}]) to equal ['John Smith', 'Frank Camp']", () => {
  expect(getPeopleFullNames([{firstName: 'John', lastName: 'Smith'}, {firstName: 'Frank', lastName: 'Camp'}])).toEqual(['John Smith', 'Frank Camp']);
});

test("getPeopleFullNames([{firstName: 'John   ', lastName: 'Smith'}, {firstName: 'Frank', lastName: '  Camp'}]) to equal ['John Smith', 'Frank Camp']", () => {
  expect(getPeopleFullNames([{firstName: 'John   ', lastName: 'Smith'}, {firstName: 'Frank', lastName: '  Camp'}])).toEqual(['John Smith', 'Frank Camp']);
});
