function diagonalDifference(arr) {
  const first = arr.reduce((acc, ar, i) => acc + ar[i], 0)
  const second = arr.reduce((acc, ar, i) =>  acc + ar[ar.length - 1 - i], 0);

  return Math.abs(first - second)
}
