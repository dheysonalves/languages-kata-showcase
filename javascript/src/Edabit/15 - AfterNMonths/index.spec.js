import { expect } from 'chai';
import afterNMonths from './index';

describe('After N Months', () => {
  it('should return 2022 after adding 24 months', () => {
    expect(afterNMonths(2020, 24)).to.be.equal(2022);
  });

  it('should return 1832 after adding 2 months', () => {
    expect(afterNMonths(1832, 2)).to.be.equal(1832);
  });

  it('should return 1444 after adding 60 months', () => {
    expect(afterNMonths(1444, 60)).to.be.equal(1449);
  });
});
