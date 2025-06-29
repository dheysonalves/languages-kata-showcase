import { expect } from 'chai';
import arithmeticProgression from './index';

describe('Arithmetic Progression calculation', () => {
  it('should return an array with those elements `1, 3, 5, 7, 9` as a string', () => {
    expect(arithmeticProgression(1, 2, 5)).to.be.an('string').to.be.equal('1, 3, 5, 7, 9');
  });

  it('should return an array with those elements `1, 1, 1, 1, 1` as a string', () => {
    expect(arithmeticProgression(1, 0, 5)).to.be.an('string').to.be.equal('1, 1, 1, 1, 1');
  });
});
