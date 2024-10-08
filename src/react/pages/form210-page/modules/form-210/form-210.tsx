import { AsideModal, Line, Select, Typography, Switch } from '@juanmsl/ui';
import { useState } from 'react';

import { FieldInputDetails, FormField, FormLabel, MarginTable, Table133 } from './components';
import { Form210Style, FormTable } from './form-210.style';

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
  const { year, declarationNumber, f106, f111, prevDeclarationValue, valueToUVT, setData } = useForm210();

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
            {declarationNumber > 1 && (
              <FormLabel colSpan={2} atBottom>
                Impuesto neto de renta año anterior (Celda 127 del {year - 1})
              </FormLabel>
            )}
            <FormLabel colSpan={declarationNumber > 1 ? 1 : 2} atBottom>
              Uno por ciento (1%) de compras con fáctura electrónica
            </FormLabel>
          </tr>

          <tr>
            <td>
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
            </td>
            {declarationNumber > 1 && (
              <td colSpan={2}>
                <FormatInput
                  id='prevDeclarationValue'
                  value={prevDeclarationValue}
                  setValue={prevDeclarationValue => setData(prev => ({ ...prev, prevDeclarationValue }))}
                  roundTo={0}
                  variant='content-border'
                  disabled={declarationNumber === 1}
                />
              </td>
            )}
            <FormField id='28' colSpan={declarationNumber > 1 ? 1 : 2} />
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
            <FormField id='29' onClick={() => setAsideID('29')} />
            <FormField id='30' onClick={() => setAsideID('30')} />
            <FormField id='31' />
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
            <FormField id='34' />
            <FormField id='46' />
            <FormField id='61' />
            <FormField id='78' />
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
            <FormField id='35' onClick={() => setAsideID('35')} />
            <FormField id='47' onClick={() => setAsideID('47')} />
            <FormField id='63' onClick={() => setAsideID('63')} />
            <FormField id='80' onClick={() => setAsideID('80')} />
          </tr>
          <tr>
            <FormLabel>Otras rentas exentas</FormLabel>
            <FormField id='36' onClick={() => setAsideID('36')} />
            <FormField id='48' onClick={() => setAsideID('48')} />
            <FormField id='64' onClick={() => setAsideID('64')} />
            <FormField id='81' onClick={() => setAsideID('81')} />
          </tr>
          <tr>
            <FormLabel>Total rentas exentas</FormLabel>
            <FormField id='37' />
            <FormField id='49' />
            <FormField id='65' />
            <FormField id='82' />
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
            <FormField id='38' onClick={() => setAsideID('38')} />
            <FormField id='50' onClick={() => setAsideID('50')} />
            <FormField id='66' onClick={() => setAsideID('66')} />
            <FormField id='83' onClick={() => setAsideID('83')} />
          </tr>
          <tr>
            <FormLabel>Otras deducciones imputables</FormLabel>
            <FormField id='39' onClick={() => setAsideID('39')} />
            <FormField id='51' onClick={() => setAsideID('51')} />
            <FormField id='67' onClick={() => setAsideID('67')} />
            <FormField id='84' onClick={() => setAsideID('84')} />
          </tr>
          <tr>
            <FormLabel>Total deducciones imputables</FormLabel>
            <FormField id='40' />
            <FormField id='52' />
            <FormField id='68' />
            <FormField id='85' />
          </tr>

          <tr>
            <td colSpan={6}>
              <Line orientation='horizontal' />
            </td>
          </tr>

          <tr>
            <FormLabel colSpan={2}>Rentas exentas y/o deducciones imputables</FormLabel>
            <FormField id='41' />
            <FormField id='53' />
            <FormField id='69' />
            <FormField id='86' />
          </tr>
          <tr>
            <FormLabel colSpan={2}>Renta líquida ordinária del ejercicio</FormLabel>
            <td colSpan={1} className='empty'></td>
            <FormField id='54' />
            <FormField id='70' />
            <FormField id='87' />
          </tr>
          <tr>
            <FormLabel colSpan={2}>Pérdida líquida del ejercicio</FormLabel>
            <td colSpan={1} className='empty'></td>
            <FormField id='55' />
            <FormField id='71' />
            <FormField id='88' />
          </tr>
          <tr>
            <FormLabel colSpan={2}>Compensaciones por perdidas</FormLabel>
            <td colSpan={1} className='empty'></td>
            <FormField id='56' />
            <FormField id='72' />
            <FormField id='89' />
          </tr>
          <tr>
            <FormLabel colSpan={2}>Renta líquida ordinaria</FormLabel>
            <FormField id='42' />
            <FormField id='57' />
            <FormField id='73' />
            <FormField id='90' />
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
            <FormField id='91' />
            <FormField id='92' />
            <FormField id='93' />
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
            <FormField id='97' />
            <FormField id='98' />
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
                <FormField id='101' />
                <FormField id='102' />
              </tr>

              <tr>
                <td colSpan={2} />
                <FormLabel atBottom>Total impuesto sobre rentas liquidas</FormLabel>
              </tr>

              <tr>
                <td colSpan={2} />
                <FormField id='103' />
              </tr>
            </>
          )}

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
                <FormField id='106' />
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
            <FormField colSpan={4} id='111' />
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
                <FormField id='115' />
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
              formula={showDescriptionTable === '116' ? '(Click para ocultar)' : '(Click para ver calculo)'}
              action={() => setShowDescriptionTable(prev => (prev === '116' ? '' : '116'))}
            />
            <FormField
              id='117'
              formula={showDescriptionTable === '117' ? '(Click para ocultar)' : '(Click para ver calculo)'}
              action={() => setShowDescriptionTable(prev => (prev === '117' ? '' : '117'))}
            />
            <FormField id='118' />
            <FormField
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
            <FormField id='120' />
            <FormField id='121' />
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
            <FormField id='125' />
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
            <FormField id='126' />
            <FormField id='127' />
            <FormField id='128' />
            <FormField id='129' />
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
            <FormField id='134' />
            <FormField id='135' />
            <FormField id='136' />
            <FormField id='137' />
          </tr>

          <tr>
            <td colSpan={2} />
            <FormLabel atBottom>Número de dependientes económicos</FormLabel>
            <FormLabel atBottom>Adición por dependientes a la casilla 92</FormLabel>
          </tr>

          <tr>
            <td colSpan={2} />
            <FormField id='138' />
            <FormField id='139' />
          </tr>
        </tbody>
      </FormTable>
      <AsideModal isOpen={asideID !== ''} onClose={() => setAsideID('')}>
        <FieldInputDetails id={asideID} />
      </AsideModal>
    </Form210Style>
  );
};
