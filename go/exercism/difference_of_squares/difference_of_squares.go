package main

func SquareOfSum(number int) int {
	sum := 0

	for i := 1; i <= number; i++ {
		sum += i
	}

	return sum * sum
}

func SumOfSquares(number int) int {
	sum := 0

	for i := 1; i <= number; i++ {
		sum += i * i
	}

	return sum
}

func DifferenceOfSquares(number int) int {
	return SquareOfSum(number) - SumOfSquares(number)
}
