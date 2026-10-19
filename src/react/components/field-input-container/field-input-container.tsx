import { Typography } from 'polpo/components';
import { useClassNames } from 'polpo/hooks';
import { ReactNode } from 'react';

import './field-input-container.styles.css';

export type FieldInputContainerProps = {
  id?: string;
  action?: () => void;
  formula?: string;
  label?: string;
  children: ReactNode;
  disabled?: boolean;
  readOnly?: boolean;
  locked?: boolean;
};

export const FieldInputContainer = ({
  id,
  action,
  readOnly,
  disabled,
  children,
  locked,
  formula,
}: FieldInputContainerProps) => {
  const fieldClassName = useClassNames({
    'field-input-content': true,
    'read-only': Boolean(readOnly),
    'is-disabled': Boolean(disabled),
    'is-locked': Boolean(!disabled && locked),
    'no-field-id': Number.isNaN(Number(id)),
  });

  return (
    <section className='field-input-container'>
      <section className={fieldClassName}>
        <section className='form-field-id'>
          <Typography variant='small' weight='bold' noPadding nowrap>
            {id}
          </Typography>
        </section>
        <section className='form-field-value'>{children}</section>
      </section>
      {formula ? (
        <Typography onClick={action} variant='small' weight='bold' className='formula' noPadding>
          {formula}
        </Typography>
      ) : null}
    </section>
  );
};
