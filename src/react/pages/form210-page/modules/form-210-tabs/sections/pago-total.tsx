import { Tabs, Typography } from 'polpo/ui';

import { FieldInput } from '@components/field-input';
import { Form210Sections } from '@core/constants';

export const PagoTotal = () => {
  return (
    <Tabs.TabPanel id={Form210Sections.PAGO_TOTAL}>
      <Typography variant='header1'>13. Pago total</Typography>
      <section className='fields-container'>
        <FieldInput id='134' label='Saldo a pagar por impuesto' />
        <FieldInput id='135' label='Sanciones' />
        <FieldInput id='136' label='Total saldo a pagar' />
        <FieldInput id='137' label='Total saldo a favor' />
      </section>
    </Tabs.TabPanel>
  );
};
