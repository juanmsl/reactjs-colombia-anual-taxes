import { roundNumber } from './round-number';

type FormatNumberParams = {
  roundTo?: number;
  format?: 'currency' | 'number';
};

export const formatNumber = (value: number, { roundTo = 0, format = 'number' }: FormatNumberParams = {}) => {
  const options =
    format === 'currency'
      ? {
          style: 'currency',
          currency: 'COP',
        }
      : {};

  const roundedValue = format === 'currency' ? roundNumber(value, roundTo) : value;

  return Intl.NumberFormat('es-CO', { ...options, maximumFractionDigits: 0 }).format(roundedValue);
};
