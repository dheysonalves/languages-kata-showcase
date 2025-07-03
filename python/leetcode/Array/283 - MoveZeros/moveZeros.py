# https://leetcode.com/problems/move-zeroes/

class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        non_zero = 0

        for i, current in enumerate(nums):  # O(n)
            if current != 0:
                nums[i], nums[non_zero] = nums[non_zero], current  # O(1)
                non_zero += 1
