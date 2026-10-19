import { Image, Typography } from 'polpo/components';
import { useMediaQuery, useViewport } from 'polpo/hooks';
import { useEffect, useMemo, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import './main-layout.styles.css';

import { Navbar } from '@components/navbar';

export const MainLayout = () => {
  const location = useLocation();
  const ref = useRef<HTMLDivElement>(null);
  const { width } = useViewport();
  const isWidthSupported = useMediaQuery('(min-width: 1024px');
  const shouldUpdate = useMemo(
    () => !CSS.supports('(grid-template-rows: subgrid) or (grid-template-columns: subgrid)'),
    [],
  );

  useEffect(() => {
    ref.current?.scrollTo(0, 0);
  }, [location.key]);

  if (!isWidthSupported) {
    return (
      <section className='main-layout screen-message'>
        <section className='screen-message-content'>
          <section className='main-layout-logo'>
            <Image src='/assets/images/logo.png' />
          </section>
          <Typography variant='header1'>Declara tu renta, Colombia</Typography>
          <Typography variant='body'>
            Para poder utilizar la plataforma y tener una mejor experiencia, por favor visitanos desde un computador.
          </Typography>
          <section>
            <Typography variant='label' as='p' noPadding>
              <b>Tamaño minimo de la pantalla:</b> 1024px
            </Typography>
            <Typography variant='label' as='p' noPadding>
              <b>Tu tamaño actual:</b> {width}px
            </Typography>
          </section>
        </section>
      </section>
    );
  }

  if (shouldUpdate) {
    return (
      <section className='main-layout screen-message'>
        <section className='screen-message-content'>
          <section className='main-layout-logo'>
            <Image src='/assets/images/logo.png' />
          </section>
          <Typography variant='header4'>Declara tu renta, Colombia</Typography>
          <Typography variant='body'>
            Debes actualizar tu navegador a la ultima version para garantizar una mejor experiencia.
          </Typography>
        </section>
      </section>
    );
  }

  return (
    <section className='main-layout'>
      <Navbar />
      <section className='main-layout-content' ref={ref}>
        <Outlet />
      </section>
    </section>
  );
};
