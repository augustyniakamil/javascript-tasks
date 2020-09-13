import { getRandomNumber } from './task-11';

test('getRandomNumber() returns integer number between [5, 10] ', () => {
  for(let i=0; i <= 1000; i++) {
    const randomNumber = getRandomNumber();
    expect(randomNumber).toBeGreaterThanOrEqual(5);
    expect(randomNumber).toBeLessThanOrEqual(10);
    expect(randomNumber % 1).toBe(0);
  }
});
