import { PaletteThemeEntity, DarkTheme as DefaultDarkTheme, LightTheme as DefaultLightTheme } from '@juanmsl/ui';

export const DarkTheme: PaletteThemeEntity = {
  ...DefaultDarkTheme,
  background: {
    main: '#24263A',
    paper: '#24263A',
  },
  text: {
    main: '#FFFFFF',
  },
  primary: {
    main: '#0084ef',
    contrast: '#FFFFFF',
  },
  secondary: {
    main: '#002b83',
    contrast: '#FFFFFF',
  },
  tertiary: {
    main: '#0054ff',
    contrast: '#FFFFFF',
  },
};

export const LightTheme: PaletteThemeEntity = {
  ...DefaultLightTheme,
  background: {
    main: '#FFFFFF',
    paper: '#24263A',
  },
  text: {
    main: '#002135',
  },
  primary: {
    main: '#0084ef',
    contrast: '#FFFFFF',
  },
  secondary: {
    main: '#002b83',
    contrast: '#FFFFFF',
  },
  tertiary: {
    main: '#0054ff',
    contrast: '#FFFFFF',
  },
};
