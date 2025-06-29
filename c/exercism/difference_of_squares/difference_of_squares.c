#include "difference_of_squares.h"

unsigned int square_of_sum(unsigned int number)
{
	unsigned int sum = 0;

	for (unsigned int i = 1; i <= number; i++)
	{
		sum += i;
	}

	return sum * sum;
}

unsigned int sum_of_squares(unsigned int number)
{
	unsigned int sum = 0;

	for (unsigned int i = 1; i <= number; i++)
	{
		sum += i * i;
	}

	return sum;
}

unsigned int difference_of_squares(unsigned int number)
{
	unsigned int squaredSum = square_of_sum(number);
	unsigned int sumOfSquareds = sum_of_squares(number);

	return squaredSum - sumOfSquareds;
}
