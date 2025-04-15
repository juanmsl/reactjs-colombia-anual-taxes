import { Tabs, Typography } from 'polpo/ui';

import { FieldInput } from '@components/field-input';
import { Form210Sections } from '@core/constants';

export const Dependientes = () => {
  return (
    <Tabs.TabPanel id={Form210Sections.DEPENDIENTES}>
      <Typography variant='header1'>12. Dependientes</Typography>
      <section className='fields-container'>
        <FieldInput id='138' label='Número de dependientes económicos' />
        <FieldInput id='139' label='Adición por dependientes a la casilla 92' />
      </section>
    </Tabs.TabPanel>
  );
};
