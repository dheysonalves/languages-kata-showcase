#include "grains.h"
#include <cstdint>

uint64_t square(uint8_t index)
{
	if (index < 1 || index > 64)
		return 0;

	uint64_t sum = 1;

	for (uint8_t i = 1; i < index; i++)
	{
		sum *= 2;
	}

	return sum;
}

uint64_t total(void)
{
	uint64_t sum = 0;

	for (uint8_t i = 1; i <= 64; i++)
	{
		sum += square(i);
	}

	return sum;
}
