import { expect } from 'chai';
import toLowerCase from './index';


describe('Returns a string after replacing every uppercase', () => {
  it('should return an `hello` from Hello', () => {
    expect(toLowerCase('Hello')).to.be.eq('hello');
  });

  it('should return an `here` from here', () => {
    expect(toLowerCase('here')).to.be.eq('here');
  });

  it('should return an `LOVELY` from lovely', () => {
    expect(toLowerCase('LOVELY')).to.be.eq('lovely');
  });

  it('should return an `#@!#` from #@!#', () => {
    expect(toLowerCase('#@!#')).to.be.eq('#@!#');
  });
});
