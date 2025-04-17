import { useClassNames } from 'polpo/hooks';
import { Typography } from 'polpo/ui';

import { FormFieldStyle } from './form-field.style';

type FormFieldProps = {
  children?: React.ReactNode;
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
};

export const FormField = ({ children, label, onClick, disabled }: FormFieldProps) => {
  const dataClassName = useClassNames({
    'data-field': true,
    'data-with-overlay': Boolean(!disabled && onClick),
  });

  return (
    <FormFieldStyle>
      <Typography variant='label' weight='bold' className='data-label'>
        {label}
      </Typography>
      <section className={dataClassName} onClick={!disabled ? onClick : undefined}>
        {children}
      </section>
    </FormFieldStyle>
  );
};
