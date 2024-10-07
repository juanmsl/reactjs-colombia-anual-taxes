import { Line, Tabs, Typography } from '@juanmsl/ui';
import { useState } from 'react';

import { MarginTable, Table133 } from '../../form-210/components';
import { Data } from '../form-210-tabs.data';

import { FieldInput } from '@components/field-input';
import { useForm210 } from '@contexts';
import { f116MarginTable, f117MarginTable, f119MarginTable, Form210Sections } from '@core/constants';

type LiquidacionPrivadaProps = {
  setAsideID: (id: `${number | ''}`) => void;
};

export const LiquidacionPrivada = ({ setAsideID }: LiquidacionPrivadaProps) => {
  const { f111, valueToUVT, f106 } = useForm210();
  const [showDescriptionTable, setShowDescriptionTable] = useState<`${number | ''}`>('');

  return (
    <Tabs.TabPanel id={Form210Sections.LIQUIDACION_PRIVADA}>
      <Typography variant='header1'>11. Liquidación privada</Typography>
      <Data label='Rentas liquida gravable (Cédula general o renta presuntiva, de pensiones y de dividendos y participaciones, art. 241 E.T.)'>
        <FieldInput id='111' />
      </Data>
      <Line />
      <Typography variant='header4'>Impuesto sobre las rentas líquidas gravables</Typography>
      <section className='fields-container'>
        <Data label='Cédula general, de pensiones y de dividendos y participaciones'>
          <FieldInput
            id='116'
            formula={showDescriptionTable === '116' ? '(Click para ocultar)' : '(Click para ver calculo)'}
            action={() => setShowDescriptionTable(prev => (prev === '116' ? '' : '116'))}
          />
        </Data>
        <Data label='Renta presuntiva, de pensiones y de dividendos y participaciones'>
          <FieldInput
            id='117'
            formula={showDescriptionTable === '117' ? '(Click para ocultar)' : '(Click para ver calculo)'}
            action={() => setShowDescriptionTable(prev => (prev === '117' ? '' : '117'))}
          />
        </Data>
        <Data label='Por dividendos y participaciones año 2017 y siguientes, 2a subcédula (Art 240 E.T)'>
          <FieldInput id='118' />
        </Data>
        <Data label='Por dividendos y participaciones año 2016'>
          <FieldInput
            id='119'
            formula={showDescriptionTable === '119' ? '(Click para ocultar)' : '(Click para ver calculo)'}
            action={() => setShowDescriptionTable(prev => (prev === '119' ? '' : '119'))}
          />
        </Data>
        <Data label='Por dividendos y participaciones recibidas del exterior'>
          <FieldInput id='120' />
        </Data>
        <Data label='Total impuesto sobre las rentas líquidas gravables'>
          <FieldInput id='121' />
        </Data>
      </section>
      {showDescriptionTable === '116' && (
        <MarginTable id='111' value={f111} uvtValue={valueToUVT(f111)} marginTable={f116MarginTable}>
          <Typography variant='label'>Si la celda 97 es mayor que la 98</Typography>
          <section className='columns'>
            <FieldInput id='97' />
            <Typography variant='label'>&gt;</Typography>
            <FieldInput id='98' />
          </section>
        </MarginTable>
      )}
      {showDescriptionTable === '117' && (
        <MarginTable id='111' value={f111} uvtValue={valueToUVT(f111)} marginTable={f117MarginTable}>
          <Typography variant='label'>Si la celda 98 es mayor que la 97</Typography>
          <section className='columns'>
            <FieldInput id='98' />
            <Typography variant='label'>&gt;</Typography>
            <FieldInput id='97' />
          </section>
        </MarginTable>
      )}
      {showDescriptionTable === '119' && (
        <MarginTable id='106' value={f106} uvtValue={valueToUVT(f106)} marginTable={f119MarginTable} />
      )}
      <Line />
      <Typography variant='header4'>Descuentos</Typography>
      <section className='fields-container'>
        <Data label='Impuestos pagados en el exterior'>
          <FieldInput id='122' />
        </Data>
        <Data label='Donaciones'>
          <FieldInput id='123' />
        </Data>
        <Data label='Dividendos, participaciones y otros'>
          <FieldInput id='124' />
        </Data>
        <Data label='Total descuentos tributarios'>
          <FieldInput id='125' />
        </Data>
      </section>
      <Line />
      <Typography variant='header4'>Liquidación</Typography>
      <section className='fields-container'>
        <Data label='Impuesto neto de renta'>
          <FieldInput id='126' />
        </Data>
        <Data label='Impuesto de ganancias ocasionales'>
          <FieldInput id='127' />
        </Data>
        <Data label='Descuento por impuestos pagados en el exterior por ganancias ocacionales'>
          <FieldInput id='128' />
        </Data>
        <Data label='Total impuesto a cargo'>
          <FieldInput id='129' />
        </Data>
        <Data label='Anticipo renta liquida año grabable anterior'>
          <FieldInput id='130' />
        </Data>
        <Data label='Saldo a favor del año gravable anterior'>
          <FieldInput id='131' />
        </Data>
        <Data label='Retenciones año gravable a declarar' onClick={() => setAsideID('132')}>
          <FieldInput id='132' />
        </Data>
        <Data label='Anticipo de renta para el año gravable siguiente'>
          <FieldInput
            id='133'
            formula={showDescriptionTable === '133' ? '(Click para ocultar)' : '(Click para ver calculo)'}
            action={() => setShowDescriptionTable(prev => (prev === '133' ? '' : '133'))}
          />
        </Data>
      </section>
      {showDescriptionTable === '133' && <Table133 />}
    </Tabs.TabPanel>
  );
};
