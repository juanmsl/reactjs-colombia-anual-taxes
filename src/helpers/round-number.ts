export const roundNumber = (value: number, roundTo: number) => {
  const roundBase = 1 / Math.pow(10, roundTo);

  return Math.round(value / roundBase) * roundBase;
};
