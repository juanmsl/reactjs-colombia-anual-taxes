import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { PATHS } from '@core/constants';
import { MainLayout } from '@layouts/main-layout';

const Form210Lazy = lazy(() => import('@pages').then(module => ({ default: module.Form210Page })));
const HomeLazy = lazy(() => import('@pages').then(module => ({ default: module.HomePage })));

export const Router = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index path={PATHS.HOME} element={<HomeLazy />} />
        <Route path={`${PATHS.FORM210}/*`} element={<Form210Lazy />} />
        <Route path='*' element={<Navigate to={PATHS.HOME} />} />
      </Route>
    </Routes>
  );
};
