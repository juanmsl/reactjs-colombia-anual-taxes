import { Tabs, Typography } from '@juanmsl/ui';

import { Data } from '../form-210-tabs.data';

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
        <Data label='Ingresos por ganancias ocasionales en el país y del exterior'>
          <FieldInput id='112' />
        </Data>
        <Data label='Costos por ganancias ocacionales'>
          <FieldInput id='113' />
        </Data>
        <Data label='Ganancias ocasionales no gravadas y exentas'>
          <FieldInput id='114' />
        </Data>
        <Data label='Ganancias ocasionales gravables'>
          <FieldInput id='115' />
        </Data>
      </section>
    </Tabs.TabPanel>
  );
};
