import { expect } from 'chai';
import nextSquare from './index';

describe('Next Perfect Square test scenario', () => {
  it('should return the 144 when nextSquare(121)', (done) => {
    expect(nextSquare(121)).to.be.an('number').and.equal(144);
    done();
  });

  it('should return the 675 when nextSquare(625)', (done) => {
    expect(nextSquare(625)).to.be.an('number').and.equal(676);
    done();
  });

  it('should return null when nextSquare(114)', (done) => {
    expect(nextSquare(114)).to.be.equal(null);
    done();
  });
});
