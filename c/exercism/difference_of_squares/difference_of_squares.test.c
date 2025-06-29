#include <stdio.h>
#include <assert.h>
#include "difference_of_squares.h"

void test_square_of_sum_zero()
{
	assert(square_of_sum(0) == 0);
	printf("✓ test_square_of_sum_zero passed\n");
}

void test_square_of_sum_one()
{
	assert(square_of_sum(1) == 1);
	printf("✓ test_square_of_sum_one passed\n");
}

void test_square_of_sum_three()
{
	// Sum: 1+2+3 = 6, Square: 6*6 = 36
	assert(square_of_sum(3) == 36);
	printf("✓ test_square_of_sum_three passed\n");
}

void test_square_of_sum_ten()
{
	// Sum: 1+2+...+10 = 55, Square: 55*55 = 3025
	assert(square_of_sum(10) == 3025);
	printf("✓ test_square_of_sum_ten passed\n");
}

void test_sum_of_squares_zero()
{
	assert(sum_of_squares(0) == 0);
	printf("✓ test_sum_of_squares_zero passed\n");
}

void test_sum_of_squares_one()
{
	assert(sum_of_squares(1) == 1);
	printf("✓ test_sum_of_squares_one passed\n");
}

void test_sum_of_squares_three()
{
	// 1*1 + 2*2 + 3*3 = 1 + 4 + 9 = 14
	assert(sum_of_squares(3) == 14);
	printf("✓ test_sum_of_squares_three passed\n");
}

void test_sum_of_squares_ten()
{
	// 1^2 + 2^2 + ... + 10^2 = 385
	assert(sum_of_squares(10) == 385);
	printf("✓ test_sum_of_squares_ten passed\n");
}

void test_difference_of_squares_zero()
{
	assert(difference_of_squares(0) == 0);
	printf("✓ test_difference_of_squares_zero passed\n");
}

void test_difference_of_squares_one()
{
	assert(difference_of_squares(1) == 0);
	printf("✓ test_difference_of_squares_one passed\n");
}

void test_difference_of_squares_three()
{
	// square_of_sum(3) - sum_of_squares(3) = 36 - 14 = 22
	assert(difference_of_squares(3) == 22);
	printf("✓ test_difference_of_squares_three passed\n");
}

void test_difference_of_squares_ten()
{
	// square_of_sum(10) - sum_of_squares(10) = 3025 - 385 = 2640
	assert(difference_of_squares(10) == 2640);
	printf("✓ test_difference_of_squares_ten passed\n");
}

void test_difference_of_squares_hundred()
{
	// For n=100: square_of_sum = 25502500, sum_of_squares = 338350
	assert(difference_of_squares(100) == 25164150);
	printf("✓ test_difference_of_squares_hundred passed\n");
}

int main()
{
	printf("Running tests for difference_of_squares...\n\n");

	test_square_of_sum_zero();
	test_square_of_sum_one();
	test_square_of_sum_three();
	test_square_of_sum_ten();

	test_sum_of_squares_zero();
	test_sum_of_squares_one();
	test_sum_of_squares_three();
	test_sum_of_squares_ten();

	test_difference_of_squares_zero();
	test_difference_of_squares_one();
	test_difference_of_squares_three();
	test_difference_of_squares_ten();
	test_difference_of_squares_hundred();

	printf("\n✅ All tests passed!\n");
	return 0;
}
