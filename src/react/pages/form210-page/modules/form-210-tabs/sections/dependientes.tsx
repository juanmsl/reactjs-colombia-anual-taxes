import { Tabs, Typography } from '@juanmsl/ui';

import { Data } from '../form-210-tabs.data';

import { FieldInput } from '@components/field-input';
import { Form210Sections } from '@core/constants';

export const Dependientes = () => {
  return (
    <Tabs.TabPanel id={Form210Sections.DEPENDIENTES}>
      <Typography variant='header1'>12. Dependientes</Typography>
      <section className='fields-container'>
        <Data label='Número de dependientes económicos'>
          <FieldInput id='138' />
        </Data>
        <Data label='Adición por dependientes a la casilla 92'>
          <FieldInput id='139' />
        </Data>
      </section>
    </Tabs.TabPanel>
  );
};
