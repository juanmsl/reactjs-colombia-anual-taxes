import { Typography } from '@juanmsl/ui';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { MainLayoutStyle } from './main-layout.style';

import { Aside } from '@components/aside';
import { Footer } from '@components/footer';

export const MainLayout = () => {
  const [shouldUpdate, setShouldUpdate] = useState(false);

  useEffect(() => {
    const [navigator, version] = window.navigator.userAgent.match(/Chrome\/[0-9]+/)[0].split('/');

    if (navigator === 'Chrome') {
      fetch('https://cdn.jsdelivr.net/gh/berstend/chrome-versions/data/stable/mac/version/latest.json')
        .then(response => response.json())
        .then(response => {
          if (response.milestone - 10 > +version) {
            setShouldUpdate(true);
          }
        });
    }
  }, []);

  if (shouldUpdate) {
    return (
      <MainLayoutStyle>
        <Typography variant='header1'>Debes actualizar tu navegador</Typography>
      </MainLayoutStyle>
    );
  }

  return (
    <MainLayoutStyle>
      <Aside />
      <section className='main-layout-content'>
        <section className='main-layout-content-page'>
          <Outlet />
          <Footer />
        </section>
      </section>
    </MainLayoutStyle>
  );
};
