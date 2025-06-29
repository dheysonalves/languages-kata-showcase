import { expect } from 'chai';
import buildArray from './index';

describe('An array build from permutation', () => {
  it('should have an array of elements build from permutation', () => {
    expect(buildArray([0, 2, 1, 5, 3, 4])).to.be.eql([0, 1, 2, 4, 5, 3]);
  });

  it('should have an array of elements build from permutation', () => {
    expect(buildArray([5, 0, 1, 2, 3, 4])).to.be.eql([4, 5, 0, 1, 2, 3]);
  });
});
