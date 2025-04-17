import { useCallback } from 'react';

import { SectionDataTable } from '@components/section-data-table';
import { useForm210, useForm210FieldParams, Table29 } from '@contexts';
import { Form210DataItem } from '@core/constants';

export const Patrimonio = () => {
  const { setData } = useForm210();
  const { data: _29 } = useForm210FieldParams('29');

  const updateData = useCallback(
    (value: Array<Form210DataItem>, key: keyof Table29) => {
      setData(prev => ({
        ...prev,
        29: {
          ...prev['29'],
          [key]: value,
        },
      }));
    },
    [setData],
  );

  return (
    <>
      <SectionDataTable
        onChange={value => updateData(value, 'cuentasBancarias')}
        defaultData={_29.cuentasBancarias}
        title='Cuentas bancarias'
      />
      <SectionDataTable
        onChange={value => updateData(value, 'inversiones')}
        defaultData={_29.inversiones}
        title='Inversiones'
      />
      <SectionDataTable
        onChange={value => updateData(value, 'cuentasPorCobrar')}
        defaultData={_29.cuentasPorCobrar}
        title='Cuentas por cobrar'
      />
      <SectionDataTable
        onChange={value => updateData(value, 'activosFijos')}
        defaultData={_29.activosFijos}
        title='Activos fijos'
      />
      <SectionDataTable
        onChange={value => updateData(value, 'bienesInmuebles')}
        defaultData={_29.bienesInmuebles}
        title='Bienes inmuebles'
      />
      <SectionDataTable
        onChange={value => updateData(value, 'vehiculos')}
        defaultData={_29.vehiculos}
        title='Vehiculos'
      />
      <SectionDataTable onChange={value => updateData(value, 'otros')} defaultData={_29.otros} title='Otros' />
    </>
  );
};
