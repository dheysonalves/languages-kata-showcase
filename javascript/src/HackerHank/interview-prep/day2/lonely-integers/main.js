function firstNonRepeating(arr, n) {
  for (let i = 0; i < n; i++) {
    let j;
    console.log(i)
    for (j = 0; j < n; j++)
      if (i != j && arr[i] == arr[j])
        break;
    if (j == n)
      return arr[i];
  }
  return -1;
}

function firstNonRepeating(arr, n) {
  const m = new Map();
  for (var i = 0; i < n; i++) {
    if (m.has(arr[i])) {
      m.set(arr[i], m.get(arr[i]) + 1);
    }
    else {
      m.set(arr[i], 1);
    }
  }
  for (var i = 0; i < n; i++)
    console.log(m.get(arr[i]))
    if (m.get(arr[i]) == 1)
      return arr[i];
  return -1;
}

