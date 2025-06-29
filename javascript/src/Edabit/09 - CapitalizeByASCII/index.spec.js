import { expect } from 'chai';
import asciiCapitalize from './index';

describe('Capitalize string based on its ASCII', () => {
  it('should return an capitalized or not strings from the phrase Oh what a beautiful morning.', (done) => {
    expect(asciiCapitalize('Oh what a beautiful morning.')).to.be.an('string').and.equal('oH wHaT a BeauTiFuL moRNiNg.');
    done();
  });

  it('should return an capitalized or not strings from the phrase to be or not to be!', (done) => {
    expect(asciiCapitalize('to be or not to be!')).to.be.an('string').and.equal('To Be oR NoT To Be!');
    done();
  });
});
