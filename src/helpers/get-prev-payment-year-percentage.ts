export function getPrevPaymentYearPercentage(declarationNumber: number, format?: 'number'): number;

export function getPrevPaymentYearPercentage(declarationNumber: number, format?: 'string'): string;

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function getPrevPaymentYearPercentage(
  declarationNumber: number,
  format: 'number' | 'string' = 'number',
): number | string {
  let percentage = 0.75;

  if (declarationNumber === 1) {
    percentage = 0.25;
  }

  if (declarationNumber === 2) {
    percentage = 0.5;
  }

  return format === 'number' ? percentage : `${Math.round(percentage * 100)}%`;
}
