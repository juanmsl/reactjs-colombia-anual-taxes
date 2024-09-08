import { Line, Typography } from '@juanmsl/ui';

import { FieldInputDetailsStyle } from './field-input-details.style';

import { FieldInput } from '@components/field-input';
import { Form210Details } from '@core/constants';

type FieldInputDetailsProps = {
  id: `${number}` | '';
};

export const FieldInputDetails = ({ id }: FieldInputDetailsProps) => {
  if (id === '' || !Form210Details[id]) {
    return null;
  }

  const { content, title, subtitle, description } = Form210Details[id] ?? {};

  return (
    <FieldInputDetailsStyle>
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
        <FieldInput id={id} readOnly />
      </section>
      <Line lineStyle='dotted' orientation='horizontal' className='line-separator' spacing={4} dotSize={2} />
      {description ? description : null}
      {content}
    </FieldInputDetailsStyle>
  );
};
