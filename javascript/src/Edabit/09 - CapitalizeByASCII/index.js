const asciiCapitalize = ((stringValue) => {
  const characteresArray = stringValue.split('');
  let convertedArray = [];

  convertedArray = characteresArray.map((item) => {
    const index = 0;
    const asciiCode = item.charCodeAt(index);
    if (asciiCode % 2 === 0) {
      return item.toUpperCase();
    }
    return item.toLowerCase();
  });

  return convertedArray.join('');
});

export default asciiCapitalize;
