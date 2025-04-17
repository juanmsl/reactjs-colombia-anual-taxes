import { useClassNames } from 'polpo/hooks';
import { Typography } from 'polpo/ui';
import { ReactNode } from 'react';

import { FieldInputContainerStyle, FieldInputContentStyle } from './field-input-container.style';

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
    'read-only': readOnly,
    'is-disabled': disabled,
    'is-locked': !disabled && locked,
    'no-field-id': Number.isNaN(Number(id)),
  });

  return (
    <FieldInputContainerStyle>
      <FieldInputContentStyle className={fieldClassName}>
        <section className='form-field-id'>
          <Typography variant='small' weight='bold' noPadding nowrap>
            {id}
          </Typography>
        </section>
        <section className='form-field-value'>{children}</section>
      </FieldInputContentStyle>
      {formula ? (
        <Typography onClick={action} variant='small' weight='bold' className='formula' noPadding>
          {formula}
        </Typography>
      ) : null}
    </FieldInputContainerStyle>
  );
};
