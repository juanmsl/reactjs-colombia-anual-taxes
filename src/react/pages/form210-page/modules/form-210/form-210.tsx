import { AsideModal, Line, Select, Typography, Switch, SlideCard } from 'polpo/ui';
import { useState } from 'react';

import { FieldInputDetails, FormLabel, MarginTable, Table133 } from './components';
import { Form210Style, FormTable } from './form-210.style';

import { FieldInput } from '@components/field-input';
import { FieldInputContainer } from '@components/field-input-container';
import { useForm210, useForm210FieldParams } from '@contexts';
import { DeclarationNumberOptions, f116MarginTable, f117MarginTable, f119MarginTable } from '@core/constants';

export const Form210 = () => {
  const { valueToUVT, setData } = useForm210();
  const { value: f106 } = useForm210FieldParams('106');
  const { value: f111 } = useForm210FieldParams('111');
  const { value: year } = useForm210FieldParams('year');
  const { value: declarationNumber } = useForm210FieldParams('declarationNumber');

  const [showDescriptionTable, setShowDescriptionTable] = useState<`${number | ''}`>('');
  const [asideID, setAsideID] = useState<`${number | ''}`>('');
  const [showCedulaDePensiones, setShowCedulaDePensiones] = useState(false);
  const [showCedulaDeDividendos, setShowCedulaDeDividendos] = useState(false);
  const [showGananciasOcasionales, setShowGananciasOcasionales] = useState(false);

  return (
    <Form210Style>
      <FormTable>
        <tbody>
          <tr>
            <td colSpan={2} rowSpan={7} className='form-210-actions' />
            <FormLabel className='form-section-title' colSpan={4}>
              Inicio
            </FormLabel>
          </tr>

          <tr>
            <FormLabel atBottom>Estoy declarando por</FormLabel>
            <FormLabel colSpan={2} atBottom>
              Impuesto neto de renta año anterior (Celda 127 del {year - 1})
            </FormLabel>
            <FormLabel colSpan={declarationNumber > 1 ? 1 : 2} atBottom>
              Uno por ciento (1%) de compras con fáctura electrónica
            </FormLabel>
          </tr>

          <tr>
            <td>
              <FieldInputContainer>
                <Select
                  options={DeclarationNumberOptions}
                  optionComponent={({ value }) => <Typography variant='label'>{value.label}</Typography>}
                  valueComponent={({ value }) => (
                    <Typography variant='label' noPadding>
                      {Array.isArray(value) ? value.map(item => item.label) : value.label}
                    </Typography>
                  )}
                  name='declarationNumber'
                  multiselect={false}
                  value={DeclarationNumberOptions.find(item => item.value === declarationNumber)}
                  setValue={value =>
                    setData(prev => ({
                      ...prev,
                      declarationNumber: value.value,
                    }))
                  }
                />
              </FieldInputContainer>
            </td>
            <FieldInput inTable colSpan={2} id='prevDeclarationValue' roundTo={0} />
            <FieldInput inTable id='28' colSpan={declarationNumber > 1 ? 1 : 2} />
          </tr>

          <tr>
            <td colSpan={2} />
            <td colSpan={4} className='empty-row' />
          </tr>

          <tr>
            <FormLabel className='form-section-title' colSpan={4}>
              Patrimonio
            </FormLabel>
          </tr>
          <tr>
            <FormLabel atBottom>Total patrimonio bruto</FormLabel>
            <FormLabel atBottom>Deudas</FormLabel>
            <FormLabel atBottom>Total patrimonio liquido</FormLabel>
          </tr>
          <tr>
            <FieldInput inTable id='29' onClick={() => setAsideID('29')} />
            <FieldInput inTable id='30' onClick={() => setAsideID('30')} />
            <FieldInput inTable id='31' />
          </tr>

          <tr>
            <td colSpan={6} className='empty-row' />
          </tr>

          <tr>
            <FormLabel className='form-section-title' colSpan={6}>
              Cédula general
            </FormLabel>
          </tr>
          <tr>
            <td colSpan={2} />
            <FormLabel className='column-title' atBottom>
              Rentas de trabajo
            </FormLabel>
            <FormLabel className='column-title' atBottom>
              Rentas por honorarios
            </FormLabel>
            <FormLabel className='column-title' atBottom>
              Rentas de capital
            </FormLabel>
            <FormLabel className='column-title' atBottom>
              Rentas no laborales
            </FormLabel>
          </tr>

          <tr>
            <FormLabel colSpan={2}>Ingresos brutos</FormLabel>
            <FieldInput inTable id='32' onClick={() => setAsideID('32')} />
            <FieldInput inTable id='43' onClick={() => setAsideID('43')} />
            <FieldInput inTable id='58' onClick={() => setAsideID('58')} />
            <FieldInput inTable id='74' onClick={() => setAsideID('74')} />
          </tr>
          <tr>
            <FormLabel colSpan={2}>Devoluciones, rebajas y dctos.</FormLabel>
            <td colSpan={3} className='empty'></td>
            <FieldInput inTable id='75' onClick={() => setAsideID('75')} />
          </tr>
          <tr>
            <FormLabel colSpan={2}>Ingrésos no constitutivos de renta</FormLabel>
            <FieldInput inTable id='33' onClick={() => setAsideID('33')} />
            <FieldInput inTable id='44' onClick={() => setAsideID('44')} />
            <FieldInput inTable id='59' onClick={() => setAsideID('59')} />
            <FieldInput inTable id='76' onClick={() => setAsideID('76')} />
          </tr>
          <tr>
            <FormLabel colSpan={2}>Costos y deducciones procedentes</FormLabel>
            <td colSpan={1} className='empty'></td>
            <FieldInput inTable id='45' onClick={() => setAsideID('45')} />
            <FieldInput inTable id='60' onClick={() => setAsideID('60')} />
            <FieldInput inTable id='77' onClick={() => setAsideID('77')} />
          </tr>
          <tr>
            <FormLabel colSpan={2}>Renta líquida</FormLabel>
            <FieldInput inTable id='34' />
            <FieldInput inTable id='46' />
            <FieldInput inTable id='61' />
            <FieldInput inTable id='78' />
          </tr>
          <tr>
            <FormLabel colSpan={2}>Rentas líquidas pasivas - ECE</FormLabel>
            <td colSpan={2} className='empty'></td>
            <FieldInput inTable id='62' onClick={() => setAsideID('62')} />
            <FieldInput inTable id='79' onClick={() => setAsideID('79')} />
          </tr>

          <tr>
            <td colSpan={6}>
              <Line orientation='horizontal' />
            </td>
          </tr>

          <tr>
            <FormLabel rowSpan={3} className='text-vertical'>
              Rentas exentas
            </FormLabel>
            <FormLabel>Aportes voluntarios AFC, FVP y/o AVC</FormLabel>
            <FieldInput inTable id='35' onClick={() => setAsideID('35')} />
            <FieldInput inTable id='47' onClick={() => setAsideID('47')} />
            <FieldInput inTable id='63' onClick={() => setAsideID('63')} />
            <FieldInput inTable id='80' onClick={() => setAsideID('80')} />
          </tr>
          <tr>
            <FormLabel>Otras rentas exentas</FormLabel>
            <FieldInput inTable id='36' onClick={() => setAsideID('36')} />
            <FieldInput inTable id='48' onClick={() => setAsideID('48')} />
            <FieldInput inTable id='64' onClick={() => setAsideID('64')} />
            <FieldInput inTable id='81' onClick={() => setAsideID('81')} />
          </tr>
          <tr>
            <FormLabel>Total rentas exentas</FormLabel>
            <FieldInput inTable id='37' />
            <FieldInput inTable id='49' />
            <FieldInput inTable id='65' />
            <FieldInput inTable id='82' />
          </tr>

          <tr>
            <td colSpan={6}>
              <Line orientation='horizontal' />
            </td>
          </tr>

          <tr>
            <FormLabel rowSpan={3} className='text-vertical'>
              Deducciones imputables
            </FormLabel>
            <FormLabel>Intereses de vivienda</FormLabel>
            <FieldInput inTable id='38' onClick={() => setAsideID('38')} />
            <FieldInput inTable id='50' onClick={() => setAsideID('50')} />
            <FieldInput inTable id='66' onClick={() => setAsideID('66')} />
            <FieldInput inTable id='83' onClick={() => setAsideID('83')} />
          </tr>
          <tr>
            <FormLabel>Otras deducciones imputables</FormLabel>
            <FieldInput inTable id='39' onClick={() => setAsideID('39')} />
            <FieldInput inTable id='51' onClick={() => setAsideID('51')} />
            <FieldInput inTable id='67' onClick={() => setAsideID('67')} />
            <FieldInput inTable id='84' onClick={() => setAsideID('84')} />
          </tr>
          <tr>
            <FormLabel>Total deducciones imputables</FormLabel>
            <FieldInput inTable id='40' />
            <FieldInput inTable id='52' />
            <FieldInput inTable id='68' />
            <FieldInput inTable id='85' />
          </tr>

          <tr>
            <td colSpan={6}>
              <Line orientation='horizontal' />
            </td>
          </tr>

          <tr>
            <FormLabel colSpan={2}>Rentas exentas y/o deducciones imputables</FormLabel>
            <FieldInput inTable id='41' />
            <FieldInput inTable id='53' />
            <FieldInput inTable id='69' />
            <FieldInput inTable id='86' />
          </tr>
          <tr>
            <FormLabel colSpan={2}>Renta líquida ordinária del ejercicio</FormLabel>
            <td colSpan={1} className='empty'></td>
            <FieldInput inTable id='54' />
            <FieldInput inTable id='70' />
            <FieldInput inTable id='87' />
          </tr>
          <tr>
            <FormLabel colSpan={2}>Pérdida líquida del ejercicio</FormLabel>
            <td colSpan={1} className='empty'></td>
            <FieldInput inTable id='55' />
            <FieldInput inTable id='71' />
            <FieldInput inTable id='88' />
          </tr>
          <tr>
            <FormLabel colSpan={2}>Compensaciones por perdidas</FormLabel>
            <td colSpan={1} className='empty'></td>
            <FieldInput inTable id='56' />
            <FieldInput inTable id='72' />
            <FieldInput inTable id='89' />
          </tr>
          <tr>
            <FormLabel colSpan={2}>Renta líquida ordinaria</FormLabel>
            <FieldInput inTable id='42' />
            <FieldInput inTable id='57' />
            <FieldInput inTable id='73' />
            <FieldInput inTable id='90' />
          </tr>

          <tr>
            <td colSpan={6}>
              <Line orientation='horizontal' />
            </td>
          </tr>

          <tr>
            <td colSpan={2} />
            <FormLabel atBottom>Renta liquida</FormLabel>
            <FormLabel atBottom>Rentas exentas y deducciones imputables</FormLabel>
            <FormLabel atBottom>Renta liquida ordinaria</FormLabel>
            <FormLabel atBottom>Compensaciones por pérdidas año gravable 2018 y anteriores</FormLabel>
          </tr>
          <tr>
            <td colSpan={2} />
            <FieldInput inTable id='91' />
            <FieldInput inTable id='92' />
            <FieldInput inTable id='93' />
            <FieldInput inTable id='94' />
          </tr>
          <tr>
            <td colSpan={2} />
            <FormLabel atBottom>Compensaciones por exceso de renta presuntiva</FormLabel>
            <FormLabel atBottom>Rentas gravables</FormLabel>
            <FormLabel atBottom>Renta liquida gravable</FormLabel>
            <FormLabel atBottom>Renta presuntiva</FormLabel>
          </tr>
          <tr>
            <td colSpan={2} />
            <FieldInput inTable id='95' />
            <FieldInput inTable id='96' />
            <FieldInput inTable id='97' />
            <FieldInput inTable id='98' />
          </tr>

          <tr>
            <td colSpan={6} className='empty-row' />
          </tr>

          <tr>
            <td colSpan={2}>
              <Switch
                value={showCedulaDePensiones}
                name='showCedulaDePensiones'
                setValue={value => setShowCedulaDePensiones(value)}
                style={{ marginLeft: 'auto' }}
              />
            </td>
            <FormLabel className='form-section-title' colSpan={4}>
              Cédula de pensiones
            </FormLabel>
          </tr>

          <tr>
            <td colSpan={2} />
            <td colSpan={4}>
              <SlideCard isOpen={showCedulaDePensiones}>
                <>
                  <tr>
                    <td colSpan={2} />
                    <td colSpan={4} style={{ padding: '1em 0' }}>
                      <Typography variant='label'>
                        Los ingresos como las pensiones de jubilación, invalidez, vejez, de sobrevivientes y sobre
                        riesgos laborales, así como aquellas provenientes de indemnizaciones sustitutivas de las
                        pensiones o las devoluciones de saldos de ahorro pensional.
                      </Typography>
                    </td>
                  </tr>

                  <tr>
                    <td colSpan={2} />
                    <FormLabel atBottom>Ingresos brutos por rentas de pensiones del pais y del exterior</FormLabel>
                    <FormLabel atBottom>Ingresos no constitutivos de renta</FormLabel>
                    <FormLabel atBottom>Renta liquida</FormLabel>
                    <FormLabel atBottom>Rentas excentas de pensiones</FormLabel>
                  </tr>

                  <tr>
                    <td colSpan={2} />
                    <FieldInput inTable id='99' />
                    <FieldInput inTable id='100' />
                    <FieldInput inTable id='101' />
                    <FieldInput inTable id='102' />
                  </tr>

                  <tr>
                    <td colSpan={2} />
                    <FormLabel atBottom>Total impuesto sobre rentas liquidas</FormLabel>
                  </tr>

                  <tr>
                    <td colSpan={2} />
                    <FieldInput inTable id='103' />
                  </tr>
                </>
              </SlideCard>
            </td>
          </tr>

          <tr>
            <td colSpan={6} className='empty-row' />
          </tr>

          <tr>
            <td colSpan={2}>
              <Switch
                name='showCedulaDeDividendos'
                value={showCedulaDeDividendos}
                setValue={value => setShowCedulaDeDividendos(value)}
                style={{ marginLeft: 'auto' }}
              />
            </td>
            <FormLabel className='form-section-title' colSpan={4}>
              Cédula de dividendos y/o participaciones
            </FormLabel>
          </tr>

          <tr>
            <td colSpan={2} />
            <td colSpan={4}>
              <SlideCard isOpen={showCedulaDeDividendos}>
                <>
                  <tr>
                    <td colSpan={2} />
                    <td colSpan={4} style={{ padding: '1em 0' }}>
                      <section>
                        <Typography variant='label' as='p'>
                          Son ingresos de esta cédula los recibidos por concepto de dividendos y/o participaciones, y
                          constituyen renta gravable en cabeza de los socios, accionistas, comuneros, asociados,
                          suscriptores y similares, que sean personas naturales residentes y sucesiones ilíquidas de
                          causantes que al momento de su muerte eran residentes, recibidos de distribuciones
                          provenientes de sociedades y entidades nacionales, y de sociedades y entidades extranjeras.
                        </Typography>
                        <Typography variant='label' as='p'>
                          Deberá incluir el valor total de los dividendos y/o participaciones que le hayan sido pagados
                          o abonados en cuenta en calidad de exigibles, durante el año gravable que se está declarando y
                          siguientes, según los valores certificados por la sociedad anónima, limitada o asimiladas,
                          según el caso.
                        </Typography>
                        <Typography variant='label' as='p'>
                          Dependiendo del periodo en el que los dividendos fueron decretados y pagados o abonados, estos
                          pueden ser considerados como no constitutivos de renta, o como gravados de acuerdo con lo
                          establecido en el artículo 343 del E.T.
                        </Typography>
                      </section>
                    </td>
                  </tr>

                  <tr>
                    <td colSpan={2} />
                    <FormLabel atBottom>Dividendos y participaciones 2016 y anteriores, y otros</FormLabel>
                    <FormLabel atBottom>Ingresos no constitutivos de renta</FormLabel>
                    <FormLabel atBottom>Renta liquida ordinaria año 2016 y anteriores</FormLabel>
                    <FormLabel atBottom>1a Subcedula año 2017 y siguientes numeral 3 art 49 del E.T.</FormLabel>
                  </tr>

                  <tr>
                    <td colSpan={2} />
                    <FieldInput inTable id='104' />
                    <FieldInput inTable id='105' />
                    <FieldInput inTable id='106' />
                    <FieldInput inTable id='107' />
                  </tr>

                  <tr>
                    <td colSpan={2} />
                    <FormLabel atBottom>2a Subcedula año 2017 y siguientes paragrafo 2 art 49 del E.T.</FormLabel>
                    <FormLabel atBottom>Dividendos y participaciones recibidas del exterior</FormLabel>
                    <FormLabel atBottom>Rentas exentas de la casilla 109</FormLabel>
                  </tr>
                  <tr>
                    <td colSpan={2} />
                    <FieldInput inTable id='108' />
                    <FieldInput inTable id='109' />
                    <FieldInput inTable id='110' />
                  </tr>

                  <tr>
                    <td colSpan={2} />
                    <td colSpan={4}>
                      <Line orientation='horizontal' />
                    </td>
                  </tr>
                </>
              </SlideCard>
            </td>
          </tr>

          <tr>
            <td colSpan={2} />
            <FormLabel atBottom colSpan={4}>
              Rentas liquida gravable (Cédula general o renta presuntiva, de pensiones y de dividendos y
              participaciones, art. 241 E.T.)
            </FormLabel>
          </tr>
          <tr>
            <td colSpan={2} />
            <FieldInput inTable colSpan={4} id='111' />
          </tr>

          <tr>
            <td colSpan={6} className='empty-row' />
          </tr>

          <tr>
            <td colSpan={2}>
              <Switch
                name='showGananciasOcasionales'
                value={showGananciasOcasionales}
                setValue={value => setShowGananciasOcasionales(value)}
                style={{ marginLeft: 'auto' }}
              />
            </td>
            <FormLabel atBottom className='form-section-title' colSpan={4}>
              Ganancias ocasionales
            </FormLabel>
          </tr>

          <tr>
            <td colSpan={2} />
            <td colSpan={4}>
              <SlideCard isOpen={showGananciasOcasionales}>
                <>
                  <tr>
                    <td colSpan={2} />
                    <td colSpan={4} style={{ padding: '1em 0' }}>
                      <Typography variant='label' as='p'>
                        Los ingresos a reportar son la venta de activos fijos, indemnizaciones de seguros de vida,
                        ganancias por loterias, legados, donaciones, porciónes conyugales y valores recibidos por
                        herencias.
                      </Typography>
                    </td>
                  </tr>

                  <tr>
                    <td colSpan={2} />
                    <FormLabel atBottom>Ingresos por ganancias ocasionales en el país y del exterior</FormLabel>
                    <FormLabel atBottom>Costos por ganancias ocacionales</FormLabel>
                    <FormLabel atBottom>Ganancias ocasionales no gravadas y exentas</FormLabel>
                    <FormLabel atBottom>Ganancias ocasionales gravables</FormLabel>
                  </tr>

                  <tr>
                    <td colSpan={2} />
                    <FieldInput inTable id='112' />
                    <FieldInput inTable id='113' />
                    <FieldInput inTable id='114' />
                    <FieldInput inTable id='115' />
                  </tr>
                </>
              </SlideCard>
            </td>
          </tr>

          <tr>
            <td colSpan={6} className='empty-row' />
          </tr>

          <tr>
            <td colSpan={2} />
            <FormLabel atBottom className='form-section-title' colSpan={4}>
              Impuesto sobre las rentas liquidas y gravables
            </FormLabel>
          </tr>

          <tr>
            <td colSpan={2} />
            <FormLabel atBottom>Cédula general, de pensiones y de dividendos y participaciones</FormLabel>
            <FormLabel atBottom>Renta presuntiva, de pensiones y de dividendos y participaciones</FormLabel>
            <FormLabel atBottom>
              Por dividendos y participaciones año 2017 y siguientes, 2a subcédula (Art 240 E.T)
            </FormLabel>
            <FormLabel atBottom>Por dividendos y participaciones año 2016</FormLabel>
          </tr>

          <tr>
            <td colSpan={2} />
            <FieldInput
              inTable
              id='116'
              formula={showDescriptionTable === '116' ? '(Click para ocultar)' : '(Click para ver calculo)'}
              action={() => setShowDescriptionTable(prev => (prev === '116' ? '' : '116'))}
            />
            <FieldInput
              inTable
              id='117'
              formula={showDescriptionTable === '117' ? '(Click para ocultar)' : '(Click para ver calculo)'}
              action={() => setShowDescriptionTable(prev => (prev === '117' ? '' : '117'))}
            />
            <FieldInput inTable id='118' />
            <FieldInput
              inTable
              id='119'
              formula={showDescriptionTable === '119' ? '(Click para ocultar)' : '(Click para ver calculo)'}
              action={() => setShowDescriptionTable(prev => (prev === '119' ? '' : '119'))}
            />
          </tr>

          {showDescriptionTable === '116' && (
            <tr>
              <td colSpan={2} />
              <td colSpan={4}>
                <MarginTable id='111' value={f111} uvtValue={valueToUVT(f111)} marginTable={f116MarginTable}>
                  <Typography variant='label'>Si la celda 97 es mayor que la 98</Typography>
                  <section className='columns'>
                    <FieldInput id='97' />
                    <Typography variant='label'>&gt;</Typography>
                    <FieldInput id='98' />
                  </section>
                </MarginTable>
              </td>
            </tr>
          )}

          {showDescriptionTable === '117' && (
            <tr>
              <td colSpan={2} />
              <td colSpan={4}>
                <MarginTable id='111' value={f111} uvtValue={valueToUVT(f111)} marginTable={f117MarginTable}>
                  <Typography variant='label'>Si la celda 98 es mayor que la 97</Typography>
                  <section className='columns'>
                    <FieldInput id='98' />
                    <Typography variant='label'>&gt;</Typography>
                    <FieldInput id='97' />
                  </section>
                </MarginTable>
              </td>
            </tr>
          )}

          {showDescriptionTable === '119' && (
            <tr>
              <td colSpan={2} />
              <td colSpan={4}>
                <MarginTable id='106' value={f106} uvtValue={valueToUVT(f106)} marginTable={f119MarginTable} />
              </td>
            </tr>
          )}

          <tr>
            <td colSpan={2} />
            <FormLabel atBottom>Por dividendos y participaciones recibidas del exterior</FormLabel>
            <FormLabel atBottom>Total impuesto sobre las rentas líquidas gravables</FormLabel>
          </tr>

          <tr>
            <td colSpan={2} />
            <FieldInput inTable id='120' />
            <FieldInput inTable id='121' />
          </tr>

          <tr>
            <td colSpan={6} className='empty-row' />
          </tr>

          <tr>
            <td colSpan={2} />
            <FormLabel atBottom className='form-section-title' colSpan={4}>
              Descuentos tributarios
            </FormLabel>
          </tr>

          <tr>
            <td colSpan={2} />
            <FormLabel atBottom>Impuestos pagados en el exterior</FormLabel>
            <FormLabel atBottom>Donaciones</FormLabel>
            <FormLabel atBottom>Dividendos, participaciones y otros</FormLabel>
            <FormLabel atBottom>Total descuentos tributarios</FormLabel>
          </tr>

          <tr>
            <td colSpan={2} />
            <FieldInput inTable id='122' />
            <FieldInput inTable id='123' />
            <FieldInput inTable id='124' />
            <FieldInput inTable id='125' />
          </tr>

          <tr>
            <td colSpan={6} className='empty-row' />
          </tr>

          <tr>
            <td colSpan={2} />
            <FormLabel atBottom className='form-section-title' colSpan={4}>
              Liquidación
            </FormLabel>
          </tr>

          <tr>
            <td colSpan={2} />
            <FormLabel atBottom>Impuesto neto de renta</FormLabel>
            <FormLabel atBottom>Impuesto de ganancias ocasionales</FormLabel>
            <FormLabel atBottom>Descuento por impuestos pagados en el exterior por ganancias ocacionales</FormLabel>
            <FormLabel atBottom>Total impuesto a cargo</FormLabel>
          </tr>

          <tr>
            <td colSpan={2} />
            <FieldInput inTable id='126' />
            <FieldInput inTable id='127' />
            <FieldInput inTable id='128' />
            <FieldInput inTable id='129' />
          </tr>

          <tr>
            <td colSpan={2} />
            <FormLabel atBottom>Anticipo renta liquida año grabable anterior</FormLabel>
            <FormLabel atBottom>Saldo a favor del año gravable anterior</FormLabel>
            <FormLabel atBottom>Retenciones año gravable a declarar</FormLabel>
            <FormLabel atBottom>Anticipo de renta para el año gravable siguiente</FormLabel>
          </tr>

          <tr>
            <td colSpan={2} />
            <FieldInput inTable id='130' />
            <FieldInput inTable id='131' />
            <FieldInput inTable id='132' onClick={() => setAsideID('132')} />
            <FieldInput
              inTable
              id='133'
              formula={showDescriptionTable === '133' ? '(Click para ocultar)' : '(Click para ver calculo)'}
              action={() => setShowDescriptionTable(prev => (prev === '133' ? '' : '133'))}
            />
          </tr>

          {showDescriptionTable === '133' && (
            <tr>
              <td colSpan={2} />
              <td colSpan={4}>
                <Table133 />
              </td>
            </tr>
          )}

          <tr>
            <td colSpan={6} className='empty-row' />
          </tr>

          <tr>
            <td colSpan={2} />
            <FormLabel atBottom className='form-section-title' colSpan={4}>
              Pagos
            </FormLabel>
          </tr>

          <tr>
            <td colSpan={2} />
            <FormLabel atBottom>Saldo a pagar por impuesto</FormLabel>
            <FormLabel atBottom>Sanciones</FormLabel>
            <FormLabel atBottom>Total saldo a pagar</FormLabel>
            <FormLabel atBottom>Total saldo a favor</FormLabel>
          </tr>

          <tr>
            <td colSpan={2} />
            <FieldInput inTable id='134' />
            <FieldInput inTable id='135' />
            <FieldInput inTable id='136' />
            <FieldInput inTable id='137' />
          </tr>

          <tr>
            <td colSpan={2} />
            <FormLabel atBottom>Número de dependientes económicos</FormLabel>
            <FormLabel atBottom>Adición por dependientes a la casilla 92</FormLabel>
          </tr>

          <tr>
            <td colSpan={2} />
            <FieldInput inTable id='138' />
            <FieldInput inTable id='139' />
          </tr>
        </tbody>
      </FormTable>
      <AsideModal isOpen={asideID !== ''} onClose={() => setAsideID('')}>
        <FieldInputDetails id={asideID} />
      </AsideModal>
    </Form210Style>
  );
};
