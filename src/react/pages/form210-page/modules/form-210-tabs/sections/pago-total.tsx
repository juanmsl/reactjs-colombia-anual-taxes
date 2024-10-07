import { Tabs, Typography } from '@juanmsl/ui';

import { Data } from '../form-210-tabs.data';

import { FieldInput } from '@components/field-input';
import { Form210Sections } from '@core/constants';

export const PagoTotal = () => {
  return (
    <Tabs.TabPanel id={Form210Sections.PAGO_TOTAL}>
      <Typography variant='header1'>13. Pago total</Typography>
      <section className='fields-container'>
        <Data label='Saldo a pagar por impuesto'>
          <FieldInput id='134' />
        </Data>
        <Data label='Sanciones'>
          <FieldInput id='135' />
        </Data>
        <Data label='Total saldo a pagar'>
          <FieldInput id='136' />
        </Data>
        <Data label='Total saldo a favor'>
          <FieldInput id='137' />
        </Data>
      </section>
    </Tabs.TabPanel>
  );
};
