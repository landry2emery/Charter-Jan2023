export const CalculatePoints = (amount) => {
  let total = 0;
  if (amount > 100) {
    total += (amount - 100) * 2 + 50 * 1;
  } else if (amount > 50) {
    total += (amount - 50) * 1;
  }
  return Math.round(total);
};
