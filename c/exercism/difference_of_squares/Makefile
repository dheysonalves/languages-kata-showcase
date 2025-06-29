CC=gcc
CFLAGS=-Wall -Wextra -std=c99
TARGET=test_runner
SOURCES=difference_of_squares.c difference_of_squares.test.c

$(TARGET): $(SOURCES)
    $(CC) $(CFLAGS) -o $(TARGET) $(SOURCES)

test: $(TARGET)
    ./$(TARGET)

clean:
    rm -f $(TARGET)

.PHONY: test clean
