/* eslint-disable no-control-regex */

const isAscii = new RegExp(/^[\x00-\x7F]*$/);

const toLowerCase = (s) => {
  if (s.length < 1 && s.length > 100) return s;
  if (!isAscii.test(s)) return s;

  return s.toLowerCase();
};

export default toLowerCase;


// const toLowerCase = s => {
// if (s.length < 1 && s.length > 100) return s;
// if (!/^[\x00-\x7F]*$/.test(s)) return s;
//   const arrayOfStrings = s.split('');
//   let newArray = [];

//   arrayOfStrings.map(char => {
//     newArray.push(char.toLowerCase())
//   });

//   return newArray.join('');
// };
