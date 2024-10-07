import { Line, Tabs, Typography } from '@juanmsl/ui';

import { Data } from '../form-210-tabs.data';

import { FieldInput } from '@components/field-input';
import { Form210Sections } from '@core/constants';

type RentasPorHonorariosProps = {
  setAsideID: (id: `${number | ''}`) => void;
};

export const RentasPorHonorarios = ({ setAsideID }: RentasPorHonorariosProps) => {
  return (
    <Tabs.TabPanel id={Form210Sections.RENTAS_POR_HONORARIOS}>
      <Typography variant='header1'>4. Rentas por honorarios</Typography>
      <Typography>Rentas de trabajo que no provengan de una relación laboral o legal y reglamentaria.</Typography>
      <section className='fields-container'>
        <Data label='Ingresos brutos' onClick={() => setAsideID('43')}>
          <FieldInput id='43' />
        </Data>
        <Data label='Ingrésos no constitutivos de renta' onClick={() => setAsideID('44')}>
          <FieldInput id='44' />
        </Data>
        <Data label='Costos y deducciones procedentes' onClick={() => setAsideID('45')}>
          <FieldInput id='45' />
        </Data>
        <Data label='Renta líquida'>
          <FieldInput id='46' />
        </Data>
      </section>
      <Line />
      <Typography variant='header4'>Rentas exentas</Typography>
      <Typography>Las rentas exentas reducen el impuesto por pagar.</Typography>
      <section className='fields-container'>
        <Data label='Aportes voluntarios AFC, FVP y/o AVC' onClick={() => setAsideID('47')}>
          <FieldInput id='47' />
        </Data>
        <Data label='Otras rentas exentas' onClick={() => setAsideID('48')}>
          <FieldInput id='48' />
        </Data>
        <Data label='Total rentas exentas'>
          <FieldInput id='49' />
        </Data>
      </section>
      <Line />
      <Typography variant='header4'>Deducciones imputables</Typography>
      <Typography>Las deducciones imputables reducen el impuesto por pagar.</Typography>
      <section className='fields-container'>
        <Data label='Intereses de vivienda' onClick={() => setAsideID('50')}>
          <FieldInput id='50' />
        </Data>
        <Data label='Otras deducciones imputables' onClick={() => setAsideID('51')}>
          <FieldInput id='51' />
        </Data>
        <Data label='Total deducciones imputables'>
          <FieldInput id='52' />
        </Data>
      </section>
      <Line />
      <section className='fields-container'>
        <Data label='Rentas exentas y/o deducciones imputables'>
          <FieldInput id='53' />
        </Data>
        <Data label='Renta líquida ordinária del ejercicio'>
          <FieldInput id='54' />
        </Data>
        <Data label='Pérdida líquida del ejercicio'>
          <FieldInput id='55' />
        </Data>
        <Data label='Compensaciones por perdidas'>
          <FieldInput id='56' />
        </Data>
        <Data label='Renta líquida ordinaria'>
          <FieldInput id='57' />
        </Data>
      </section>
    </Tabs.TabPanel>
  );
};
