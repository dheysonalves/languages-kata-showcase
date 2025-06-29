/* eslint-disable no-plusplus */
const arithmeticProgression = ((first, diff, sequenceLength) => {
  const array = [first];
  for (let index = 0; index < sequenceLength - 1; index++) {
    array.push(array[index] + diff);
  }
  return array.join(', ');
});

export default arithmeticProgression;
