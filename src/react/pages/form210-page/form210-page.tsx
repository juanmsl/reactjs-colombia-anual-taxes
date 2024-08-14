import { Select, Typography } from '@juanmsl/ui';

import { Form210PageStyle } from './form210-page.style';

import { Form210 } from '@components/form-210';
import { FormatInput } from '@components/format-input';
import { Label } from '@components/label';
import { useForm210 } from '@contexts';
import { DeclarationNumberOption, DeclarationNumberOptions } from '@core/constants';
import { formatNumber } from '@helpers';

export const Form210Page = () => {
  const { uvt, f136, f137, declarationNumber, prevDeclarationValue, setData } = useForm210();

  return (
    <Form210PageStyle>
      <section className='home-content-panel'>
        <Form210 />
      </section>
      <section className='home-shared'>
        <section className='shared-data'>
          <Label>UVT</Label>
          {formatNumber(uvt, { format: 'currency' })}
        </section>
        <section className='shared-data'>
          <Label>Estoy declarando por</Label>
          <Select<DeclarationNumberOption>
            options={DeclarationNumberOptions}
            renderOption={item => item.label}
            name='declarationNumber'
            value={DeclarationNumberOptions.find(item => item.value === declarationNumber)}
            setValue={value => setData(prev => ({ ...prev, declarationNumber: value.value }))}
          />
        </section>
        {declarationNumber > 1 ? (
          <section className='shared-data'>
            <Label>
              Impuesto neto de renta,
              <br />
              año anterior
            </Label>
            <FormatInput
              id='prevDeclarationValue'
              value={prevDeclarationValue}
              setValue={prevDeclarationValue => setData(prev => ({ ...prev, prevDeclarationValue }))}
              roundTo={0}
            />
          </section>
        ) : null}
        {f136 > 0 && (
          <section className='shared-data selected'>
            <Label>Total saldo a pagar</Label>
            <Typography withoutPadding weight='bold'>
              {formatNumber(f136, { format: 'currency' })}
            </Typography>
          </section>
        )}
        {f137 > 0 && (
          <section className='shared-data selected'>
            <Label>Total saldo a favor</Label>
            <Typography withoutPadding weight='bold'>
              {formatNumber(f137, { format: 'currency' })}
            </Typography>
          </section>
        )}
      </section>
    </Form210PageStyle>
  );
};
