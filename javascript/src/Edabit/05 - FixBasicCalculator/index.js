const basicCalculator = ((num1, operator, num2) => {
  if (num2 === 0) return null;
  if (operator === '+') {
    return num1 + num2;
  }
  if (operator === '-') {
    return num1 - num2;
  }
  if (operator === '/') {
    return num1 / num2;
  }
  if (operator === '*') {
    return num1 * num2;
  }
  return null;
});

export default basicCalculator;
