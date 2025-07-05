/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
    let count = 0;
    let majority = 0;
    const size = nums.length / 2;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            majority = nums[i];
            count += 1;
            if (count > size) {
                return majority;
            }
        }
    }

    return majority;
}

export default majorityElement;
