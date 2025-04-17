import { Line, Tabs, Typography } from 'polpo/ui';

import { FieldInput } from '@components/field-input';
import { FieldParamId } from '@contexts';
import { Form210Sections } from '@core/constants';

type RentasPorHonorariosProps = {
  setAsideID: (id: FieldParamId | null) => void;
};

export const RentasPorHonorarios = ({ setAsideID }: RentasPorHonorariosProps) => {
  return (
    <Tabs.TabPanel id={Form210Sections.RENTAS_POR_HONORARIOS}>
      <Typography variant='header1'>4. Rentas por honorarios</Typography>
      <Typography>Rentas de trabajo que no provengan de una relación laboral o legal y reglamentaria.</Typography>
      <section className='fields-container'>
        <FieldInput id='43' label='Ingresos brutos' onClick={() => setAsideID('43')} />
        <FieldInput id='44' label='Ingrésos no constitutivos de renta' onClick={() => setAsideID('44')} />
        <FieldInput id='45' label='Costos y deducciones procedentes' onClick={() => setAsideID('45')} />
        <FieldInput id='46' label='Renta líquida' />
      </section>
      <Line />
      <Typography variant='header4'>Rentas exentas</Typography>
      <Typography>Las rentas exentas reducen el impuesto por pagar.</Typography>
      <section className='fields-container'>
        <FieldInput id='47' label='Aportes voluntarios AFC, FVP y/o AVC' onClick={() => setAsideID('47')} />
        <FieldInput id='48' label='Otras rentas exentas' onClick={() => setAsideID('48')} />
        <FieldInput id='49' label='Total rentas exentas' />
      </section>
      <Line />
      <Typography variant='header4'>Deducciones imputables</Typography>
      <Typography>Las deducciones imputables reducen el impuesto por pagar.</Typography>
      <section className='fields-container'>
        <FieldInput id='50' label='Intereses de vivienda' onClick={() => setAsideID('50')} />
        <FieldInput id='51' label='Otras deducciones imputables' onClick={() => setAsideID('51')} />
        <FieldInput id='52' label='Total deducciones imputables' />
      </section>
      <Line />
      <section className='fields-container'>
        <FieldInput id='53' label='Rentas exentas y/o deducciones imputables' />
        <FieldInput id='54' label='Renta líquida ordinária del ejercicio' />
        <FieldInput id='55' label='Pérdida líquida del ejercicio' />
        <FieldInput id='56' label='Compensaciones por perdidas' />
        <FieldInput id='57' label='Renta líquida ordinaria' />
      </section>
    </Tabs.TabPanel>
  );
};
