import { SimpleLoader } from '@juanmsl/ui';
import { MainLayout } from '@layouts/main-layout';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PATHS } from '@core/constants';
import { Form210Lazy, HomeLazy } from '@pages';

export const Router = () => {
  return (
    <Suspense fallback={<SimpleLoader />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={PATHS.HOME} element={<HomeLazy />} />
          <Route path={PATHS.FORM210} element={<Form210Lazy />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
