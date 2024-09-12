import { PaletteThemeEntity, DarkTheme as DefaultDarkTheme, LightTheme as DefaultLightTheme } from '@juanmsl/ui';

export const DarkTheme: PaletteThemeEntity = {
  ...DefaultDarkTheme,
  background: {
    main: '#24263A',
    paper: '#151623',
  },
  text: {
    main: '#FFFFFF',
    light: '#FFFFFF',
    dark: '#EFEFEF',
  },
  primary: {
    main: '#0084ef',
    contrast: '#FFFFFF',
    light: '#419ff3',
    dark: '#0058a1',
  },
  secondary: {
    main: '#002b83',
    contrast: '#FFFFFF',
    light: '#053eb3',
    dark: '#001a50',
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
  },
  text: {
    main: '#002135',
    light: '#0d538a',
    dark: '#001135',
  },
  primary: {
    main: '#0084ef',
    contrast: '#FFFFFF',
    light: '#419ff3',
    dark: '#0058a1',
  },
  secondary: {
    main: '#002b83',
    contrast: '#FFFFFF',
    light: '#053eb3',
    dark: '#001a50',
  },
  tertiary: {
    main: '#0054ff',
    contrast: '#FFFFFF',
    light: '#3175f4',
    dark: '#0036b3',
  },
};
