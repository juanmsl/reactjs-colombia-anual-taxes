import { Tabs, Typography } from 'polpo/ui';

import { FieldInput } from '@components/field-input';
import { Form210Sections } from '@core/constants';

export const GananciaOcasional = () => {
  return (
    <Tabs.TabPanel id={Form210Sections.GANANCIA_OCASIONAL}>
      <Typography variant='header1'>10. Ganancias ocasionales</Typography>
      <Typography>
        Los ingresos a reportar son la venta de activos fijos, indemnizaciones de seguros de vida, ganancias por
        loterias, legados, donaciones, porciónes conyugales y valores recibidos por herencias.
      </Typography>
      <section className='fields-container'>
        <FieldInput id='112' label='Ingresos por ganancias ocasionales en el país y del exterior' />
        <FieldInput id='113' label='Costos por ganancias ocacionales' />
        <FieldInput id='114' label='Ganancias ocasionales no gravadas y exentas' />
        <FieldInput id='115' label='Ganancias ocasionales gravables' />
      </section>
    </Tabs.TabPanel>
  );
};
