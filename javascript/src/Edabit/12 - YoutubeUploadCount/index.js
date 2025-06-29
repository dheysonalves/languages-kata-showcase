function uploadCount(arrayOfDates, monthCheck) {
  return arrayOfDates.filter((item) => item.includes(monthCheck)).length;
}

export default uploadCount;
