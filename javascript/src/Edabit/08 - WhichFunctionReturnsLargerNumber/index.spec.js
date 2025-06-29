import { expect } from 'chai';
import whichIsLarger from './index';

describe('Function which returns the larger number', () => {
  it('Should return the letter `g` when second function is larger', (done) => {
    expect(whichIsLarger(() => 5, () => 10)).to.be.an('string').and.equal('g');
    done();
  });
  it('Should return the letter `f` when first function is larger', (done) => {
    expect(whichIsLarger(() => 505050, () => 5050)).to.be.an('string').and.equal('f');
    done();
  });
  it('Should return the letter `neither` when none function is larger', (done) => {
    expect(whichIsLarger(() => 25, () => 25)).to.be.an('string').and.equal('neither');
    done();
  });
});
