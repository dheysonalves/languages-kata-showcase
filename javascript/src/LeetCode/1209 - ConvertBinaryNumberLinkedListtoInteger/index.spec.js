import { expect } from 'chai';
import getDecimalValue from './index';

describe('Convert Binary Number in a Linked List to Integer', () => {
  it('should return a decimal number from [1,0,1]', () => {
    expect(getDecimalValue([1, 0, 1])).to.be.eq(5);
  });

  it('should return a decimal number from [0]', () => {
    expect(getDecimalValue([0])).to.be.eq(0);
  });

  it('should return a decimal number from [1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]', () => {
    expect(getDecimalValue([1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0])).to.be.eq(18880);
  });

  it('should return a decimal number from [1]', () => {
    expect(getDecimalValue([1])).to.be.eq(1);
  });
});
