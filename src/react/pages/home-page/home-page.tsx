import { Typography } from '@juanmsl/ui';

import { HomePageStyle } from './home-page.style';

import { useForm210 } from '@contexts';
import { formatNumber } from '@helpers';

export const HomePage = () => {
  const { uvt, year, valueFromUVT } = useForm210();

  return (
    <HomePageStyle>
      <Typography variant='hero'>Declaración de renta 2024!</Typography>
      <Typography>
        Sabemos que la declaración de renta puede ser complicada, por eso hemos creado este espacio para desglosar el
        Formulario 210 de la DIAN. Esta plataforma está diseñada para ayudarte a entender cada parte del Formulario 210
        de la DIAN. Aquí podrás ver cómo se calcula cada celda y qué información necesitas ingresar. Navega por las
        secciones y encuentra explicaciones detalladas, todo de manera fácil y accesible.
      </Typography>
      <Typography variant='header3'>Datos a tener en cuenta</Typography>
      <section className='home-data-grid'>
        <section className='home-data'>
          <section>
            <Typography variant='header4' as='p'>
              {formatNumber(uvt, { format: 'currency' })}
            </Typography>
          </section>
          <section className='home-data-content'>
            <Typography variant='body' withoutPadding weight='bold'>
              Valor UVT para el año gravable {year}
            </Typography>
          </section>
        </section>
        <section className='home-data'>
          <section>
            <Typography variant='header4' as='p'>
              {formatNumber(1160000, { format: 'currency' })}
            </Typography>
          </section>
          <section className='home-data-content'>
            <Typography variant='body' withoutPadding weight='bold'>
              Salario mínimo en {year}
            </Typography>
          </section>
        </section>
        <section className='home-data'>
          <section>
            <Typography variant='header4' as='p'>
              {formatNumber(valueFromUVT(10), { format: 'currency' })}
            </Typography>
          </section>
          <section className='home-data-content'>
            <Typography variant='body' withoutPadding weight='bold'>
              Sanción minima (10 UVT)
            </Typography>
          </section>
        </section>
        <section className='home-data'>
          <section>
            <Typography variant='header4' as='p'>
              {formatNumber(valueFromUVT(3500), { format: 'currency' })}
            </Typography>
          </section>
          <section className='home-data-content'>
            <Typography variant='body' withoutPadding weight='bold'>
              Responsable de IVA (3500 UVT)
            </Typography>
          </section>
        </section>
      </section>
    </HomePageStyle>
  );
};
