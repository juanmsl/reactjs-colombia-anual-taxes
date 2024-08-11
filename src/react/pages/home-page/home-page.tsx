import { Typography } from '@juanmsl/ui';

import { HomePageStyle } from './home-page.style';

export const HomePage = () => {
  return (
    <HomePageStyle>
      <Typography variant='hero'>Bienvenido!</Typography>
      <Typography>
        Sabemos que la declaración de renta puede ser complicada, por eso hemos creado este espacio para desglosar el
        Formulario 210 de la DIAN. Esta plataforma está diseñada para ayudarte a entender cada parte del Formulario 210
        de la DIAN. Aquí podrás ver cómo se calcula cada celda y qué información necesitas ingresar. Navega por las
        secciones y encuentra explicaciones detalladas, todo de manera fácil y accesible.
      </Typography>
    </HomePageStyle>
  );
};
