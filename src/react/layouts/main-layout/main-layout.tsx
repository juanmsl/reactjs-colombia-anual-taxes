import { useMediaQuery, useViewport } from '@juanmsl/hooks';
import { Image, SimpleLoader, Typography } from '@juanmsl/ui';
import { Suspense, useEffect, useMemo, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useTheme } from 'styled-components';

import { MainLayoutStyle } from './main-layout.style';

import { Aside } from '@components/aside';
import { Footer } from '@components/footer';

export const MainLayout = () => {
  const theme = useTheme();
  const location = useLocation();
  const ref = useRef(null);
  const { width } = useViewport();
  const isWidthSupported = useMediaQuery(`(min-width: ${theme.constants.breakpoints.laptopM})`);
  const shouldUpdate = useMemo(
    () => !CSS.supports('(grid-template-rows: subgrid) or (grid-template-columns: subgrid)'),
    [],
  );

  useEffect(() => {
    ref.current?.scrollTo(0, 0);
  }, [location.key]);

  if (!isWidthSupported) {
    return (
      <MainLayoutStyle className='screen-message'>
        <section className='screen-message-content'>
          <section className='main-layout-logo'>
            <Image src='/assets/images/logo.png' />
          </section>
          <Typography variant='header1'>Declara tu renta, Colombia</Typography>
          <Typography variant='body'>
            Para poder utilizar la plataforma y tener una mejor experiencia, por favor visitanos desde un computador.
          </Typography>
          <section>
            <Typography variant='label' as='p' withoutPadding>
              <b>Tamaño minimo de la pantalla:</b> {theme.constants.breakpoints.laptopM}
            </Typography>
            <Typography variant='label' as='p' withoutPadding>
              <b>Tu tamaño actual:</b> {width}px
            </Typography>
          </section>
        </section>
      </MainLayoutStyle>
    );
  }

  if (shouldUpdate) {
    return (
      <MainLayoutStyle className='screen-message'>
        <section className='screen-message-content'>
          <section className='main-layout-logo'>
            <Image src='/assets/images/logo.png' />
          </section>
          <Typography variant='header4'>Declara tu renta, Colombia</Typography>
          <Typography variant='body'>
            Debes actualizar tu navegador a la ultima version para garantizar una mejor experiencia.
          </Typography>
        </section>
      </MainLayoutStyle>
    );
  }

  return (
    <MainLayoutStyle>
      <Aside />
      <Suspense
        fallback={
          <section className='suspense-loader'>
            <SimpleLoader />
          </section>
        }
      >
        <section className='main-layout-content' ref={ref}>
          <Outlet />
          <Footer />
        </section>
      </Suspense>
    </MainLayoutStyle>
  );
};
