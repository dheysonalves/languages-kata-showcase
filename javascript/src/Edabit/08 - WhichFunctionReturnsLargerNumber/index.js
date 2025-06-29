const whichIsLarger = ((callback, callbackTwo) => {
  if (callback() === callbackTwo()) return 'neither';
  return (callback() > callbackTwo()) ? 'f' : 'g';
});

export default whichIsLarger;
