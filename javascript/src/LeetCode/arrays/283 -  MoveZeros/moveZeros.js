/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
	let lastNonZero = 0;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== 0) {
			[nums[lastNonZero], nums[i]] = [
				nums[i], nums[lastNonZero]
			];
			lastNonZero++;
		}
	}
};
