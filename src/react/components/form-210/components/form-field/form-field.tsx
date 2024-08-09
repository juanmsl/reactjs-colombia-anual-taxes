import { FormFieldStyle } from './form-field.style';

import { FieldInput, FieldInputProps } from '@components/field-input';

type FormFieldProps = FieldInputProps & {
  colSpan?: number;
  rowSpan?: number;
  onClick?: () => void;
};

export const FormField = ({ rowSpan, colSpan, onClick, disabled, ...fieldInputProps }: FormFieldProps) => {
  return (
    <FormFieldStyle
      rowSpan={rowSpan}
      colSpan={colSpan}
      style={{ verticalAlign: 'top' }}
      onClick={!disabled ? onClick : undefined}
      className={!disabled && onClick ? 'field-with-overlay' : ''}
    >
      <FieldInput {...fieldInputProps} disabled={disabled} locked={Boolean(onClick)} />
    </FormFieldStyle>
  );
};
