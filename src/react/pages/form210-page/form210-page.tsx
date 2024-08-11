import { Icon, Typography } from '@juanmsl/ui';

import { Form210PageStyle } from './form210-page.style';

import { Form210 } from '@components/form-210';
import { FormatInput } from '@components/format-input';
import { Label } from '@components/label';
import { useForm210 } from '@contexts';
import { formatNumber } from '@helpers';

export const Form210Page = () => {
  const { year, uvt, f136, f137, declarationNumber, prevDeclarationValue, setData } = useForm210();

  return (
    <Form210PageStyle>
      <section className='home-content-panel'>
        <Form210 />
      </section>
      <section className='home-shared'>
        <section className='shared-content'>
          <section className='shared-data'>
            <Label>Año</Label>
            <FormatInput
              id='year'
              value={year}
              setValue={year => setData(prev => ({ ...prev, year }))}
              format='number'
              roundTo={0}
            />
          </section>
          <section className='shared-data'>
            <Label>UVT</Label>
            <FormatInput id='uvt' value={uvt} setValue={uvt => setData(prev => ({ ...prev, uvt }))} roundTo={0} />
          </section>
          <section className='shared-data'>
            <Label>Declaración #</Label>
            <FormatInput
              id='declarationNumber'
              value={declarationNumber}
              setValue={declarationNumber => setData(prev => ({ ...prev, declarationNumber }))}
              format='number'
              roundTo={0}
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
        <section className='shared-footer'>
          <a
            href='https://www.dian.gov.co/atencionciudadano/formulariosinstructivos/Formularios/2024/Formulario_210_2024.pdf'
            target='_blank'
            rel='noopener noreferrer'
            className='form-link'
          >
            <Icon name='download' />
            <Typography variant='small' weight='bold' withoutPadding>
              Descargar Formulario 210
              <br />+ Instrucciones por celda
            </Typography>
          </a>
        </section>
      </section>
    </Form210PageStyle>
  );
};
