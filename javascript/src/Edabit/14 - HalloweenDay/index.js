function halloween(date) {
  if (date.getMonth() === 9 && date.getDate() === 31) {
    return 'Bonfire toffee';
  }
  return 'toffee';
}

export default halloween;
