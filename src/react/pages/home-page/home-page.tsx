import { Line, Typography } from '@juanmsl/ui';

import { HomePageStyle } from './home-page.style';

import { useForm210 } from '@contexts';
import { DeclarationRequirements } from '@core/constants';
import { formatNumber } from '@helpers';

export const HomePage = () => {
  const { uvt, year, valueFromUVT, minimumSalary } = useForm210();

  return (
    <HomePageStyle>
      <section className='home-header'>
        <Typography variant='hero' withoutPadding>
          ¡Declaración de renta {+year + 1}!
        </Typography>
        <Typography variant='header1'>(Año gravable {year})</Typography>
        <Typography>
          Sabemos que la declaración de renta puede ser complicada, por eso hemos creado este espacio para desglosar el
          Formulario 210 de la DIAN. Esta plataforma está diseñada para ayudarte a entender cada parte del Formulario
          210 de la DIAN. Aquí podrás ver cómo se calcula cada celda y qué información necesitas ingresar. Navega por
          las secciones y encuentra explicaciones detalladas, todo de manera fácil y accesible.
        </Typography>
      </section>
      <section className='section-box declaration-requirements'>
        <Typography variant='header4'>Debes declarar si...</Typography>
        <Typography>
          Recuerda que en {+year + 1} para declarar renta sobre el año gravable {year}, debes haber cumplido con alguno
          de los siguientes criterios
        </Typography>
        {DeclarationRequirements.map(({ title, text, uvtValue }, key) => (
          <section key={key} className='declaration-requirement'>
            <section className='requirement-left'>
              <Typography variant='body' weight='bold' className='requirement-title'>
                {title}
              </Typography>
              <Typography variant='body' className='requirement-text' withoutPadding>
                {text}
              </Typography>
            </section>
            <Line orientation='horizontal' lineStyle='dotted' spacing={10} dotSize={2} />
            <Typography variant='header4' withoutPadding>
              <Typography variant='small'>
                ({formatNumber(uvtValue)} <sub>UVT</sub>)
              </Typography>{' '}
              <span className='requirement-value'>
                {formatNumber(valueFromUVT(uvtValue), { format: 'currency', roundTo: -3 })}
              </span>
            </Typography>
          </section>
        ))}
      </section>
      <section className='section-box home-data-section'>
        <Typography variant='header4'>{year}</Typography>
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
                {formatNumber(minimumSalary, { format: 'currency' })}
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
      </section>
    </HomePageStyle>
  );
};
