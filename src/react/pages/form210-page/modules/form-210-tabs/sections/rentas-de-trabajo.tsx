import { Line, Tabs, Typography } from '@juanmsl/ui';

import { Data } from '../form-210-tabs.data';

import { FieldInput } from '@components/field-input';
import { Form210Sections } from '@core/constants';

type RentasDeTrabajoProps = {
  setAsideID: (id: `${number | ''}`) => void;
};

export const RentasDeTrabajo = ({ setAsideID }: RentasDeTrabajoProps) => {
  return (
    <Tabs.TabPanel id={Form210Sections.RENTAS_DE_TRABAJO}>
      <Typography variant='header1'>3. Rentas de trabajo</Typography>
      <Typography>
        Ingresos como salarios, comisiones, prestaciones sociales, viáticos, honorarios y otras compensaciones por
        servicios personales.
      </Typography>
      <section className='fields-container'>
        <Data label='Ingresos brutos' onClick={() => setAsideID('32')}>
          <FieldInput id='32' />
        </Data>
        <Data label='Ingrésos no constitutivos de renta' onClick={() => setAsideID('33')}>
          <FieldInput id='33' />
        </Data>
        <Data label='Renta líquida'>
          <FieldInput id='34' />
        </Data>
      </section>
      <Line />
      <Typography variant='header4'>Rentas exentas</Typography>
      <Typography>Las rentas exentas reducen el impuesto por pagar.</Typography>
      <section className='fields-container'>
        <Data label='Aportes voluntarios AFC, FVP y/o AVC' onClick={() => setAsideID('35')}>
          <FieldInput id='35' />
        </Data>
        <Data label='Otras rentas exentas' onClick={() => setAsideID('36')}>
          <FieldInput id='36' />
        </Data>
        <Data label='Total rentas exentas'>
          <FieldInput id='37' />
        </Data>
      </section>
      <Line />
      <Typography variant='header4'>Deducciones imputables</Typography>
      <Typography>Las deducciones imputables reducen el impuesto por pagar.</Typography>
      <section className='fields-container'>
        <Data label='Intereses de vivienda' onClick={() => setAsideID('38')}>
          <FieldInput id='38' />
        </Data>
        <Data label='Otras deducciones imputables' onClick={() => setAsideID('39')}>
          <FieldInput id='39' />
        </Data>
        <Data label='Total deducciones imputables'>
          <FieldInput id='40' />
        </Data>
      </section>
      <Line />
      <section className='fields-container'>
        <Data label='Rentas exentas y/o deducciones imputables'>
          <FieldInput id='41' />
        </Data>
        <Data label='Renta líquida ordinaria'>
          <FieldInput id='42' />
        </Data>
      </section>
    </Tabs.TabPanel>
  );
};
