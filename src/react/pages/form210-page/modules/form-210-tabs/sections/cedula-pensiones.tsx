import { Tabs, Typography } from 'polpo/ui';

import { FieldInput } from '@components/field-input';
import { Form210Sections } from '@core/constants';

export const CedulaPensiones = () => {
  return (
    <Tabs.TabPanel id={Form210Sections.CEDULA_PENSIONES}>
      <Typography variant='header1'>8. Cedula de pensiones</Typography>
      <Typography>
        Los ingresos como las pensiones de jubilación, invalidez, vejez, de sobrevivientes y sobre riesgos laborales,
        así como aquellas provenientes de indemnizaciones sustitutivas de las pensiones o las devoluciones de saldos de
        ahorro pensional.
      </Typography>
      <section className='fields-container'>
        <FieldInput id='99' label='Ingresos brutos por rentas de pensiones del pais y del exterior' />
        <FieldInput id='100' label='Ingresos no constitutivos de renta' />
        <FieldInput id='101' label='Renta liquida' />
        <FieldInput id='102' label='Rentas excentas de pensiones' />
        <FieldInput id='103' label='Total impuesto sobre rentas liquidas' />
      </section>
    </Tabs.TabPanel>
  );
};
