import { Select, Tabs, Typography } from 'polpo/ui';

import { Data } from '../form-210-tabs.data';

import { FieldInput } from '@components/field-input';
import { FormatInput } from '@components/format-input';
import { useForm210 } from '@contexts';
import { DeclarationNumberOption, DeclarationNumberOptions, Form210Sections } from '@core/constants';

export const Inicio = () => {
  const { declarationNumber, setData, year, prevDeclarationValue } = useForm210();

  return (
    <Tabs.TabPanel id={Form210Sections.INICIO}>
      <Typography variant='header1'>1. Inicio</Typography>
      <section className='fields-container'>
        <Data label='Estoy declarando por'>
          <Select<DeclarationNumberOption>
            options={DeclarationNumberOptions}
            optionComponent={({ value }) => <Typography variant='label'>{value.label}</Typography>}
            valueComponent={({ value }) => (
              <Typography variant='label' noPadding>
                {Array.isArray(value) ? value.map(item => item.label) : value.label}
              </Typography>
            )}
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
        <FieldInput id='28' label='Uno por ciento (1%) de compras con fáctura electrónica' />
      </section>
    </Tabs.TabPanel>
  );
};
