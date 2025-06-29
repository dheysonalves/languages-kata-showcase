/* eslint-disable no-plusplus */

const oddSum = (array) => {
  const arrayOfBooleans = [];
  for (let index = 0; index < array.length - 1; index++) {
    const sequenceSum = array[index] + array[index + 1];
    arrayOfBooleans.push(sequenceSum % 2 === 0);
  }

  return arrayOfBooleans;
};

export default oddSum;
