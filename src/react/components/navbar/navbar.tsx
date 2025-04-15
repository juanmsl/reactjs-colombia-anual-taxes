import { Icon, Image, THEME, useMyTheme } from 'polpo/ui';

import { NavbarStyle, NavLinkStyle } from './navbar.style';

import { PATHS } from '@core/constants';

export const Navbar = () => {
  const { themeName, changeTheme } = useMyTheme();

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
