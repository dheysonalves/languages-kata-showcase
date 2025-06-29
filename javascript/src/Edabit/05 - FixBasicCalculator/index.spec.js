import { expect } from 'chai';
import basicCalculator from './index';

describe('Fix a basic Calculator Bug', () => {
  it('Should return a sum with result of 6', ((done) => {
    expect(basicCalculator(2, '+', 4)).to.be.equal(6);
    done();
  }));

  it('Should return a minus with result of 6', ((done) => {
    expect(basicCalculator(12, '-', 6)).to.be.equal(6);
    done();
  }));

  it('Should return a division with result of 9', ((done) => {
    expect(basicCalculator(18, '/', 2)).to.be.equal(9);
    done();
  }));

  it('Should return a multiply with result of 24', ((done) => {
    expect(basicCalculator(6, '*', 4)).to.be.equal(24);
    done();
  }));

  it('Should return a division with result of null', ((done) => {
    expect(basicCalculator(2, '/', 0)).to.be.equal(null);
    done();
  }));

  it('Should return null when using an invalid operator', ((done) => {
    expect(basicCalculator(2, 'x', 4)).to.be.equal(null);
    done();
  }));
});
