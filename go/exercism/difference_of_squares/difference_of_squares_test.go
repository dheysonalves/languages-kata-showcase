package main

import "testing"

func TestSquareOfSum(t *testing.T) {
    tests := []struct {
        name     string
        input    int
        expected int
    }{
        {"zero", 0, 0},
        {"one", 1, 1},
        {"three", 3, 36},   // Sum: 1+2+3 = 6, Square: 6*6 = 36
        {"ten", 10, 3025},  // Sum: 1+2+...+10 = 55, Square: 55*55 = 3025
    }

    for _, tt := range tests {
        t.Run(tt.name, func(t *testing.T) {
            result := SquareOfSum(tt.input)
            if result != tt.expected {
                t.Errorf("SquareOfSum(%d) = %d, want %d", tt.input, result, tt.expected)
            }
        })
    }
}

func TestSumOfSquares(t *testing.T) {
    tests := []struct {
        name     string
        input    int
        expected int
    }{
        {"zero", 0, 0},
        {"one", 1, 1},
        {"three", 3, 14},   // 1*1 + 2*2 + 3*3 = 1 + 4 + 9 = 14
        {"ten", 10, 385},   // 1^2 + 2^2 + ... + 10^2 = 385
    }

    for _, tt := range tests {
        t.Run(tt.name, func(t *testing.T) {
            result := SumOfSquares(tt.input)
            if result != tt.expected {
                t.Errorf("SumOfSquares(%d) = %d, want %d", tt.input, result, tt.expected)
            }
        })
    }
}

func TestDifferenceOfSquares(t *testing.T) {
    tests := []struct {
        name     string
        input    int
        expected int
    }{
        {"zero", 0, 0},
        {"one", 1, 0},
        {"three", 3, 22},        // square_of_sum(3) - sum_of_squares(3) = 36 - 14 = 22
        {"ten", 10, 2640},       // square_of_sum(10) - sum_of_squares(10) = 3025 - 385 = 2640
        {"hundred", 100, 25164150}, // For n=100: square_of_sum = 25502500, sum_of_squares = 338350
    }

    for _, tt := range tests {
        t.Run(tt.name, func(t *testing.T) {
            result := DifferenceOfSquares(tt.input)
            if result != tt.expected {
                t.Errorf("DifferenceOfSquares(%d) = %d, want %d", tt.input, result, tt.expected)
            }
        })
    }
}
