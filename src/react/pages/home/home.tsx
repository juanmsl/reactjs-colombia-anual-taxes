import { Icon, THEME, Typography, useMyTheme } from '@juanmsl/ui';

import { HomeStyle } from './home.style';

import { Form210 } from '@components/form-210';
import { Label } from '@components/label';
import { useForm210 } from '@contexts';
import { formatNumber } from '@helpers';

export const Home = () => {
  const { year, uvt, f136, f137 } = useForm210();
  const { toggleTheme, themeName } = useMyTheme();

  return (
    <HomeStyle>
      <section className='home-content-panel'>
        <Form210 />
      </section>
      <section className='home-shared'>
        <section className='shared-content'>
          <section className='shared-data'>
            <Label>Año</Label>
            <Typography withoutPadding>{formatNumber(year, { format: 'number' })}</Typography>
          </section>
          <section className='shared-data'>
            <Label>UVT</Label>
            <Typography withoutPadding>{formatNumber(uvt, { format: 'currency' })}</Typography>
          </section>
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
          <section className='theme-selector' onClick={toggleTheme}>
            <Icon name={themeName === THEME.LIGHT ? 'moon' : 'sun'} />
            <Typography variant='small'>Cambiar al tema {themeName === THEME.LIGHT ? 'oscuro' : 'claro'}</Typography>
          </section>
        </section>
      </section>
      <section className='home-footer'>
        <a
          href='https://www.dian.gov.co/atencionciudadano/formulariosinstructivos/Formularios/2024/Formulario_210_2024.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className='form-link'
        >
          <Icon name='download' />
          <Typography variant='label' weight='bold' withoutPadding>
            Click aqui para descargar el Formulario 210 para año gravable {year} (Presentando en {year + 1})
          </Typography>
        </a>
      </section>
    </HomeStyle>
  );
};
