import { Grid, Icon, Line, Select, Typography } from '@juanmsl/ui';
import { NavLink } from 'react-router-dom';

import { AsideStyle } from './aside.style';

import { ThemeSelector } from '@components/theme-selector';
import { useForm210 } from '@contexts';
import { PATHS, YearsForm210Data } from '@core/constants';

export const Aside = () => {
  const { year, setData } = useForm210();

  return (
    <AsideStyle>
      <Grid gap='1em'>
        <Grid flow='column' jc='space-between' gap='2em' ai='center'>
          <Typography weight='bold'>Declara tu renta</Typography>
        </Grid>
        <Line />
        <section className='aside-header-tab'>
          <Select
            label='Año'
            leftIcon='calendar'
            options={Object.keys(YearsForm210Data)}
            renderOption={item => item}
            name='year'
            value={`${year}`}
            multiselect={false}
            setValue={year => setData(prev => ({ ...prev, year: +year }))}
          />
        </section>
        <Line />
      </Grid>
      <section className='aside-content'>
        <NavLink to={PATHS.HOME} className='aside-tab'>
          <Icon name='house' size={14} />
          <Typography variant='label' noPadding>
            Inicio
          </Typography>
        </NavLink>
        <NavLink to={PATHS.FORM210_FORM} className='aside-tab'>
          <Icon name='document' size={14} />
          <Typography variant='label' noPadding>
            Formulario 210
          </Typography>
        </NavLink>
      </section>
      <section className='aside-footer'>
        <Line />
        <a
          href={`https://www.dian.gov.co/atencionciudadano/formulariosinstructivos/Formularios/${+year + 1}/Formulario_210_${+year + 1}.pdf`}
          target='_blank'
          rel='noopener'
          className='form-link'
        >
          <Typography variant='small' noPadding>
            Descargar Formulario 210
            <br />+ Instrucciones por celda
          </Typography>
        </a>
        <Line />
        <ThemeSelector />
      </section>
    </AsideStyle>
  );
};
