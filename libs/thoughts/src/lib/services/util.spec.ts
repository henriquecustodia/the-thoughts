import { getRandomArrayIndex } from './util';

describe('UtilService', () => {
  let array: unknown[];

  beforeEach(async () => {
    array = Array(5); 
  });

  it('should return an index fewer than 5', () => {
    expect(getRandomArrayIndex(array.length)).toBeLessThan(5);
  });

  it('should return an index greater or equal to 0', () => {
    expect(getRandomArrayIndex(array.length)).toBeGreaterThanOrEqual(0);
  });

  it('should return a number', () => {
    expect(typeof getRandomArrayIndex(array.length)).toEqual('number');
  });
  
});
