import { FormFieldStyle } from './form-field.style';

import { FieldInput, FieldInputProps } from '@components/field-input';

type FormFieldProps = FieldInputProps & {
  colSpan?: number;
  rowSpan?: number;
  onClick?: () => void;
};

export const FormField = ({ rowSpan, colSpan, onClick, ...fieldInputProps }: FormFieldProps) => {
  return (
    <FormFieldStyle
      rowSpan={rowSpan}
      colSpan={colSpan}
      style={{ verticalAlign: 'top' }}
      onClick={onClick}
      className={onClick ? 'field-with-overlay' : ''}
    >
      <FieldInput {...fieldInputProps} />
    </FormFieldStyle>
  );
};
