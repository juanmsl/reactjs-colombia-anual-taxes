import { FormFieldStyle } from './field-input.style';

import { FieldInputContainer } from '@components/field-input-container';
import { FormField } from '@components/form-field';
import { FormatInput } from '@components/format-input';
import { FieldParamId, useForm210FieldParams } from '@contexts';

export type FieldInputProps = {
  id: FieldParamId;
  roundTo?: number;
  action?: () => void;
  formula?: string;
  label?: string;
  onClick?: () => void;
  inTable?: boolean;
  colSpan?: number;
  rowSpan?: number;
};

export const FieldInput = ({
  id,
  roundTo,
  action,
  formula: fieldFormula,
  inTable,
  label,
  colSpan,
  rowSpan,
  onClick,
}: FieldInputProps) => {
  const { locked, readOnly, disabled, format, min, max, formula, value, setValue } = useForm210FieldParams(id);

  const input = (
    <FieldInputContainer
      id={id}
      action={action}
      formula={formula || fieldFormula}
      label={label}
      disabled={disabled}
      readOnly={readOnly}
      locked={locked}
    >
      <FormatInput
        className='form-field-value--input'
        id={id}
        value={value}
        setValue={setValue as (value: number) => void}
        readOnly={readOnly}
        disabled={disabled || readOnly || locked}
        roundTo={roundTo}
        format={format}
        rightIcon={!disabled && locked ? 'pencil' : undefined}
        min={min}
        max={max}
      />
    </FieldInputContainer>
  );

  if (inTable) {
    return (
      <FormFieldStyle
        rowSpan={rowSpan}
        colSpan={colSpan}
        style={{ verticalAlign: 'top' }}
        onClick={!disabled ? onClick : undefined}
        className={!disabled && onClick ? 'field-with-overlay' : ''}
      >
        {input}
      </FormFieldStyle>
    );
  }

  if (label || onClick) {
    return (
      <FormField label={label} disabled={disabled} onClick={onClick}>
        {input}
      </FormField>
    );
  }

  return input;
};
