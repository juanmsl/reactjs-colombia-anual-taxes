import { Typography } from '@juanmsl/ui';
import React from 'react';

import { FormLabel } from '../form-label';

import { MarginTableStyle } from './margin-table.style';

import { Label } from '@components/label';
import { useForm210 } from '@contexts';
import { MarginTableEntity } from '@core/constants';
import { formatNumber } from '@helpers';

type MarginTableProps = {
  id: `${number}`;
  value: number;
  uvtValue: number;
  marginTable: MarginTableEntity;
  children?: React.ReactNode;
};

export const MarginTable = ({ id, marginTable, value, uvtValue, children }: MarginTableProps) => {
  const { uvt, tm, imp } = marginTable.find(({ uvt }) => uvtValue >= uvt);
  const { valueFromUVT } = useForm210();

  return (
    <MarginTableStyle>
      {children}
      <Typography variant='label'>Se aplica la tarifa de la siguiente tabla a la celda {id} en UVT</Typography>
      <section className='columns'>
        <section>
          <Label>{id} en COP</Label>
          <Typography>{formatNumber(value, { format: 'currency' })}</Typography>
        </section>
        <section>
          <Label>{id} en UVT</Label>
          <Typography>{formatNumber(uvtValue)}</Typography>
        </section>
      </section>
      <section className='columns'>
        <table className='margin-table'>
          <tbody>
            <tr>
              <FormLabel>UVT (min)</FormLabel>
              <FormLabel>{id} en UVT</FormLabel>
              <FormLabel>UVT (max)</FormLabel>
              <FormLabel>Tarifa Marginal</FormLabel>
              <FormLabel>+ IMP</FormLabel>
            </tr>
            {marginTable.toReversed().map(({ uvt, maxUvt, tm, imp }) => (
              <tr key={uvt} className={uvt <= uvtValue && uvtValue < maxUvt ? 'selected-row' : ''}>
                <td>
                  <Typography noPadding variant='label'>
                    {uvt}
                  </Typography>
                </td>
                <td>
                  <Typography noPadding variant='label'>
                    &lt; {uvtValue} &#x2264;
                  </Typography>
                </td>
                <td>
                  <Typography noPadding variant='label'>
                    {maxUvt}
                  </Typography>
                </td>
                <td>
                  <Typography noPadding variant='label'>
                    {Math.round(tm * 100)}%
                  </Typography>
                </td>
                <td>
                  <Typography noPadding variant='label'>
                    {imp}
                  </Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ol>
          <li>
            <Typography variant='label'>Se utiliza la siguiente formula para calcular el valor</Typography>
            <code>([{id} en UVT] - uvtMin) * tm + imp</code>
          </li>
          <li>
            <Typography variant='label'>
              Con los datos de la tabla dependiendo del rango UVT de la celda {id}
            </Typography>
            <code>
              ({Math.round(uvtValue)} - {uvt}) * {Math.round(tm * 100)}% + {imp}
            </code>
          </li>
          <li>
            <Typography variant='label'>Obtenemos el valor en UVT final</Typography>
            <code>
              {formatNumber((Math.round(uvtValue) - uvt) * tm + imp)} <Typography variant='small'>UVT</Typography>
            </code>
          </li>
          <li>
            <Typography variant='label'>Convertimos en Pesos Colombianos</Typography>
            <br />
            <code>
              {formatNumber(valueFromUVT((Math.round(uvtValue) - uvt) * tm + imp), { format: 'currency' })}{' '}
              <Typography variant='small'>COP</Typography>
            </code>
          </li>
        </ol>
      </section>
    </MarginTableStyle>
  );
};
