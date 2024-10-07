import { PaletteThemeEntity, DarkTheme as DefaultDarkTheme, LightTheme as DefaultLightTheme } from '@juanmsl/ui';

export const DarkTheme: PaletteThemeEntity = {
  ...DefaultDarkTheme,
  background: {
    main: '#24263A',
    paper: '#151623',
    disabled: '#41424e',
  },
  text: {
    main: '#FFFFFF',
    light: '#FFFFFF',
    dark: '#EFEFEF',
    disabled: '#EFEFEF',
  },
  primary: {
    main: '#0043cf',
    contrast: '#FFFFFF',
    light: '#053eb3',
    dark: '#062460',
  },
  secondary: {
    main: '#0084ef',
    contrast: '#FFFFFF',
    light: '#419ff3',
    dark: '#0058a1',
  },
  tertiary: {
    main: '#0054ff',
    contrast: '#FFFFFF',
    light: '#3175f4',
    dark: '#0036b3',
  },
};

export const LightTheme: PaletteThemeEntity = {
  ...DefaultLightTheme,
  background: {
    main: '#FFFFFF',
    paper: '#EFEFEF',
    disabled: '#EFEFEF',
  },
  text: {
    main: '#002135',
    light: '#0d538a',
    dark: '#001135',
    disabled: '#41424e',
  },
  primary: {
    main: '#0043cf',
    contrast: '#FFFFFF',
    light: '#053eb3',
    dark: '#062460',
  },
  secondary: {
    main: '#0084ef',
    contrast: '#FFFFFF',
    light: '#419ff3',
    dark: '#0058a1',
  },
  tertiary: {
    main: '#0054ff',
    contrast: '#FFFFFF',
    light: '#3175f4',
    dark: '#0036b3',
  },
};
