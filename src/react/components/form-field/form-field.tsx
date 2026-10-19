import { Typography } from 'polpo/components';
import { useClassNames } from 'polpo/hooks';

import './form-field.styles.css';

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
    <section className='form-field'>
      <Typography variant='label' weight='bold' className='data-label'>
        {label}
      </Typography>
      <section className={dataClassName} onClick={!disabled ? onClick : undefined}>
        {children}
      </section>
    </section>
  );
};
