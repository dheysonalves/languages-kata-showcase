const buildArray = ((array) => {
  if (!(array.length >= 1 && array.length <= 1000)) return array;
  return array.map((item, index) => array[array[index]]);
});

export default buildArray;
