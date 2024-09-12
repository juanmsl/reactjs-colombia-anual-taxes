import { Image, Typography, SectionLayout } from '@juanmsl/ui';
import { useMemo } from 'react';

import { DeclarationRequirementsStyle, DeclarationYearDataStyle, HomePageStyle } from './home-page.style';

import { useForm210 } from '@contexts';
import { DeclarationRequirements } from '@core/constants';
import { formatNumber } from '@helpers';

export const HomePage = () => {
  const { uvt, year, valueFromUVT, minimumSalary } = useForm210();

  const declarationData = useMemo(
    () => [
      {
        value: uvt,
        label: 'Valor UVT',
      },
      {
        value: minimumSalary,
        label: 'Salario mínimo',
      },
      {
        value: valueFromUVT(10),
        label: 'Sanción minima (10 UVT)',
      },
      {
        value: valueFromUVT(3500),
        label: 'Responsable de IVA (3500 UVT)',
      },
    ],
    [minimumSalary, uvt, valueFromUVT],
  );

  return (
    <HomePageStyle>
      <SectionLayout>
        <section className='home-header'>
          <section className='home-header-title'>
            <section className='home-page-logo'>
              <Image src='/assets/images/logo.png' />
            </section>
            <section>
              <Typography variant='hero'>¡Declara tu renta, Colombia!</Typography>
            </section>
          </section>

          <section className='home-header-description'>
            <Typography>
              Sabemos que la declaración de renta puede ser complicada, por eso hemos creado este espacio para desglosar
              el Formulario 210 de la DIAN.
            </Typography>
            <Typography>
              Esta plataforma está diseñada para ayudarte a entender cada parte del Formulario 210 de la DIAN. Aquí
              podrás ver cómo se calcula cada celda y qué información necesitas ingresar. Navega por las secciones y
              encuentra explicaciones detalladas, todo de manera fácil y accesible.
            </Typography>
          </section>
        </section>
      </SectionLayout>

      <DeclarationYearDataStyle contentClassName='year-data-section-content'>
        <section>
          <Typography variant='header1' noPadding>
            Declaración de renta {+year + 1}
          </Typography>
          <Typography variant='header2' noPadding>
            (Año gravable {year})
          </Typography>
        </section>

        <Typography>Para el año {year}, se aplican los siguientes valores</Typography>

        <section className='year-data-content'>
          {declarationData.map(({ value, label }, key) => (
            <section className='year-data-item' key={key}>
              <Typography variant='header4' as='p' className='year-data-item--value'>
                {formatNumber(value, { format: 'currency' })}
              </Typography>
              <Typography variant='body' noPadding>
                {label}
              </Typography>
            </section>
          ))}
        </section>
      </DeclarationYearDataStyle>

      <SectionLayout>
        <DeclarationRequirementsStyle>
          <Typography variant='header4'>Debes declarar si...</Typography>
          <Typography>
            Recuerda que en {+year + 1} para declarar renta sobre el año gravable {year}, debes haber cumplido con
            alguno de los siguientes criterios
          </Typography>

          <section className='declaration-content'>
            {DeclarationRequirements.map(({ title, text, uvtValue }, key) => (
              <section key={key} className='declaration-requirement'>
                <Typography variant='body' weight='bold' className='requirement-title'>
                  {title}
                </Typography>
                <Typography variant='body' className='requirement-text' noPadding>
                  {text}
                </Typography>
                <Typography variant='header4'>
                  <span className='requirement-value'>
                    {formatNumber(valueFromUVT(uvtValue), {
                      format: 'currency',
                      roundTo: -3,
                    })}
                  </span>{' '}
                  <Typography variant='small'>({formatNumber(uvtValue)} UVT)</Typography>
                </Typography>
              </section>
            ))}
          </section>
        </DeclarationRequirementsStyle>
      </SectionLayout>
    </HomePageStyle>
  );
};
