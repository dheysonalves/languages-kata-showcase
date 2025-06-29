const nextSquare = ((squareNumber) => {
  if (!Number.isInteger(Math.sqrt(squareNumber))) return null;

  return (Math.sqrt(squareNumber) + 1) ** 2;
});

export default nextSquare;
