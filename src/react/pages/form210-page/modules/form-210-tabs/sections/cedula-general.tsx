import { Tabs, Typography } from 'polpo/ui';

import { FieldInput } from '@components/field-input';
import { Form210Sections } from '@core/constants';

export const CedulaGeneral = () => {
  return (
    <Tabs.TabPanel id={Form210Sections.CEDULA_GENERAL}>
      <Typography variant='header1'>7. Cedula general</Typography>
      <Typography>
        Están incorporados los ingresos por concepto de rentas de trabajo, de capital y no laborales.
      </Typography>
      <section className='fields-container'>
        <FieldInput id='91' label='Renta liquida' />
        <FieldInput id='92' label='Rentas exentas y deducciones imputables' />
        <FieldInput id='93' label='Renta liquida ordinaria' />
        <FieldInput id='94' label='Compensaciones por pérdidas año gravable 2018 y anteriores' />
        <FieldInput id='95' label='Compensaciones por exceso de renta presuntiva' />
        <FieldInput id='96' label='Rentas gravables' />
        <FieldInput id='97' label='Renta liquida gravable' />
        <FieldInput id='98' label='Renta presuntiva' />
      </section>
    </Tabs.TabPanel>
  );
};
