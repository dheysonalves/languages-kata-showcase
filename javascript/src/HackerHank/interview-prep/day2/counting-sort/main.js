function countingSort(arr) {
  const results = Array.from({ length: 100 }, (_, index) => index * 0);

  for (let index = 0; index < arr.length; index++) {
    ++results[arr[index]];
  }

  return results;
}
