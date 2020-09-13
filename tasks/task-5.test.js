import { logPeople } from './task-5';

test('logPeople() calls console.log twice times', () => {
  console.log = jest.fn();
  logPeople();
  expect(console.log).toHaveBeenCalledTimes(2);
  expect(logPeople()).toBeUndefined();
})

test("logPeople() calls console.log wich 'J. Smith - 40'", () => {
  console.log = jest.fn();
  logPeople();
  expect(console.log).toHaveBeenCalledWith('J. Smith - 40');
});

test("logPeople() calls console.log wich 'F. Camp - 30'", () => {
  console.log = jest.fn();
  logPeople();
  expect(console.log).toHaveBeenCalledWith('F. Camp - 30');
});


