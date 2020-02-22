export const formatValue = value =>
  parseFloat(value)
    .toFixed(2)
    .replace('.', ',');
