import { Typography } from '@juanmsl/ui';

import { Table133Style } from './table-133.style';

import { useForm210 } from '@contexts';
import { formatNumber, getPrevPaymentYearPercentage } from '@helpers';

export const Table133 = () => {
  const { f126, declarationNumber, f132, prevDeclarationValue } = useForm210();

  return (
    <Table133Style>
      <Typography withoutPadding variant='label'>
        Para calcular el anticipo hay que calcular basado en 2 metodos y escoger el menor
      </Typography>
      <Typography withoutPadding variant='label'>
        Según el año de la respectiva declaración el porcentaje corresponderá al valor descrito aqui
      </Typography>
      <Typography withoutPadding variant='label'>
        25% - 1er año
      </Typography>
      <Typography withoutPadding variant='label'>
        50% - 2do año
      </Typography>
      <Typography withoutPadding variant='label'>
        75% - 3er año en adelante
      </Typography>

      <section className='tables-columns'>
        <section>
          <Typography variant='label' weight='bold'>
            Método 1
          </Typography>

          <code>
            <Typography variant='small'>Metodo 1 = 126 * porcentaje - retenciones</Typography>
          </code>

          <table>
            <thead>
              <tr>
                <th>
                  <Typography variant='label'>Anticipo</Typography>
                </th>
                <th>
                  <Typography variant='label'>Cálculo</Typography>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Typography withoutPadding variant='label'>
                    Impuesto Neto de Renta del año actual (126)
                  </Typography>
                </td>
                <td>
                  <Typography withoutPadding variant='label'>
                    {formatNumber(f126, {
                      roundTo: -3,
                      format: 'currency',
                    })}
                  </Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography withoutPadding variant='label'>
                    Año a declarar
                  </Typography>
                </td>
                <td>
                  <Typography withoutPadding variant='label'>
                    {declarationNumber === 4 ? 'Más del 3er año' : `Año # ${declarationNumber}`}
                  </Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography withoutPadding variant='label'>
                    {getPrevPaymentYearPercentage(declarationNumber, 'string')}
                  </Typography>
                </td>
                <td>
                  <Typography withoutPadding variant='label'>
                    {formatNumber(getPrevPaymentYearPercentage(declarationNumber) * f126, {
                      roundTo: -3,
                      format: 'currency',
                    })}
                  </Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography withoutPadding variant='label'>
                    Retenciones
                  </Typography>
                </td>
                <td>
                  <Typography withoutPadding variant='label'>
                    {formatNumber(f132, {
                      roundTo: -3,
                      format: 'currency',
                    })}
                  </Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography withoutPadding variant='label'>
                    TOTAL MÉTODO 1
                  </Typography>
                </td>
                <td>
                  <Typography withoutPadding variant='label'>
                    {formatNumber(getPrevPaymentYearPercentage(declarationNumber) * f126 - f132, {
                      roundTo: -3,
                      format: 'currency',
                    })}
                  </Typography>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <Typography variant='label' weight='bold'>
            Método 2
          </Typography>

          <code>
            <Typography variant='small'>
              Método 2 = Promedio(126 año actual, 126 año anterior) * porcentaje - retenciones
            </Typography>
          </code>

          <table>
            <thead>
              <tr>
                <th>
                  <Typography variant='label'>Anticipo</Typography>
                </th>
                <th>
                  <Typography variant='label'>Cálculo</Typography>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Typography withoutPadding variant='label'>
                    Impuesto Neto de Renta del año actual (126)
                  </Typography>
                </td>
                <td>
                  <Typography withoutPadding variant='label'>
                    {formatNumber(f126, {
                      roundTo: -3,
                      format: 'currency',
                    })}
                  </Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography withoutPadding variant='label'>
                    Impuesto Neto de Renta del año anterior (126)
                  </Typography>
                </td>
                <td>
                  <Typography withoutPadding variant='label'>
                    {formatNumber(prevDeclarationValue, {
                      roundTo: -3,
                      format: 'currency',
                    })}
                  </Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography withoutPadding variant='label'>
                    Promedio
                  </Typography>
                </td>
                <td>
                  <Typography withoutPadding variant='label'>
                    {formatNumber((f126 + prevDeclarationValue) / 2, {
                      roundTo: -3,
                      format: 'currency',
                    })}
                  </Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography withoutPadding variant='label'>
                    Año a declarar
                  </Typography>
                </td>
                <td>
                  <Typography withoutPadding variant='label'>
                    {declarationNumber === 4 ? 'Más del 3er año' : `Año # ${declarationNumber}`}
                  </Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography withoutPadding variant='label'>
                    {getPrevPaymentYearPercentage(declarationNumber, 'string')}
                  </Typography>
                </td>
                <td>
                  <Typography withoutPadding variant='label'>
                    {formatNumber(
                      (getPrevPaymentYearPercentage(declarationNumber) * (f126 + prevDeclarationValue)) / 2,
                      {
                        roundTo: -3,
                        format: 'currency',
                      },
                    )}
                  </Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography withoutPadding variant='label'>
                    Retenciones
                  </Typography>
                </td>
                <td>
                  <Typography withoutPadding variant='label'>
                    {formatNumber(f132)}
                  </Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography withoutPadding variant='label'>
                    TOTAL MÉTODO 2
                  </Typography>
                </td>
                <td>
                  <Typography withoutPadding variant='label'>
                    {formatNumber(
                      getPrevPaymentYearPercentage(declarationNumber) * ((f126 + prevDeclarationValue) / 2) - f132,
                      { roundTo: -3, format: 'currency' },
                    )}
                  </Typography>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </section>
    </Table133Style>
  );
};
