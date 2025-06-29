import { expect } from 'chai';
import oddSum from './index';

describe('Sum of Even Pairs', () => {
  it('Should return a array of even pairs equal to ` [true, false, true, false, false]`', (done) => {
    expect(oddSum([11, 15, 6, 8, 9, 10])).to.be.an('array').to.eql([true, false, true, false, false]);
    done();
  });

  it('Should return a array of even pairs equal to `[false, true, true, true, false]`', (done) => {
    expect(oddSum([12, 21, 5, 9, 65, 32])).to.be.an('array').to.eql([false, true, true, true, false]);
    done();
  });

  it('Should return a array of even pairs equal to`[false, false, false, false, false]`', (done) => {
    expect(oddSum([1, 2, 3, 4, 5, 6])).to.be.an('array').to.eql([false, false, false, false, false]);
    done();
  });

  it('Should return a array of even pairs equal to`[false, false, false, true, true, false, true, false, true, true, false]`', (done) => {
    expect(oddSum([4, 5, 6, 7, 9, 45, 12, 32, 65, 49, 45, 840])).to.be.an('array').to.eql([false, false, false, true, true, false, true, false, true, true, false]);
    done();
  });
});
