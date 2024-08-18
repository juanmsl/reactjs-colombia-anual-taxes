import { Typography } from '@juanmsl/ui';

import { HomePageStyle } from './home-page.style';

import { useForm210 } from '@contexts';
import { DeclarationRequirements } from '@core/constants';
import { formatNumber } from '@helpers';

export const HomePage = () => {
  const { uvt, year, valueFromUVT, minimumSalary } = useForm210();

  return (
    <HomePageStyle>
      <section className='home-header'>
        <Typography variant='hero'>¡Declaración de renta {+year + 1}!</Typography>
        <Typography variant='header1' withoutPadding>
          (Año gravable {year})
        </Typography>
        <Typography>
          Sabemos que la declaración de renta puede ser complicada, por eso hemos creado este espacio para desglosar el
          Formulario 210 de la DIAN. Esta plataforma está diseñada para ayudarte a entender cada parte del Formulario
          210 de la DIAN. Aquí podrás ver cómo se calcula cada celda y qué información necesitas ingresar. Navega por
          las secciones y encuentra explicaciones detalladas, todo de manera fácil y accesible.
        </Typography>
      </section>
      <section className='declaration-requirements'>
        <Typography variant='header4'>Debes declarar si...</Typography>
        <Typography>
          Recuerda que en {+year + 1} para declarar renta sobre el año gravable {year}, debes haber cumplido con alguno
          de los siguientes criterios
        </Typography>
        <section className='declaration-requirements-content'>
          {DeclarationRequirements.map(({ title, text, uvtValue }, key) => (
            <section key={key} className='section-box declaration-requirement'>
              <Typography variant='body' weight='bold' className='requirement-title'>
                {title}
              </Typography>
              <Typography variant='body' className='requirement-text' withoutPadding>
                {text}
              </Typography>
              <Typography variant='header4'>
                <span className='requirement-value'>
                  {formatNumber(valueFromUVT(uvtValue), { format: 'currency', roundTo: -3 })}
                </span>{' '}
                <Typography variant='small'>({formatNumber(uvtValue)} UVT)</Typography>
              </Typography>
            </section>
          ))}
        </section>
      </section>
      <section className='home-data-section'>
        <Typography variant='header4'>Este año {year}, debes tener en cuenta</Typography>
        <section className='home-data-section-content'>
          <section className='section-box home-data-section-item'>
            <section>
              <Typography variant='header4' as='p'>
                {formatNumber(uvt, { format: 'currency' })}
              </Typography>
            </section>
            <section className='home-data-content'>
              <Typography variant='body' withoutPadding>
                Valor UVT
              </Typography>
            </section>
          </section>
          <section className='section-box home-data-section-item'>
            <section>
              <Typography variant='header4' as='p'>
                {formatNumber(minimumSalary, { format: 'currency' })}
              </Typography>
            </section>
            <section className='home-data-content'>
              <Typography variant='body' withoutPadding>
                Salario mínimo
              </Typography>
            </section>
          </section>
          <section className='section-box home-data-section-item'>
            <section>
              <Typography variant='header4' as='p'>
                {formatNumber(valueFromUVT(10), { format: 'currency' })}
              </Typography>
            </section>
            <section className='home-data-content'>
              <Typography variant='body' withoutPadding>
                Sanción minima (10 UVT)
              </Typography>
            </section>
          </section>
          <section className='section-box home-data-section-item'>
            <section>
              <Typography variant='header4' as='p'>
                {formatNumber(valueFromUVT(3500), { format: 'currency' })}
              </Typography>
            </section>
            <section className='home-data-content'>
              <Typography variant='body' withoutPadding>
                Responsable de IVA (3500 UVT)
              </Typography>
            </section>
          </section>
        </section>
      </section>
    </HomePageStyle>
  );
};
