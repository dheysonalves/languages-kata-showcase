
function miniMaxSum(arr) {
  arr.sort((a, b) => a - b);

  const min = arr.slice(0, arr.length - 1).reduce((a, b) => a + b);
  const max = arr.slice(1).reduce((a, b) => a + b);

  console.log(min, max);
}

export default miniMaxSum;
