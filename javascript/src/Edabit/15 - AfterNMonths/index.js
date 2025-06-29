function afterNMonths(year, months) {
  if (year === undefined) return 'year missing';
  if (months === undefined) return 'month missing';
  if (months % 12 === 0) {
    return (months / 12) + year;
  }

  return year;
}

export default afterNMonths;
