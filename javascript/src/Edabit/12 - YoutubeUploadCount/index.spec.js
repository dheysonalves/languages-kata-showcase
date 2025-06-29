import { expect } from 'chai';
import uploadCount from './index';

describe('Youtube upload count', () => {
  it('should return a count of 2 for the months', (done) => {
    expect(uploadCount(['Sept 22', 'Sept 21', 'Oct 15'], 'Sept')).to.be.an('number').to.be.equal(2);
    done();
  });

  it('should return a count of 1 for the months', (done) => {
    expect(uploadCount(['Sept 22', 'Sept 21', 'Oct 15'], 'Oct')).to.be.equal(1);
    done();
  });
});
