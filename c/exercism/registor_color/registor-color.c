#include "resistor_color.h"

const resistor_band_t *colors(void)
{
	static const resistor_band_t list[N_COLORS] = {
		BLACK, BROWN, RED, ORANGE, YELLOW,
		GREEN, BLUE, VIOLET, GREY, WHITE};
	return list;
}

unsigned color_code(resistor_band_t band)
{
	return (band >= 0 && band < N_COLORS) ? (unsigned)band : 0;
}

#ifndef RESISTOR_COLOR_H
#define RESISTOR_COLOR_H

typedef enum
{
	BLACK = 0,
	BROWN = 1,
	RED = 2,
	ORANGE = 3,
	YELLOW = 4,
	GREEN = 5,
	BLUE = 6,
	VIOLET = 7,
	GREY = 8,
	WHITE = 9,
	N_COLORS
} resistor_band_t;

const resistor_band_t *colors(void);
unsigned color_code(resistor_band_t band);

#endif
