import { Tabs, Typography } from '@juanmsl/ui';

import { Data } from '../form-210-tabs.data';

import { FieldInput } from '@components/field-input';
import { Form210Sections } from '@core/constants';

export const CedulaDividendos = () => {
  return (
    <Tabs.TabPanel id={Form210Sections.CEDULA_DIVIDENDOS}>
      <Typography variant='header1'>9. Cedula de dividendos y participaciones</Typography>
      <section>
        <Typography>
          Son ingresos de esta cédula los recibidos por concepto de dividendos y/o participaciones, y constituyen renta
          gravable en cabeza de los socios, accionistas, comuneros, asociados, suscriptores y similares, que sean
          personas naturales residentes y sucesiones ilíquidas de causantes que al momento de su muerte eran residentes,
          recibidos de distribuciones provenientes de sociedades y entidades nacionales, y de sociedades y entidades
          extranjeras.
        </Typography>
        <Typography>
          Deberá incluir el valor total de los dividendos y/o participaciones que le hayan sido pagados o abonados en
          cuenta en calidad de exigibles, durante el año gravable que se está declarando y siguientes, según los valores
          certificados por la sociedad anónima, limitada o asimiladas, según el caso.
        </Typography>
        <Typography>
          Dependiendo del periodo en el que los dividendos fueron decretados y pagados o abonados, estos pueden ser
          considerados como no constitutivos de renta, o como gravados de acuerdo con lo establecido en el artículo 343
          del E.T.
        </Typography>
      </section>
      <section className='fields-container'>
        <Data label='Dividendos y participaciones 2016 y anteriores, y otros'>
          <FieldInput id='104' />
        </Data>
        <Data label='Ingresos no constitutivos de renta'>
          <FieldInput id='105' />
        </Data>
        <Data label='Renta liquida ordinaria año 2016 y anteriores'>
          <FieldInput id='106' />
        </Data>
        <Data label='1a Subcedula año 2017 y siguientes numeral 3 art 49 del E.T.'>
          <FieldInput id='107' />
        </Data>
        <Data label='2a Subcedula año 2017 y siguientes paragrafo 2 art 49 del E.T.'>
          <FieldInput id='108' />
        </Data>
        <Data label='Dividendos y participaciones recibidas del exterior'>
          <FieldInput id='109' />
        </Data>
        <Data label='Rentas exentas de la casilla 109'>
          <FieldInput id='110' />
        </Data>
      </section>
    </Tabs.TabPanel>
  );
};
