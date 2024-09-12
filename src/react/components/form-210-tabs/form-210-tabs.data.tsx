import { useClassNames } from '@juanmsl/hooks';
import { Typography } from '@juanmsl/ui';

import { Form210TabsDataStyle } from './form-210-tabs.style';

type DataProps = {
  children?: React.ReactNode;
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
};

export const Data = ({ children, label, onClick, disabled }: DataProps) => {
  const dataClassName = useClassNames({
    'data-field': true,
    'data-with-overlay': Boolean(!disabled && onClick),
  });

  return (
    <Form210TabsDataStyle>
      <Typography variant='label' weight='bold' className='data-label'>
        {label}
      </Typography>
      <section className={dataClassName} onClick={!disabled ? onClick : undefined}>
        {children}
      </section>
    </Form210TabsDataStyle>
  );
};
