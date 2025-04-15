import { Line, Tabs, Typography } from 'polpo/ui';

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
        <FieldInput id='74' label='Ingresos brutos' onClick={() => setAsideID('74')} />
        <FieldInput id='75' label='Devoluciones, rebajas y dctos.' onClick={() => setAsideID('75')} />
        <FieldInput id='76' label='Ingrésos no constitutivos de renta' onClick={() => setAsideID('76')} />
        <FieldInput id='77' label='Costos y deducciones procedentes' onClick={() => setAsideID('77')} />
        <FieldInput id='78' label='Renta líquida' />
        <FieldInput id='79' label='Rentas líquidas pasivas - ECE' onClick={() => setAsideID('79')} />
      </section>
      <Line />
      <Typography variant='header4'>Rentas exentas</Typography>
      <Typography>Las rentas exentas reducen el impuesto por pagar.</Typography>
      <section className='fields-container'>
        <FieldInput id='80' label='Aportes voluntarios AFC, FVP y/o AVC' onClick={() => setAsideID('80')} />
        <FieldInput id='81' label='Otras rentas exentas' onClick={() => setAsideID('81')} />
        <FieldInput id='82' label='Total rentas exentas' />
      </section>
      <Line />
      <Typography variant='header4'>Deducciones imputables</Typography>
      <Typography>Las deducciones imputables reducen el impuesto por pagar.</Typography>
      <section className='fields-container'>
        <FieldInput id='83' label='Intereses de vivienda' onClick={() => setAsideID('83')} />
        <FieldInput id='84' label='Otras deducciones imputables' onClick={() => setAsideID('84')} />
        <FieldInput id='85' label='Total deducciones imputables' />
      </section>
      <Line />
      <section className='fields-container'>
        <FieldInput id='86' label='Rentas exentas y/o deducciones imputables' />
        <FieldInput id='87' label='Renta líquida ordinária del ejercicio' />
        <FieldInput id='88' label='Pérdida líquida del ejercicio' />
        <FieldInput id='89' label='Compensaciones por perdidas' />
        <FieldInput id='90' label='Renta líquida ordinaria' />
      </section>
    </Tabs.TabPanel>
  );
};
