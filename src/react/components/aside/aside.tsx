import { Icon, Line, Select, Typography } from '@juanmsl/ui';
import { NavLink } from 'react-router-dom';

import { AsideStyle } from './aside.style';

import { ThemeSelector } from '@components/theme-selector';
import { useForm210 } from '@contexts';
import { PATHS, YearsForm210Data } from '@core/constants';
import { formatNumber } from '@helpers';

export const Aside = () => {
  const { year, setData } = useForm210();

  return (
    <AsideStyle>
      <section className='aside-header'>
        <section className='aside-header-tab'>
          <Select
            label='Año'
            leftIcon='moon'
            options={Object.keys(YearsForm210Data)}
            renderOption={item => formatNumber(+item)}
            name='year'
            value={`${year}`}
            setValue={year => setData(prev => ({ ...prev, year }))}
          />
        </section>
      </section>
      <section className='aside-content'>
        <NavLink to={PATHS.HOME} className='aside-tab'>
          <Icon name='house' size={14} />
          <Typography variant='label' withoutPadding>
            Inicio
          </Typography>
        </NavLink>
        <NavLink to={PATHS.FORM210} className='aside-tab'>
          <Icon name='download' size={14} />
          <Typography variant='label' withoutPadding>
            Formulario 210
          </Typography>
        </NavLink>
      </section>
      <section className='aside-footer'>
        <ThemeSelector />
        <Line orientation='horizontal' />
        <a
          href='https://www.dian.gov.co/atencionciudadano/formulariosinstructivos/Formularios/2024/Formulario_210_2024.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className='form-link'
        >
          <Typography variant='small' withoutPadding>
            Descargar Formulario 210
            <br />+ Instrucciones por celda
          </Typography>
        </a>
      </section>
    </AsideStyle>
  );
};
