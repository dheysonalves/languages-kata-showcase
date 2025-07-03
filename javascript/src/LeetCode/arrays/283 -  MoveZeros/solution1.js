/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
	let lastNonZero = 0;

	for (let i = 0; i < nums.length; i++) { // O(n^2)
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[j] !== 0) {
				[nums[lastNonZero], nums[j]] = [
					nums[j], nums[lastNonZero]
				];
				lastNonZero++;
			}
		}
	}
};
