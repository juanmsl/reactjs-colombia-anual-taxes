import { Tabs, Typography } from '@juanmsl/ui';

import { Data } from '../form-210-tabs.data';

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
        <Data label='Total patrimonio bruto' onClick={() => setAsideID('29')}>
          <FieldInput id='29' />
        </Data>
        <Data label='Deudas' onClick={() => setAsideID('30')}>
          <FieldInput id='30' />
        </Data>
        <Data label='Total patrimonio liquido'>
          <FieldInput id='31' />
        </Data>
      </section>
    </Tabs.TabPanel>
  );
};
