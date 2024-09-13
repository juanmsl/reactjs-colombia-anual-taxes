import { AsideModal, Grid, Line, Select, Tabs, Typography } from '@juanmsl/ui';
import { useState } from 'react';

import { Form210TabsStyle } from './form-210-tabs.style';
import { Form210Tab } from './form-210-tabs.tab';

import { FieldInput } from '@components/field-input';
import { FieldInputDetails, MarginTable, Table133 } from '@components/form-210/components';
import { Data } from '@components/form-210-tabs/form-210-tabs.data';
import { FormatInput } from '@components/format-input';
import { useForm210 } from '@contexts';
import {
  DeclarationNumberOption,
  DeclarationNumberOptions,
  f116MarginTable,
  f117MarginTable,
  f119MarginTable,
  Form210Sections,
} from '@core/constants';

export const Form210Tabs = () => {
  const { declarationNumber, setData, year, prevDeclarationValue, f111, valueToUVT, f106 } = useForm210();
  const [showDescriptionTable, setShowDescriptionTable] = useState<`${number | ''}`>('');
  const [asideID, setAsideID] = useState<`${number | ''}`>('');

  return (
    <Form210TabsStyle>
      <Tabs defaultOpenTab={Form210Sections.INICIO}>
        <Grid flow='column' gap='1em' jc='start' style={{ overflow: 'auto' }}>
          <Form210Tab id={Form210Sections.INICIO} tooltip='Inicio'>
            1
          </Form210Tab>
          <Form210Tab id={Form210Sections.PATRIMONIO} tooltip='Patrimonio'>
            2
          </Form210Tab>
          <Form210Tab id={Form210Sections.RENTAS_DE_TRABAJO} tooltip='Rentas de trabajo'>
            3
          </Form210Tab>
          <Form210Tab id={Form210Sections.RENTAS_POR_HONORARIOS} tooltip='Rentas por honorarios'>
            4
          </Form210Tab>
          <Form210Tab id={Form210Sections.RENTAS_DE_CAPITAL} tooltip='Rentas de capital'>
            5
          </Form210Tab>
          <Form210Tab id={Form210Sections.RENTAS_NO_LABORALES} tooltip='Rentas no laborales'>
            6
          </Form210Tab>
          <Form210Tab id={Form210Sections.CEDULA_GENERAL} tooltip='Cedula general'>
            7
          </Form210Tab>
          <Form210Tab id={Form210Sections.CEDULA_PENSIONES} tooltip='Cedula de pensiones'>
            8
          </Form210Tab>
          <Form210Tab id={Form210Sections.CEDULA_DIVIDENDOS} tooltip='Cedula de dividendos'>
            9
          </Form210Tab>
          <Form210Tab id={Form210Sections.GANANCIA_OCASIONAL} tooltip='Ganancia ocasional'>
            10
          </Form210Tab>
          <Form210Tab id={Form210Sections.LIQUIDACION_PRIVADA} tooltip='Liquidación privada'>
            11
          </Form210Tab>
          <Form210Tab id={Form210Sections.DEPENDIENTES} tooltip='Dependientes'>
            12
          </Form210Tab>
          <Form210Tab id={Form210Sections.PAGO_TOTAL} tooltip='Pago total'>
            13
          </Form210Tab>
        </Grid>

        <Tabs.TabPanel id={Form210Sections.INICIO}>
          <Typography variant='header1'>Inicio</Typography>
          <section className='fields-container'>
            <Data label='Estoy declarando por'>
              <Select<DeclarationNumberOption>
                options={DeclarationNumberOptions}
                renderOption={item => item.label}
                name='declarationNumber'
                multiselect={false}
                variant='content-border'
                value={DeclarationNumberOptions.find(item => item.value === declarationNumber)}
                setValue={value =>
                  setData(prev => ({
                    ...prev,
                    declarationNumber: value.value,
                  }))
                }
              />
            </Data>
            {declarationNumber > 1 && (
              <Data label={`Impuesto neto de renta año anterior (Celda 127 del ${year - 1})`}>
                <FormatInput
                  id='prevDeclarationValue'
                  value={prevDeclarationValue}
                  setValue={prevDeclarationValue => setData(prev => ({ ...prev, prevDeclarationValue }))}
                  roundTo={0}
                  disabled={declarationNumber === 1}
                  variant='content-border'
                />
              </Data>
            )}
            <Data label='Uno por ciento (1%) de compras con fáctura electrónica'>
              <FieldInput id='28' />
            </Data>
          </section>
        </Tabs.TabPanel>

        <Tabs.TabPanel id={Form210Sections.PATRIMONIO}>
          <Typography variant='header1'>Patrimonio</Typography>
          <section className='fields-container'>
            <Data label='Total patrimonio bruto' onClick={() => setAsideID('29')}>
              <FieldInput id='29' />
            </Data>
            <Data label='Deudas' onClick={() => setAsideID('30')}>
              <FieldInput id='30' />
            </Data>
            <Data label='Total patrimonio liquido'>
              <FieldInput id='31' />
            </Data>
          </section>
        </Tabs.TabPanel>

        <Tabs.TabPanel id={Form210Sections.RENTAS_DE_TRABAJO}>
          <Typography variant='header1'>Rentas de trabajo</Typography>
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
        <Tabs.TabPanel id={Form210Sections.RENTAS_POR_HONORARIOS}>
          <Typography variant='header1'>Rentas por honorarios</Typography>
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
        <Tabs.TabPanel id={Form210Sections.RENTAS_DE_CAPITAL}>
          <Typography variant='header1'>Rentas de capital</Typography>
          <Typography>
            Son ingresos derivados de intereses, rendimientos financieros, arrendamientos, regalías y la explotación de
            la propiedad intelectual (libros, derechos de autor, uso de su imagen, entre otros).
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
        <Tabs.TabPanel id={Form210Sections.RENTAS_NO_LABORALES}>
          <Typography variant='header1'>Rentas no laborales</Typography>
          <Typography>
            Son ingresos que no se clasifican explícitamente en ninguna de las demás categorías y aquellos que no
            cumplan con la definición de servicios personales.
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
        <Tabs.TabPanel id={Form210Sections.CEDULA_GENERAL}>
          <Typography variant='header1'>Cedula general</Typography>
          <Typography>
            Están incorporados los ingresos por concepto de rentas de trabajo, de capital y no laborales.
          </Typography>
          <section className='fields-container'>
            <Data label='Renta liquida'>
              <FieldInput id='91' />
            </Data>
            <Data label='Rentas exentas y deducciones imputables'>
              <FieldInput id='92' />
            </Data>
            <Data label='Renta liquida ordinaria'>
              <FieldInput id='93' />
            </Data>
            <Data label='Compensaciones por pérdidas año gravable 2018 y anteriores'>
              <FieldInput id='94' />
            </Data>
            <Data label='Compensaciones por exceso de renta presuntiva'>
              <FieldInput id='95' />
            </Data>
            <Data label='Rentas gravables'>
              <FieldInput id='96' />
            </Data>
            <Data label='Renta liquida gravable'>
              <FieldInput id='97' />
            </Data>
            <Data label='Renta presuntiva'>
              <FieldInput id='98' />
            </Data>
          </section>
        </Tabs.TabPanel>
        <Tabs.TabPanel id={Form210Sections.CEDULA_PENSIONES}>
          <Typography variant='header1'>Cedula de pensiones</Typography>
          <Typography>
            Los ingresos como las pensiones de jubilación, invalidez, vejez, de sobrevivientes y sobre riesgos
            laborales, así como aquellas provenientes de indemnizaciones sustitutivas de las pensiones o las
            devoluciones de saldos de ahorro pensional.
          </Typography>
          <section className='fields-container'>
            <Data label='Ingresos brutos por rentas de pensiones del pais y del exterior'>
              <FieldInput id='99' />
            </Data>
            <Data label='Ingresos no constitutivos de renta'>
              <FieldInput id='100' />
            </Data>
            <Data label='Renta liquida'>
              <FieldInput id='101' />
            </Data>
            <Data label='Rentas excentas de pensiones'>
              <FieldInput id='102' />
            </Data>
            <Data label='Total impuesto sobre rentas liquidas'>
              <FieldInput id='103' />
            </Data>
          </section>
        </Tabs.TabPanel>
        <Tabs.TabPanel id={Form210Sections.CEDULA_DIVIDENDOS}>
          <Typography variant='header1'>Cedula de dividendos y participaciones</Typography>
          <section>
            <Typography>
              Son ingresos de esta cédula los recibidos por concepto de dividendos y/o participaciones, y constituyen
              renta gravable en cabeza de los socios, accionistas, comuneros, asociados, suscriptores y similares, que
              sean personas naturales residentes y sucesiones ilíquidas de causantes que al momento de su muerte eran
              residentes, recibidos de distribuciones provenientes de sociedades y entidades nacionales, y de sociedades
              y entidades extranjeras.
            </Typography>
            <Typography>
              Deberá incluir el valor total de los dividendos y/o participaciones que le hayan sido pagados o abonados
              en cuenta en calidad de exigibles, durante el año gravable que se está declarando y siguientes, según los
              valores certificados por la sociedad anónima, limitada o asimiladas, según el caso.
            </Typography>
            <Typography>
              Dependiendo del periodo en el que los dividendos fueron decretados y pagados o abonados, estos pueden ser
              considerados como no constitutivos de renta, o como gravados de acuerdo con lo establecido en el artículo
              343 del E.T.
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
        <Tabs.TabPanel id={Form210Sections.GANANCIA_OCASIONAL}>
          <Typography variant='header1'>Ganancias ocasionales</Typography>
          <Typography>
            Los ingresos a reportar son la venta de activos fijos, indemnizaciones de seguros de vida, ganancias por
            loterias, legados, donaciones, porciónes conyugales y valores recibidos por herencias.
          </Typography>
          <section className='fields-container'>
            <Data label='Ingresos por ganancias ocasionales en el país y del exterior'>
              <FieldInput id='112' />
            </Data>
            <Data label='Costos por ganancias ocacionales'>
              <FieldInput id='113' />
            </Data>
            <Data label='Ganancias ocasionales no gravadas y exentas'>
              <FieldInput id='114' />
            </Data>
            <Data label='Ganancias ocasionales gravables'>
              <FieldInput id='115' />
            </Data>
          </section>
        </Tabs.TabPanel>
        <Tabs.TabPanel id={Form210Sections.LIQUIDACION_PRIVADA}>
          <Typography variant='header1'>Liquidación privada</Typography>
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
        <Tabs.TabPanel id={Form210Sections.DEPENDIENTES}>
          <Typography variant='header1'>Dependientes</Typography>
          <section className='fields-container'>
            <Data label='Número de dependientes económicos'>
              <FieldInput id='138' />
            </Data>
            <Data label='Adición por dependientes a la casilla 92'>
              <FieldInput id='139' />
            </Data>
          </section>
        </Tabs.TabPanel>
        <Tabs.TabPanel id={Form210Sections.PAGO_TOTAL}>
          <Typography variant='header1'>Pago total</Typography>
          <section className='fields-container'>
            <Data label='Saldo a pagar por impuesto'>
              <FieldInput id='134' />
            </Data>
            <Data label='Sanciones'>
              <FieldInput id='135' />
            </Data>
            <Data label='Total saldo a pagar'>
              <FieldInput id='136' />
            </Data>
            <Data label='Total saldo a favor'>
              <FieldInput id='137' />
            </Data>
          </section>
        </Tabs.TabPanel>

        <AsideModal isOpen={asideID !== ''} closeButton='relative' onClose={() => setAsideID('')}>
          <FieldInputDetails id={asideID} />
        </AsideModal>
      </Tabs>
    </Form210TabsStyle>
  );
};
