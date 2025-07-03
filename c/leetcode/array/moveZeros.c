// https://leetcode.com/problems/move-zeroes/
void moveZeroes(int *nums, int numsSize)
{
	int nonZeros = 0;

	for (int current = 0; current < numsSize; current++)
	{
		if (nums[current] != 0)
		{
			int temp = nums[current];

			nums[current] = nums[nonZeros];
			nums[nonZeros] = temp;
			nonZeros++;
		}
	}
}
