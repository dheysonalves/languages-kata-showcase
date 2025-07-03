package array

// https://leetcode.com/problems/move-zeroes/

func moveZeroes(nums []int) {
	nonZero := 0

	for i := range nums {
		if nums[i] != 0 {
			nums[nonZero], nums[i] = nums[i], nums[nonZero]
			nonZero++
		}
	}
}
