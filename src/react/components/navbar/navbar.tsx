import { Icon, Image, Line, Select, THEME, useMyTheme } from 'polpo/ui';

import { NavbarStyle, NavLinkStyle } from './navbar.style';

import { useForm210, useForm210FieldParams } from '@contexts';
import { PATHS, YearsForm210Data } from '@core/constants';

export const Navbar = () => {
  const { themeName, changeTheme } = useMyTheme();
  const { setData } = useForm210();
  const { value: year } = useForm210FieldParams('year');

  return (
    <NavbarStyle fitHeightContent contentClassName='navbar-content'>
      <section className='navbar-logo'>
        <Image src='/assets/images/logo.png' alt='logo' />
      </section>

      <section className='navbar-links'>
        <NavLinkStyle to={PATHS.HOME}>Inicio</NavLinkStyle>
        <NavLinkStyle to={PATHS.FORM210_FORM}>Formulario 210</NavLinkStyle>
      </section>

      <section className='navbar-actions'>
        <Select
          style={{ width: '100px' }}
          leftIcon='calendar'
          options={Object.keys(YearsForm210Data).toReversed()}
          name='year'
          value={`${year}`}
          multiselect={false}
          setValue={year => setData(prev => ({ ...prev, year: +year }))}
        />
        <Line orientation='vertical' style={{ height: '20px', margin: '0 1em' }} />
        <Icon
          name='moon'
          size={18}
          className={`navbar-icon ${themeName === THEME.DARK ? 'is-active' : ''}`}
          onClick={() => changeTheme('dark')}
        />
        <Icon
          name='sun'
          size={18}
          className={`navbar-icon ${themeName === THEME.LIGHT ? 'is-active' : ''}`}
          onClick={() => changeTheme('light')}
        />
      </section>
    </NavbarStyle>
  );
};
