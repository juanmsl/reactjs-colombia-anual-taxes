import { Outlet } from 'react-router-dom';

import { MainLayoutStyle } from './main-layout.style';

import { Aside } from '@components/aside';

export const MainLayout = () => {
  return (
    <MainLayoutStyle>
      <Aside />
      <section className='main-layout-content'>
        <Outlet />
      </section>
    </MainLayoutStyle>
  );
};
