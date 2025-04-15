import { Tabs, Typography } from 'polpo/ui';

import { FieldInput } from '@components/field-input';
import { Form210Sections } from '@core/constants';

type PatrimonioProps = {
  setAsideID: (id: `${number | ''}`) => void;
};

export const Patrimonio = ({ setAsideID }: PatrimonioProps) => {
  return (
    <Tabs.TabPanel id={Form210Sections.PATRIMONIO}>
      <Typography variant='header1'>2. Patrimonio</Typography>
      <section className='fields-container'>
        <FieldInput id='29' label='Total patrimonio bruto' onClick={() => setAsideID('29')} />
        <FieldInput id='30' label='Deudas' onClick={() => setAsideID('30')} />
        <FieldInput id='31' label='Total patrimonio liquido' />
      </section>
    </Tabs.TabPanel>
  );
};
