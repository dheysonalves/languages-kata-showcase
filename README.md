# Languages Kata Showcase

A multi-language playground for practicing programming katas and coding challenges from various platforms including Exercism, LeetCode, HackerRank, and Edabit.

> A code kata is an exercise in programming which helps programmers hone their skills through practice and repetition

## Project Structure

This repository contains implementations of coding challenges in multiple programming languages:

```
languages-kata-showcase/
├── c/                          # C programming challenges
│   └── exercism/
│       ├── difference_of_squares/
│       └── grains/
├── go/                         # Go programming challenges
│   └── exercism/
│       └── difference_of_squares/
├── javascript/                 # JavaScript challenges with TDD
│   └── src/
│       ├── Edabit/            # Edabit challenges
│       ├── HackerRank/        # HackerRank challenges
│       └── LeetCode/          # LeetCode challenges
└── .vscode/                   # VS Code configuration
```

## Supported Languages

### C

- **Exercism Challenges**: Implementation of classic programming problems
- **Features**: Unit testing with custom test runner, header files, Makefile build system
- **Current Challenges**:
  - [Difference of Squares](c/exercism/difference_of_squares) - Calculate the difference between square of sum and sum of squares
  - [Grains](c/exercism/grains) - Calculate grains on a chessboard

### Go

- **Exercism Challenges**: Go implementations with standard testing
- **Features**: Go modules, table-driven tests
- **Current Challenges**:
  - [Difference of Squares](go/exercism/difference_of_squares) - Same problem as C version but in Go

### JavaScript

- **Multiple Platforms**: LeetCode, HackerRank, and Edabit challenges
- **Features**: TDD with Mocha/Chai, ES6+ syntax, comprehensive test coverage
- **Platforms Covered**:
  - **LeetCode**: Array manipulation, binary operations
  - **HackerRank**: Interview preparation problems
  - **Edabit**: Various difficulty levels from beginner to advanced

## Getting Started

### Prerequisites

- **C**: GCC compiler, Make
- **Go**: Go 1.21+
- **JavaScript**: Node.js, npm/yarn

### Running C Challenges

```bash
cd c/exercism/difference_of_squares
make test
```

### Running Go Challenges

```bash
cd go/exercism/difference_of_squares
go test -v
```

### Running JavaScript Challenges

```bash
cd javascript

# Install dependencies
npm install

# Run all tests
npm test

# Run specific kata
npm test "kata-name"

# Run tests in watch mode
npm run test:tdd
```

## Featured Challenges

### Difference of Squares

**Available in**: C, Go

Calculate the difference between the square of the sum and the sum of the squares of the first N natural numbers.

- **Square of sum**: (1 + 2 + ... + N)²
- **Sum of squares**: 1² + 2² + ... + N²
- **Difference**: Square of sum - Sum of squares

**Example**: For N=10

- Square of sum: (1+2+...+10)² = 55² = 3025
- Sum of squares: 1²+2²+...+10² = 385
- Difference: 3025 - 385 = 2640

### JavaScript Challenges

**LeetCode Examples**:

- [Build Array from Permutation](javascript/src/LeetCode/1920%20-%20BuildArrayFromPermutation) - Array manipulation
- [Convert Binary to Integer](javascript/src/LeetCode/1209%20-%20ConvertBinaryNumberLinkedListtoInteger) - Binary operations

**Edabit Examples**:

- [FizzBuzz](javascript/src/Edabit/01%20-%20FizzBuzz) - Classic programming problem
- [Arithmetic Progression](javascript/src/Edabit/06%20-%20ArithmeticProgression) - Mathematical sequences
- [Capitalize by ASCII](javascript/src/Edabit/09%20-%20CapitalizeByASCII) - String manipulation

**HackerRank Examples**:

- [Mini Max Sum](javascript/src/HackerHank/interview-prep/day1/mini-max-sum) - Array algorithms
- [Diagonal Difference](javascript/src/HackerHank/interview-prep/day2/diagonal-difference) - Matrix operations

## Testing

### C

Custom test runner with assertions:

```c
assert(square_of_sum(10) == 3025);
printf("✓ test_square_of_sum_ten passed\n");
```

### Go

Table-driven tests:

```go
tests := []struct {
    name     string
    input    int
    expected int
}{
    {"ten", 10, 3025},
}
```

### JavaScript

Mocha with Chai for BDD-style testing:

```javascript
describe('FizzBuzz', () => {
  it('should return "Fizz" if divisible by 3', () => {
    expect(calculate(9)).to.be.equal('Fizz');
  });
});
```

## Development Setup

### VS Code Configuration

The project includes VS Code settings for:

- C/C++ IntelliSense configuration
- Language-specific formatting
- Integrated terminal support

### Code Quality

- **JavaScript**: ESLint with Airbnb config, Babel for ES6+ support
- **C**: Wall, Wextra compiler flags for strict compilation
- **Go**: Built-in formatting and testing tools

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b my-new-kata`
3. Add your solution with tests
4. Commit your changes: `git commit -m 'Add solution for XYZ kata'`
5. Push to the branch: `git push origin my-new-kata`
6. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE.md](javascript/LICENSE.md) file for details.

## Acknowledgments

- **Exercism**: For providing excellent programming exercises
- **LeetCode**: For algorithm and data structure challenges
- **HackerRank**: For interview preparation problems
- **Edabit**: For diverse coding challenges
