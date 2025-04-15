import { Line, Tabs, Typography } from 'polpo/ui';

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
        <FieldInput id='58' label='Ingresos brutos' onClick={() => setAsideID('58')} />
        <FieldInput id='59' label='Ingrésos no constitutivos de renta' onClick={() => setAsideID('59')} />
        <FieldInput id='60' label='Costos y deducciones procedentes' onClick={() => setAsideID('60')} />
        <FieldInput id='61' label='Renta líquida' />
        <FieldInput id='62' label='Rentas líquidas pasivas - ECE' onClick={() => setAsideID('62')} />
      </section>
      <Line />
      <Typography variant='header4'>Rentas exentas</Typography>
      <Typography>Las rentas exentas reducen el impuesto por pagar.</Typography>
      <section className='fields-container'>
        <FieldInput id='63' label='Aportes voluntarios AFC, FVP y/o AVC' onClick={() => setAsideID('63')} />
        <FieldInput id='64' label='Otras rentas exentas' onClick={() => setAsideID('64')} />
        <FieldInput id='65' label='Total rentas exentas' />
      </section>
      <Line />
      <Typography variant='header4'>Deducciones imputables</Typography>
      <Typography>Las deducciones imputables reducen el impuesto por pagar.</Typography>
      <section className='fields-container'>
        <FieldInput id='66' label='Intereses de vivienda' onClick={() => setAsideID('66')} />
        <FieldInput id='67' label='Otras deducciones imputables' onClick={() => setAsideID('67')} />
        <FieldInput id='68' label='Total deducciones imputables' />
      </section>
      <Line />
      <section className='fields-container'>
        <FieldInput id='69' label='Rentas exentas y/o deducciones imputables' />
        <FieldInput id='70' label='Renta líquida ordinária del ejercicio' />
        <FieldInput id='71' label='Pérdida líquida del ejercicio' />
        <FieldInput id='72' label='Compensaciones por perdidas' />
        <FieldInput id='73' label='Renta líquida ordinaria' />
      </section>
    </Tabs.TabPanel>
  );
};
