import { Icon, THEME, Typography, useMyTheme } from '@juanmsl/ui';

import { ThemeSelectorStyle } from './theme-selector.style';

export const ThemeSelector = () => {
  const { toggleTheme, themeName } = useMyTheme();

  return (
    <ThemeSelectorStyle onClick={toggleTheme}>
      <Icon name={themeName === THEME.LIGHT ? 'moon' : 'sun'} />
      <Typography variant='small'>Cambiar al tema {themeName === THEME.LIGHT ? 'oscuro' : 'claro'}</Typography>
    </ThemeSelectorStyle>
  );
};
