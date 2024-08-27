import { Line, Select, Typography, ToggleButton } from '@juanmsl/ui';
import { useEffect, useState } from 'react';

import { FieldInputDetails, FormField, FormLabel, MarginTable, Table133 } from './components';
import { Form210Style, FormTable } from './form-210.style';

import { AsideModal } from '@components/aside-modal';
import { FieldInput } from '@components/field-input';
import { FormatInput } from '@components/format-input';
import { useForm210 } from '@contexts';
import {
  DeclarationNumberOption,
  DeclarationNumberOptions,
  f116MarginTable,
  f117MarginTable,
  f119MarginTable,
} from '@core/constants';

export const Form210 = () => {
  const {
    declarationNumber,
    f34,
    f46,
    f61,
    f62,
    f70,
    f78,
    f79,
    f87,
    f106,
    f111,
    prevDeclarationValue,
    valueToUVT,
    setData,
  } = useForm210();

  const [showDescriptionTable, setShowDescriptionTable] = useState<`${number | ''}`>('');
  const [asideID, setAsideID] = useState<`${number | ''}`>('');
  const [showCedulaDePensiones, setShowCedulaDePensiones] = useState(false);
  const [showCedulaDeDividendos, setShowCedulaDeDividendos] = useState(false);
  const [showGananciasOcasionales, setShowGananciasOcasionales] = useState(false);

  useEffect(() => {
    if (declarationNumber === 1) {
      setData(prev => ({ ...prev, prevDeclarationValue: 0 }));
    }
  }, [declarationNumber, setData]);

  return (
    <Form210Style>
      <FormTable>
        <tbody>
          <tr>
            <td colSpan={2} />
            <FormLabel className='form-section-title' colSpan={4}>
              Inicio
            </FormLabel>
          </tr>

          <tr>
            <td colSpan={2} />
            <FormLabel atBottom>Estoy declarando por</FormLabel>
            <FormLabel colSpan={2} atBottom>
              Impuesto neto de renta año anterior (Celda 127 del 2022)
            </FormLabel>
          </tr>

          <tr>
            <td colSpan={2} />
            <td>
              <Select<DeclarationNumberOption>
                options={DeclarationNumberOptions}
                renderOption={item => item.label}
                name='declarationNumber'
                value={DeclarationNumberOptions.find(item => item.value === declarationNumber)}
                setValue={value =>
                  setData(prev => ({
                    ...prev,
                    declarationNumber: value.value,
                  }))
                }
              />
            </td>
            <td colSpan={2}>
              <FormatInput
                id='prevDeclarationValue'
                value={prevDeclarationValue}
                setValue={prevDeclarationValue => setData(prev => ({ ...prev, prevDeclarationValue }))}
                roundTo={0}
                disabled={declarationNumber === 1}
              />
            </td>
          </tr>

          <tr>
            <td colSpan={6} className='empty-row' />
          </tr>

          <tr>
            <td colSpan={2} />
            <FormLabel className='form-section-title' colSpan={4}>
              Patrimonio
            </FormLabel>
          </tr>
          <tr>
            <td colSpan={2} />
            <FormLabel atBottom>Uno por ciento (1%) de compras con fáctura electrónica</FormLabel>
            <FormLabel atBottom>Total patrimonio bruto</FormLabel>
            <FormLabel atBottom>Deudas</FormLabel>
            <FormLabel atBottom>Total patrimonio liquido</FormLabel>
          </tr>
          <tr>
            <td colSpan={2} />
            <FormField id='28' />
            <FormField id='29' onClick={() => setAsideID('29')} />
            <FormField id='30' onClick={() => setAsideID('30')} />
            <FormField id='31' readOnly formula='29 - 30' />
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
            <FormField id='32' onClick={() => setAsideID('32')} />
            <FormField id='43' onClick={() => setAsideID('43')} />
            <FormField id='58' onClick={() => setAsideID('58')} />
            <FormField id='74' onClick={() => setAsideID('74')} />
          </tr>
          <tr>
            <FormLabel colSpan={2}>Devoluciones, rebajas y dctos.</FormLabel>
            <td colSpan={3} className='empty'></td>
            <FormField id='75' onClick={() => setAsideID('75')} />
          </tr>
          <tr>
            <FormLabel colSpan={2}>Ingrésos no constitutivos de renta</FormLabel>
            <FormField id='33' onClick={() => setAsideID('33')} />
            <FormField id='44' onClick={() => setAsideID('44')} />
            <FormField id='59' onClick={() => setAsideID('59')} />
            <FormField id='76' onClick={() => setAsideID('76')} />
          </tr>
          <tr>
            <FormLabel colSpan={2}>Costos y deducciones procedentes</FormLabel>
            <td colSpan={1} className='empty'></td>
            <FormField id='45' onClick={() => setAsideID('45')} />
            <FormField id='60' onClick={() => setAsideID('60')} />
            <FormField id='77' onClick={() => setAsideID('77')} />
          </tr>
          <tr>
            <FormLabel colSpan={2}>Renta líquida</FormLabel>
            <FormField id='34' readOnly formula='32 - 33' />
            <FormField id='46' readOnly formula='43 - 44 - 45' />
            <FormField id='61' readOnly formula='58 - 59 - 60' />
            <FormField id='78' readOnly formula='74 - 75 - 76 - 77' />
          </tr>
          <tr>
            <FormLabel colSpan={2}>Rentas líquidas pasivas - ECE</FormLabel>
            <td colSpan={2} className='empty'></td>
            <FormField id='62' onClick={() => setAsideID('62')} />
            <FormField id='79' onClick={() => setAsideID('79')} />
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
            <FormField id='35' onClick={() => setAsideID('35')} disabled={f34 === 0} />
            <FormField id='47' onClick={() => setAsideID('47')} disabled={f46 === 0} />
            <FormField id='63' onClick={() => setAsideID('63')} disabled={f61 + f62 === 0} />
            <FormField id='80' onClick={() => setAsideID('80')} disabled={f78 + f79 === 0} />
          </tr>
          <tr>
            <FormLabel>Otras rentas exentas</FormLabel>
            <FormField id='36' onClick={() => setAsideID('36')} disabled={f34 === 0} />
            <FormField id='48' onClick={() => setAsideID('48')} disabled={f46 === 0} />
            <FormField id='64' onClick={() => setAsideID('64')} disabled={f61 + f62 === 0} />
            <FormField id='81' onClick={() => setAsideID('81')} disabled={f78 + f79 === 0} />
          </tr>
          <tr>
            <FormLabel>Total rentas exentas</FormLabel>
            <FormField id='37' formula='35 + 36' readOnly />
            <FormField id='49' formula='47 + 48' readOnly />
            <FormField id='65' formula='63 + 64' readOnly />
            <FormField id='82' formula='80 + 81' readOnly />
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
            <FormField id='38' onClick={() => setAsideID('38')} disabled={f34 === 0} />
            <FormField id='50' onClick={() => setAsideID('50')} disabled={f46 === 0} />
            <FormField id='66' onClick={() => setAsideID('66')} disabled={f61 + f62 === 0} />
            <FormField id='83' onClick={() => setAsideID('83')} disabled={f78 + f79 === 0} />
          </tr>
          <tr>
            <FormLabel>Otras deducciones imputables</FormLabel>
            <FormField id='39' onClick={() => setAsideID('39')} disabled={f34 === 0} />
            <FormField id='51' onClick={() => setAsideID('51')} disabled={f46 === 0} />
            <FormField id='67' onClick={() => setAsideID('67')} disabled={f61 + f62 === 0} />
            <FormField id='84' onClick={() => setAsideID('84')} disabled={f78 + f79 === 0} />
          </tr>
          <tr>
            <FormLabel>Total deducciones imputables</FormLabel>
            <FormField id='40' readOnly formula='38 + 39' />
            <FormField id='52' readOnly formula='50 + 51' />
            <FormField id='68' readOnly formula='66 + 67' />
            <FormField id='85' readOnly formula='83 + 84' />
          </tr>

          <tr>
            <td colSpan={6}>
              <Line orientation='horizontal' />
            </td>
          </tr>

          <tr>
            <FormLabel colSpan={2}>Rentas exentas y/o deducibles imputables</FormLabel>
            <FormField id='41' readOnly formula='37 + 40' />
            <FormField id='53' readOnly formula='49 + 52' />
            <FormField id='69' readOnly formula='65 + 68' />
            <FormField id='86' readOnly formula='82 + 85' />
          </tr>
          <tr>
            <FormLabel colSpan={2}>Renta líquida ordinária del ejercicio</FormLabel>
            <td colSpan={1} className='empty'></td>
            <FormField id='54' readOnly formula='46 - 53' />
            <FormField id='70' readOnly formula='61 + 62 - 69' />
            <FormField id='87' readOnly formula='78 + 79 - 86' />
          </tr>
          <tr>
            <FormLabel colSpan={2}>Pérdida líquida del ejercicio</FormLabel>
            <td colSpan={1} className='empty'></td>
            <FormField id='55' readOnly formula='44 + 45 - 43' />
            <FormField id='71' readOnly formula='59 + 60 - 58 - 62' />
            <FormField id='88' readOnly formula='75 + 76 + 77 - 74 - 79' />
          </tr>
          <tr>
            <FormLabel colSpan={2}>Compensaciones por perdidas</FormLabel>
            <td colSpan={1} className='empty'></td>
            <FormField id='56' />
            <FormField id='72' disabled={f70 === 0} />
            <FormField id='89' disabled={f87 === 0} />
          </tr>
          <tr>
            <FormLabel colSpan={2}>Renta líquida ordinaria</FormLabel>
            <FormField id='42' readOnly formula='34 - 41' />
            <FormField id='57' readOnly formula='54 - 56' />
            <FormField id='73' readOnly formula='70 - 72' />
            <FormField id='90' readOnly formula='87 - 89' />
          </tr>

          <tr>
            <td colSpan={6}>
              <Line orientation='horizontal' />
            </td>
          </tr>

          <tr>
            <td colSpan={2} />
            <FormLabel atBottom>Renta liquida</FormLabel>
            <FormLabel atBottom>Rentas exentas y deducciones impitables</FormLabel>
            <FormLabel atBottom>Renta liquida ordinaria</FormLabel>
            <FormLabel atBottom>Compensaciones por pérdidas año gravable 2018 y anteriores</FormLabel>
          </tr>
          <tr>
            <td colSpan={2} />
            <FormField id='91' readOnly formula='41 + 42 + 53 + 57 + 69 + 73 + 86 + 90' />
            <FormField id='92' readOnly formula='28 + 41 + 53 + 69 + 86 + 139' />
            <FormField id='93' readOnly formula='91 - 92' />
            <FormField id='94' />
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
            <FormField id='95' />
            <FormField id='96' />
            <FormField id='97' readOnly formula='93 + 96 - 94 - 95' />
            <FormField id='98' />
          </tr>

          <tr>
            <td colSpan={6} className='empty-row' />
          </tr>

          <tr>
            <td colSpan={2}>
              <ToggleButton
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

          {showCedulaDePensiones && (
            <>
              <tr>
                <td colSpan={2} />
                <td colSpan={4} style={{ padding: '1em 0' }}>
                  <Typography variant='label'>
                    Los ingresos como las pensiones de jubilación, invalidez, vejez, de sobrevivientes y sobre riesgos
                    laborales, así como aquellas provenientes de indemnizaciones sustitutivas de las pensiones o las
                    devoluciones de saldos de ahorro pensional.
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
                <FormField id='99' />
                <FormField id='100' />
                <FormField id='101' readOnly formula='99 - 100' />
                <FormField id='102' />
              </tr>

              <tr>
                <td colSpan={2} />
                <FormLabel atBottom>Total impuesto sobre rentas liquidas</FormLabel>
              </tr>

              <tr>
                <td colSpan={2} />
                <FormField id='103' readOnly formula='101 - 102' />
              </tr>
            </>
          )}

          <tr>
            <td colSpan={6} className='empty-row' />
          </tr>

          <tr>
            <td colSpan={2}>
              <ToggleButton
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

          {showCedulaDeDividendos && (
            <>
              <tr>
                <td colSpan={2} />
                <td colSpan={4} style={{ padding: '1em 0' }}>
                  <section>
                    <Typography variant='label' as='p'>
                      Son ingresos de esta cédula los recibidos por concepto de dividendos y/o participaciones, y
                      constituyen renta gravable en cabeza de los socios, accionistas, comuneros, asociados,
                      suscriptores y similares, que sean personas naturales residentes y sucesiones ilíquidas de
                      causantes que al momento de su muerte eran residentes, recibidos de distribuciones provenientes de
                      sociedades y entidades nacionales, y de sociedades y entidades extranjeras.
                    </Typography>
                    <Typography variant='label' as='p'>
                      Deberá incluir el valor total de los dividendos y/o participaciones que le hayan sido pagados o
                      abonados en cuenta en calidad de exigibles, durante el año gravable que se está declarando y
                      siguientes, según los valores certificados por la sociedad anónima, limitada o asimiladas, según
                      el caso.
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
                <FormField id='104' />
                <FormField id='105' />
                <FormField id='106' readOnly formula='104 - 105' />
                <FormField id='107' />
              </tr>

              <tr>
                <td colSpan={2} />
                <FormLabel atBottom>2a Subcedula año 2017 y siguientes paragrafo 2 art 49 del E.T.</FormLabel>
                <FormLabel atBottom>Dividendos y participaciones recibidas del exterior</FormLabel>
                <FormLabel atBottom>Rentas exentas de la casilla 109</FormLabel>
              </tr>
              <tr>
                <td colSpan={2} />
                <FormField id='108' />
                <FormField id='109' />
                <FormField id='110' />
              </tr>

              <tr>
                <td colSpan={2} />
                <td colSpan={4}>
                  <Line orientation='horizontal' />
                </td>
              </tr>
            </>
          )}

          <tr>
            <td colSpan={2} />
            <FormLabel atBottom colSpan={4}>
              Rentas liquida gravable (Cédula general o renta presuntiva, de pensiones y de dividendos y
              participaciones, art. 241 E.T.)
            </FormLabel>
          </tr>
          <tr>
            <td colSpan={2} />
            <FormField colSpan={4} id='111' readOnly formula='MAX(97, 98) + 103 + 107 + 108 - 118' />
          </tr>

          <tr>
            <td colSpan={6} className='empty-row' />
          </tr>

          <tr>
            <td colSpan={2}>
              <ToggleButton
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

          {showGananciasOcasionales && (
            <>
              <tr>
                <td colSpan={2} />
                <td colSpan={4} style={{ padding: '1em 0' }}>
                  <Typography variant='label' as='p'>
                    Los ingresos a reportar son la venta de activos fijos, indemnizaciones de seguros de vida, ganancias
                    por loterias, legados, donaciones, porciónes conyugales y valores recibidos por herencias.
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
                <FormField id='112' />
                <FormField id='113' />
                <FormField id='114' />
                <FormField id='115' readOnly formula='112 - 113 - 114' />
              </tr>
            </>
          )}

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
            <FormField
              id='116'
              readOnly
              formula={showDescriptionTable === '116' ? '(Click para ocultar)' : '(Click para ver calculo)'}
              action={() => setShowDescriptionTable(prev => (prev === '116' ? '' : '116'))}
            />
            <FormField
              id='117'
              readOnly
              formula={showDescriptionTable === '117' ? '(Click para ocultar)' : '(Click para ver calculo)'}
              action={() => setShowDescriptionTable(prev => (prev === '117' ? '' : '117'))}
            />
            <FormField id='118' readOnly formula='108 * 35%' />
            <FormField
              id='119'
              readOnly
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
                    <FieldInput id='97' readOnly />
                    <Typography variant='label'>&gt;</Typography>
                    <FieldInput id='98' readOnly />
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
                    <FieldInput id='98' readOnly />
                    <Typography variant='label'>&gt;</Typography>
                    <FieldInput id='97' readOnly />
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
            <FormField id='120' readOnly formula='(109 - 110) * 35%' />
            <FormField id='121' readOnly formula='116 + 117 + 118 + 119 + 120' />
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
            <FormField id='122' />
            <FormField id='123' />
            <FormField id='124' />
            <FormField id='125' readOnly formula='122 + 123 + 124' />
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
            <FormField id='126' readOnly formula='121 - 125' />
            <FormField id='127' readOnly formula='115 * 20%' />
            <FormField id='128' />
            <FormField id='129' readOnly formula='126 + 127 - 128' />
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
            <FormField id='130' />
            <FormField id='131' />
            <FormField id='132' onClick={() => setAsideID('132')} />
            <FormField
              id='133'
              readOnly
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
            <FormField id='134' readOnly formula='129 + 133 - 130 - 131 - 132' />
            <FormField id='135' />
            <FormField id='136' readOnly formula='129 + 133 + 135 - 130 - 131 - 132' />
            <FormField id='137' readOnly formula='130 + 131 + 132 - 129 - 133 - 135' />
          </tr>

          <tr>
            <td colSpan={2} />
            <FormLabel atBottom>Número de dependientes económicos</FormLabel>
            <FormLabel atBottom>Adición por dependientes a la casilla 92</FormLabel>
          </tr>

          <tr>
            <td colSpan={2} />
            <FormField id='138' format='number' min={0} max={4} />
            <FormField id='139' readOnly formula='138 * 72UVT' />
          </tr>
        </tbody>
      </FormTable>
      <AsideModal isOpen={asideID !== ''} onClose={() => setAsideID('')}>
        <FieldInputDetails id={asideID} />
      </AsideModal>
    </Form210Style>
  );
};
