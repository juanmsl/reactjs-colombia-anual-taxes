import { Typography } from '@juanmsl/ui';
import { NavLink } from 'react-router-dom';

import { AsideStyle } from './aside.style';

import { ThemeSelector } from '@components/theme-selector';
import { PATHS } from '@core/constants';

export const Aside = () => {
  return (
    <AsideStyle>
      <section className='aside-content'>
        <NavLink to={PATHS.HOME}>
          <Typography variant='label'>Inicio</Typography>
        </NavLink>
        <NavLink to={PATHS.FORM210}>
          <Typography variant='label'>Formulario 210</Typography>
        </NavLink>
      </section>
      <section className='aside-footer'>
        <ThemeSelector />
      </section>
    </AsideStyle>
  );
};
