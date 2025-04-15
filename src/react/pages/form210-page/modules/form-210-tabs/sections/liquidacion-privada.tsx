import { Line, Tabs, Typography } from 'polpo/ui';
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
      <FieldInput
        id='111'
        label='Rentas liquida gravable (Cédula general o renta presuntiva, de pensiones y de dividendos y participaciones, art. 241 E.T.)'
      />
      <Line />
      <Typography variant='header4'>Impuesto sobre las rentas líquidas gravables</Typography>
      <section className='fields-container'>
        <FieldInput
          id='116'
          label='Cédula general, de pensiones y de dividendos y participaciones'
          formula={showDescriptionTable === '116' ? '(Click para ocultar)' : '(Click para ver calculo)'}
          action={() => setShowDescriptionTable(prev => (prev === '116' ? '' : '116'))}
        />
        <FieldInput
          id='117'
          label='Renta presuntiva, de pensiones y de dividendos y participaciones'
          formula={showDescriptionTable === '117' ? '(Click para ocultar)' : '(Click para ver calculo)'}
          action={() => setShowDescriptionTable(prev => (prev === '117' ? '' : '117'))}
        />
        <FieldInput
          id='118'
          label='Por dividendos y participaciones año 2017 y siguientes, 2a subcédula (Art 240 E.T)'
        />
        <FieldInput
          id='119'
          label='Por dividendos y participaciones año 2016'
          formula={showDescriptionTable === '119' ? '(Click para ocultar)' : '(Click para ver calculo)'}
          action={() => setShowDescriptionTable(prev => (prev === '119' ? '' : '119'))}
        />
        <FieldInput id='120' label='Por dividendos y participaciones recibidas del exterior' />
        <FieldInput id='121' label='Total impuesto sobre las rentas líquidas gravables' />
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
        <FieldInput id='122' label='Impuestos pagados en el exterior' />
        <FieldInput id='123' label='Donaciones' />
        <FieldInput id='124' label='Dividendos, participaciones y otros' />
        <FieldInput id='125' label='Total descuentos tributarios' />
      </section>
      <Line />
      <Typography variant='header4'>Liquidación</Typography>
      <section className='fields-container'>
        <FieldInput id='126' label='Impuesto neto de renta' />
        <FieldInput id='127' label='Impuesto de ganancias ocasionales' />
        <FieldInput id='128' label='Descuento por impuestos pagados en el exterior por ganancias ocacionales' />
        <FieldInput id='129' label='Total impuesto a cargo' />
        <FieldInput id='130' label='Anticipo renta liquida año grabable anterior' />
        <FieldInput id='131' label='Saldo a favor del año gravable anterior' />
        <FieldInput id='132' label='Retenciones año gravable a declarar' onClick={() => setAsideID('132')} />
        <FieldInput
          id='133'
          label='Anticipo de renta para el año gravable siguiente'
          formula={showDescriptionTable === '133' ? '(Click para ocultar)' : '(Click para ver calculo)'}
          action={() => setShowDescriptionTable(prev => (prev === '133' ? '' : '133'))}
        />
      </section>
      {showDescriptionTable === '133' && <Table133 />}
    </Tabs.TabPanel>
  );
};
