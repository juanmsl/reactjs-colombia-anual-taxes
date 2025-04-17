import { Select, Tabs, Typography } from 'polpo/ui';

import { Data } from '../form-210-tabs.data';

import { FieldInput } from '@components/field-input';
import { FieldInputContainer } from '@components/field-input-container';
import { useForm210, useForm210FieldParams } from '@contexts';
import { DeclarationNumberOptions, Form210Sections } from '@core/constants';

export const Inicio = () => {
  const { setData } = useForm210();
  const { value: year } = useForm210FieldParams('year');
  const { value: declarationNumber } = useForm210FieldParams('declarationNumber');

  return (
    <Tabs.TabPanel id={Form210Sections.INICIO}>
      <Typography variant='header1'>1. Inicio</Typography>
      <section className='fields-container'>
        <Data label='Estoy declarando por'>
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
        </Data>
        <FieldInput
          label={`Impuesto neto de renta año anterior (Celda 127 del ${year - 1})`}
          id='prevDeclarationValue'
          roundTo={0}
        />
        <FieldInput id='28' label='Uno por ciento (1%) de compras con fáctura electrónica' />
      </section>
    </Tabs.TabPanel>
  );
};
