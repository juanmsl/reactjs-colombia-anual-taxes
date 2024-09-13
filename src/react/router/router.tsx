import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Form210 } from '@components/form-210';
import { Form210Tabs } from '@components/form-210-tabs';
import { PATHS } from '@core/constants';
import { MainLayout } from '@layouts/main-layout';

const Form210Lazy = lazy(() => import('@pages').then(module => ({ default: module.Form210Page })));
const HomeLazy = lazy(() => import('@pages').then(module => ({ default: module.HomePage })));

export const Router = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index path={PATHS.HOME} element={<HomeLazy />} />
        <Route path={PATHS.FORM210} element={<Form210Lazy />}>
          <Route index element={<Form210 />} />
          <Route path='steps' element={<Form210Tabs />} />
          <Route path='*' element={<Form210 />} />
        </Route>
        <Route path='*' element={<Navigate to={PATHS.HOME} />} />
      </Route>
    </Routes>
  );
};
