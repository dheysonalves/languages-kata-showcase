const getDecimalValue = ((arr) => {
  if (arr.length < 30 && arr.length !== 0) {
    return parseInt(arr.join(''), 2);
  }
  return 'Does not accept the constraints';
});

export default getDecimalValue;
