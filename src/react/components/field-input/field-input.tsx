import { useClassNames } from '@juanmsl/hooks';
import { Typography } from '@juanmsl/ui';

import { FieldInputContainer, FieldInputStyle } from './field-input.style';

import { FormatInput } from '@components/format-input';
import { useForm210, useForm210Field, useForm210FieldParams } from '@contexts';

export type FieldParams = {
  readOnly?: boolean;
  formula?: string;
  disabled?: boolean;
  locked?: boolean;
  format?: 'currency' | 'number';
  min?: number;
  max?: number;
};

export type FieldInputProps = {
  id: `${number}`;
  roundTo?: number;
  action?: () => void;
  formula?: string;
};

export const FieldInput = ({ id, roundTo, action, formula: fieldFormula }: FieldInputProps) => {
  const value = useForm210Field(id);
  const { locked, readOnly, disabled, format, min, max, formula } = useForm210FieldParams(id);
  const { setValue } = useForm210();
  const fieldClassName = useClassNames({
    'read-only': readOnly,
    'is-disabled': disabled,
    'is-locked': !disabled && locked,
  });

  return (
    <FieldInputContainer>
      <FieldInputStyle className={fieldClassName}>
        <section className='form-field-id'>
          <Typography variant='small' weight='bold' noPadding>
            {id}
          </Typography>
        </section>
        <section className='form-field-value'>
          <FormatInput
            className='form-field-value--input'
            id={id}
            value={value}
            setValue={value => setValue(id, value)}
            readOnly={readOnly}
            disabled={disabled || readOnly || locked}
            roundTo={roundTo}
            format={format}
            rightIcon={!disabled && locked ? 'pencil' : undefined}
            min={min}
            max={max}
          />
        </section>
      </FieldInputStyle>
      {formula || fieldFormula ? (
        <Typography onClick={action} variant='small' weight='bold' className='formula' noPadding>
          {formula || fieldFormula}
        </Typography>
      ) : null}
    </FieldInputContainer>
  );
};
