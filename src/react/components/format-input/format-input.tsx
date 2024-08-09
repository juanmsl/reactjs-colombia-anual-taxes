import { IconNameT, Input } from '@juanmsl/ui';
import { useCallback, useMemo, useState } from 'react';

import { formatNumber } from '@helpers';

type FormatInputProps = {
  className?: string;
  readOnly?: boolean;
  id: string;
  disabled?: boolean;
  value: string | number;
  roundTo?: number;
  format?: 'currency' | 'number';
  setValue: (value: number) => void;
  label?: string;
  rightIcon?: IconNameT;
  leftIcon?: IconNameT;
};

export const FormatInput = ({
  className,
  readOnly,
  id,
  disabled,
  value,
  roundTo = -3,
  format = 'currency',
  setValue,
  label,
  rightIcon,
  leftIcon,
}: FormatInputProps) => {
  const [usePlainValue, setPlainValue] = useState(false);

  const formattedValue = useMemo<string>(() => {
    if (typeof value === 'number' && (!usePlainValue || readOnly)) {
      return formatNumber(value, { roundTo: readOnly ? 0 : roundTo, format });
    }

    return `${value}`;
  }, [value, usePlainValue, readOnly, format, roundTo]);

  const parseInput = useCallback((value: string): number => {
    const intValue = parseInt(value);

    return isNaN(intValue) ? 0 : intValue;
  }, []);

  return (
    <Input
      className={className}
      readOnly={readOnly}
      name={id}
      label={label}
      disabled={disabled || readOnly}
      value={formattedValue}
      setValue={value => setValue(parseInput(value))}
      onBlur={() => setPlainValue(false)}
      onFocus={() => setPlainValue(true)}
      rightIcon={rightIcon}
      leftIcon={leftIcon}
    />
  );
};
