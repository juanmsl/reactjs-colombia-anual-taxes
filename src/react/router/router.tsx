import { Navigate, Route, Routes } from 'react-router-dom';

import { PATHS } from '@core/constants';
import { MainLayout } from '@layouts/main-layout';
import { Form210Page, HomePage } from '@pages';

export const Router = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index path={PATHS.HOME} element={<HomePage />} />
        <Route path={`${PATHS.FORM210}/*`} element={<Form210Page />} />
        <Route path='*' element={<Navigate to={PATHS.HOME} />} />
      </Route>
    </Routes>
  );
};
