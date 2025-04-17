import { Line, Tabs, Typography } from 'polpo/ui';

import { FieldInput } from '@components/field-input';
import { FieldParamId } from '@contexts';
import { Form210Sections } from '@core/constants';

type RentasDeTrabajoProps = {
  setAsideID: (id: FieldParamId | null) => void;
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
        <FieldInput id='32' label='Ingresos brutos' onClick={() => setAsideID('32')} />
        <FieldInput id='33' label='Ingrésos no constitutivos de renta' onClick={() => setAsideID('33')} />
        <FieldInput id='34' label='Renta líquida' />
      </section>
      <Line />
      <Typography variant='header4'>Rentas exentas</Typography>
      <Typography>Las rentas exentas reducen el impuesto por pagar.</Typography>
      <section className='fields-container'>
        <FieldInput id='35' label='Aportes voluntarios AFC, FVP y/o AVC' onClick={() => setAsideID('35')} />
        <FieldInput id='36' label='Otras rentas exentas' onClick={() => setAsideID('36')} />
        <FieldInput id='37' label='Total rentas exentas' />
      </section>
      <Line />
      <Typography variant='header4'>Deducciones imputables</Typography>
      <Typography>Las deducciones imputables reducen el impuesto por pagar.</Typography>
      <section className='fields-container'>
        <FieldInput id='38' label='Intereses de vivienda' onClick={() => setAsideID('38')} />
        <FieldInput id='39' label='Otras deducciones imputables' onClick={() => setAsideID('39')} />
        <FieldInput id='40' label='Total deducciones imputables' />
      </section>
      <Line />
      <section className='fields-container'>
        <FieldInput id='41' label='Rentas exentas y/o deducciones imputables' />
        <FieldInput id='42' label='Renta líquida ordinaria' />
      </section>
    </Tabs.TabPanel>
  );
};
