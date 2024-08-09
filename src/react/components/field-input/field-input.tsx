import { useClassNames } from '@juanmsl/hooks';
import { Tooltip, Typography } from '@juanmsl/ui';

import { FieldInputContainer, FieldInputStyle } from './field-input.style';

import { FormatInput } from '@components/format-input';
import { useForm210, useForm210Field } from '@contexts';

export type FieldInputProps = {
  id: `${number}`;
  readOnly?: boolean;
  formula?: string;
  tooltip?: React.ReactNode;
  roundTo?: number;
  format?: 'currency' | 'number';
  disabled?: boolean;
  locked?: boolean;
  action?: () => void;
};

export const FieldInput = ({
  id,
  readOnly,
  tooltip,
  formula,
  roundTo,
  format,
  disabled,
  action,
  locked,
}: FieldInputProps) => {
  const value = useForm210Field(id);
  const { setValue } = useForm210();
  const fieldClassName = useClassNames({
    'read-only': readOnly,
    'is-disabled': disabled,
    'is-locked': !disabled && locked,
  });

  return (
    <Tooltip content={tooltip} disabled={!tooltip}>
      <FieldInputContainer>
        <FieldInputStyle className={fieldClassName}>
          <section className='form-field-id'>
            <Typography variant='small' weight='bold' withoutPadding>
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
            />
          </section>
        </FieldInputStyle>
        {formula ? (
          <Typography onClick={action} variant='small' weight='bold' className='formula' withoutPadding>
            {formula}
          </Typography>
        ) : null}
      </FieldInputContainer>
    </Tooltip>
  );
};
