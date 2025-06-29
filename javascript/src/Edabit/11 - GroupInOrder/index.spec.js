/* eslint-disable max-len */
// import { expect } from 'chai';
// import group from './index';

// describe('Group in order test scenario', () => {
//   it('should return an array with two consecutive sub-arrays equal to `[[1, 3], [2, 4]]`', (done) => {
//     expect(group([1, 2, 3, 4], 2)).to.be.an('array').and.to.be.eql([[1, 3], [2, 4]]);
//     done();
//   });

//   it('should return an array with two consecutive sub-arrays equal to `[[1, 3, 5, 7], [2, 4, 6]]`', (done) => {
//     expect(group([1, 2, 3, 4, 5, 6, 7], 4)).to.be.an('array').and.to.be.eql([[1, 3, 5, 7], [2, 4, 6]]);
//     done();
//   });

//   it('should return an array with five consecutive sub-arrays equal to `[[1], [2], [3], [4], [5]]`', (done) => {
//     expect(group([1, 2, 3, 4, 5], 1)).to.be.an('array').and.to.be.eql([[1], [2], [3], [4], [5]]);
//     done();
//   });

//   it('should return an array with two consecutive sub-arrays equal to `[[1, 3, 5], [2, 4, 6]]`', (done) => {
//     expect(group([1, 2, 3, 4, 5, 6], 4)).to.be.an('array').and.to.be.eql([[1, 3, 5], [2, 4, 6]]);
//     done();
//   });

//   it('should return an array with most close length consecutive sub-arrays equal to `[[1, 3, 5, 7], [2, 4, 6]]`', (done) => {
//     expect(group([1, 2, 3, 4, 5, 6, 7], 4)).to.be.an('array').and.to.be.eql([[1, 3, 5, 7], [2, 4, 6]]);
//     done();
//   });
// });

// // 1 - it should return a consecutive order of the numbers in each sub-array

// // 2 - it should fill each sub-array evenly

// // 3 - it should divide the first array with the `length` parameter
