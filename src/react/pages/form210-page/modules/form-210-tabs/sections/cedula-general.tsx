import { Tabs, Typography } from '@juanmsl/ui';

import { Data } from '../form-210-tabs.data';

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
        <Data label='Renta liquida'>
          <FieldInput id='91' />
        </Data>
        <Data label='Rentas exentas y deducciones imputables'>
          <FieldInput id='92' />
        </Data>
        <Data label='Renta liquida ordinaria'>
          <FieldInput id='93' />
        </Data>
        <Data label='Compensaciones por pérdidas año gravable 2018 y anteriores'>
          <FieldInput id='94' />
        </Data>
        <Data label='Compensaciones por exceso de renta presuntiva'>
          <FieldInput id='95' />
        </Data>
        <Data label='Rentas gravables'>
          <FieldInput id='96' />
        </Data>
        <Data label='Renta liquida gravable'>
          <FieldInput id='97' />
        </Data>
        <Data label='Renta presuntiva'>
          <FieldInput id='98' />
        </Data>
      </section>
    </Tabs.TabPanel>
  );
};
