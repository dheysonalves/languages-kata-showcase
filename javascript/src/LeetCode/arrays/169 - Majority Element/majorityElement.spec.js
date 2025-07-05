import { expect } from 'chai';
import majorityElement from './majorityElement';

describe('Majority Element', () => {
    it('should return the majority 2', () => {
        expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).to.be.equal(2);
    });

    it('should return the majority 3', () => {
        expect(majorityElement([3, 3, 1, 1, 3])).to.be.equal(3);
    });

    it('should return the majority 4', () => {
        expect(majorityElement([3, 4, 1, 1, 4, 4, 3])).to.be.equal(4);
    });
});
