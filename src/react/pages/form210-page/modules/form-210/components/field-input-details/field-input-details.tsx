import { Line, Typography } from 'polpo/components';

import './field-input-details.styles.css';

import { FieldInput } from '@components/field-input';
import { FieldParamIdOnlyNumbers } from '@contexts';
import { Form210Details } from '@core/constants';

type FieldInputDetailsProps = {
  id: FieldParamIdOnlyNumbers;
};

export const FieldInputDetails = ({ id }: FieldInputDetailsProps) => {
  const { content = '', title = '', subtitle = '', description = '' } = Form210Details[id] ?? {};

  return (
    <section className='field-input-details'>
      <section className='details-header'>
        <section>
          <Typography noPadding variant='header3'>
            {title}
          </Typography>
          {subtitle ? (
            <Typography variant='body' weight='bold'>
              {subtitle}
            </Typography>
          ) : null}
        </section>
        {id ? <FieldInput id={id} /> : null}
      </section>
      <Line lineStyle='dotted' orientation='horizontal' className='line-separator' spacing={4} size={2} />
      {description ? description : null}
      {content}
    </section>
  );
};
