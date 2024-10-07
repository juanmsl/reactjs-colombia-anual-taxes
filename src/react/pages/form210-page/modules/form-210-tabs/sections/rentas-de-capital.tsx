import { Line, Tabs, Typography } from '@juanmsl/ui';

import { Data } from '../form-210-tabs.data';

import { FieldInput } from '@components/field-input';
import { Form210Sections } from '@core/constants';

type RentasDeCapitalProps = {
  setAsideID: (id: `${number | ''}`) => void;
};

export const RentasDeCapital = ({ setAsideID }: RentasDeCapitalProps) => {
  return (
    <Tabs.TabPanel id={Form210Sections.RENTAS_DE_CAPITAL}>
      <Typography variant='header1'>5. Rentas de capital</Typography>
      <Typography>
        Son ingresos derivados de intereses, rendimientos financieros, arrendamientos, regalías y la explotación de la
        propiedad intelectual (libros, derechos de autor, uso de su imagen, entre otros).
      </Typography>
      <section className='fields-container'>
        <Data label='Ingresos brutos' onClick={() => setAsideID('58')}>
          <FieldInput id='58' />
        </Data>
        <Data label='Ingrésos no constitutivos de renta' onClick={() => setAsideID('59')}>
          <FieldInput id='59' />
        </Data>
        <Data label='Costos y deducciones procedentes' onClick={() => setAsideID('60')}>
          <FieldInput id='60' />
        </Data>
        <Data label='Renta líquida'>
          <FieldInput id='61' />
        </Data>
        <Data label='Rentas líquidas pasivas - ECE' onClick={() => setAsideID('62')}>
          <FieldInput id='62' />
        </Data>
      </section>
      <Line />
      <Typography variant='header4'>Rentas exentas</Typography>
      <Typography>Las rentas exentas reducen el impuesto por pagar.</Typography>
      <section className='fields-container'>
        <Data label='Aportes voluntarios AFC, FVP y/o AVC' onClick={() => setAsideID('63')}>
          <FieldInput id='63' />
        </Data>
        <Data label='Otras rentas exentas' onClick={() => setAsideID('64')}>
          <FieldInput id='64' />
        </Data>
        <Data label='Total rentas exentas'>
          <FieldInput id='65' />
        </Data>
      </section>
      <Line />
      <Typography variant='header4'>Deducciones imputables</Typography>
      <Typography>Las deducciones imputables reducen el impuesto por pagar.</Typography>
      <section className='fields-container'>
        <Data label='Intereses de vivienda' onClick={() => setAsideID('66')}>
          <FieldInput id='66' />
        </Data>
        <Data label='Otras deducciones imputables' onClick={() => setAsideID('67')}>
          <FieldInput id='67' />
        </Data>
        <Data label='Total deducciones imputables'>
          <FieldInput id='68' />
        </Data>
      </section>
      <Line />
      <section className='fields-container'>
        <Data label='Rentas exentas y/o deducciones imputables'>
          <FieldInput id='69' />
        </Data>
        <Data label='Renta líquida ordinária del ejercicio'>
          <FieldInput id='70' />
        </Data>
        <Data label='Pérdida líquida del ejercicio'>
          <FieldInput id='71' />
        </Data>
        <Data label='Compensaciones por perdidas'>
          <FieldInput id='72' />
        </Data>
        <Data label='Renta líquida ordinaria'>
          <FieldInput id='73' />
        </Data>
      </section>
    </Tabs.TabPanel>
  );
};
