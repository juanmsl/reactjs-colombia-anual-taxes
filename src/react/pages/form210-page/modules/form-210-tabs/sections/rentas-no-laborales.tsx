import { Line, Tabs, Typography } from '@juanmsl/ui';

import { Data } from '../form-210-tabs.data';

import { FieldInput } from '@components/field-input';
import { Form210Sections } from '@core/constants';

type RentasNoLaboralesProps = {
  setAsideID: (id: `${number | ''}`) => void;
};

export const RentasNoLaborales = ({ setAsideID }: RentasNoLaboralesProps) => {
  return (
    <Tabs.TabPanel id={Form210Sections.RENTAS_NO_LABORALES}>
      <Typography variant='header1'>6. Rentas no laborales</Typography>
      <Typography>
        Son ingresos que no se clasifican explícitamente en ninguna de las demás categorías y aquellos que no cumplan
        con la definición de servicios personales.
      </Typography>
      <section className='fields-container'>
        <Data label='Ingresos brutos' onClick={() => setAsideID('74')}>
          <FieldInput id='74' />
        </Data>
        <Data label='Devoluciones, rebajas y dctos.' onClick={() => setAsideID('75')}>
          <FieldInput id='75' />
        </Data>
        <Data label='Ingrésos no constitutivos de renta' onClick={() => setAsideID('76')}>
          <FieldInput id='76' />
        </Data>
        <Data label='Costos y deducciones procedentes' onClick={() => setAsideID('77')}>
          <FieldInput id='77' />
        </Data>
        <Data label='Renta líquida'>
          <FieldInput id='78' />
        </Data>
        <Data label='Rentas líquidas pasivas - ECE' onClick={() => setAsideID('79')}>
          <FieldInput id='79' />
        </Data>
      </section>
      <Line />
      <Typography variant='header4'>Rentas exentas</Typography>
      <Typography>Las rentas exentas reducen el impuesto por pagar.</Typography>
      <section className='fields-container'>
        <Data label='Aportes voluntarios AFC, FVP y/o AVC' onClick={() => setAsideID('80')}>
          <FieldInput id='80' />
        </Data>
        <Data label='Otras rentas exentas' onClick={() => setAsideID('81')}>
          <FieldInput id='81' />
        </Data>
        <Data label='Total rentas exentas'>
          <FieldInput id='82' />
        </Data>
      </section>
      <Line />
      <Typography variant='header4'>Deducciones imputables</Typography>
      <Typography>Las deducciones imputables reducen el impuesto por pagar.</Typography>
      <section className='fields-container'>
        <Data label='Intereses de vivienda' onClick={() => setAsideID('83')}>
          <FieldInput id='83' />
        </Data>
        <Data label='Otras deducciones imputables' onClick={() => setAsideID('84')}>
          <FieldInput id='84' />
        </Data>
        <Data label='Total deducciones imputables'>
          <FieldInput id='85' />
        </Data>
      </section>
      <Line />
      <section className='fields-container'>
        <Data label='Rentas exentas y/o deducciones imputables'>
          <FieldInput id='86' />
        </Data>
        <Data label='Renta líquida ordinária del ejercicio'>
          <FieldInput id='87' />
        </Data>
        <Data label='Pérdida líquida del ejercicio'>
          <FieldInput id='88' />
        </Data>
        <Data label='Compensaciones por perdidas'>
          <FieldInput id='89' />
        </Data>
        <Data label='Renta líquida ordinaria'>
          <FieldInput id='90' />
        </Data>
      </section>
    </Tabs.TabPanel>
  );
};
