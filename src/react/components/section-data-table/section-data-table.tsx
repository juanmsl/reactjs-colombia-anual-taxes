import { Button, Icon, Input, Tooltip, Typography } from '@juanmsl/ui';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { SectionDataTableStyle } from './section-data-table.style';

import { FormatInput } from '@components/format-input';
import { DefaultForm210DataItem, Form210DataItem } from '@core/constants';
import { formatNumber } from '@helpers';

type SectionDataTableProps = {
  defaultData: Array<Form210DataItem>;
  onChange: (value: Array<Form210DataItem>) => void;
  children?: React.ReactNode;
  title?: string;
};

export const SectionDataTable = ({ defaultData, onChange, children, title }: SectionDataTableProps) => {
  const [data, setData] = useState<Array<Form210DataItem>>(() => {
    if (defaultData && Array.isArray(defaultData)) {
      return defaultData;
    }

    return [];
  });

  useEffect(() => {
    onChange(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const addItem = useCallback(() => {
    setData(prev => {
      return [...prev, DefaultForm210DataItem];
    });
  }, []);

  const emptyTable = useCallback(() => {
    setData([]);
  }, []);

  const updateItem = useCallback((index: number, item: Partial<Form210DataItem>) => {
    setData(prev => {
      const copy = [...prev];

      copy[index] = {
        ...copy[index],
        ...item,
      };

      return copy;
    });
  }, []);

  const deleteItem = useCallback((index: number) => {
    setData(prev => {
      const copy = [...prev];

      return copy.toSpliced(index, 1);
    });
  }, []);

  const total = useMemo(() => data.reduce((count, item) => count + item.value, 0), [data]);

  return (
    <SectionDataTableStyle>
      {title ? (
        <Typography variant='header4' weight='bold' className='data-table-title'>
          {title}
        </Typography>
      ) : null}
      {children ? <Typography className='recommended-width'>{children}</Typography> : null}
      <section className='item-rows'>
        <section className='actions-row'>
          <Button
            variant='ghost'
            size='small'
            leftIcon='pin-location'
            rounded
            className='add-row-button'
            onClick={addItem}
          >
            Agregar fila
          </Button>
          <Typography weight='bold' withoutPadding>
            {data.length > 1 ? formatNumber(total, { format: 'currency' }) : null}
          </Typography>
          {data.length > 0 && (
            <span className='clear-table-button'>
              <Tooltip content='Vaciar toda la tabla' position='left'>
                <span>
                  <Icon name='trash-can' className='empty-table-button' onClick={emptyTable} />
                </span>
              </Tooltip>
            </span>
          )}
        </section>
        {data.length > 0 ? (
          <section className='table-rows'>
            <section className='item-row'>
              <Typography weight='bold' withoutPadding variant='label'>
                Concepto
              </Typography>
              <Typography weight='bold' withoutPadding variant='label'>
                Valor
              </Typography>
            </section>
            {data.map(({ name, value }, key) => (
              <section className='item-row' key={key}>
                <Input
                  placeholder='Ingresa el concepto'
                  name='name'
                  value={name}
                  setValue={value => updateItem(key, { name: value })}
                />
                <FormatInput
                  id='value'
                  value={value}
                  setValue={value => updateItem(key, { value: value })}
                  roundTo={0}
                />
                <section className='item-delete-row'>
                  <Tooltip content='Eliminar fila' position='left'>
                    <span>
                      <Icon name='trash-can' className='delete-row-button' onClick={() => deleteItem(key)} />
                    </span>
                  </Tooltip>
                </section>
              </section>
            ))}
          </section>
        ) : (
          <section className='empty-table-message'>
            <Typography variant='label'>No hay conceptos en esta tabla, agrega una fila para registrar uno</Typography>
          </section>
        )}
      </section>
    </SectionDataTableStyle>
  );
};
