import { Select, Tabs, Typography } from '@juanmsl/ui';

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
  );
};
