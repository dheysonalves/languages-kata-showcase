import { expect } from 'chai';
import halloween from './index';

describe('Halloween Day test run', () => {
  it('should return "Bonfire toffee"', (done) => {
    expect(halloween(new Date('2013/10/31'))).to.be.equal('Bonfire toffee');
    done();
  });

  it('should return "toffee"', (done) => {
    expect(halloween(new Date('2012/07/31'))).to.be.eq('toffee');
    done();
  });

  it('should return "Bonfire toffee"', (done) => {
    expect(halloween(new Date('2011/10/12'))).to.be.eq('toffee');
    done();
  });
});
