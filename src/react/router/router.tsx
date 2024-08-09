import { SimpleLoader } from '@juanmsl/ui';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('@pages').then(module => ({ default: module.Home })));

export const Router = () => {
  return (
    <Suspense fallback={<SimpleLoader />}>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Suspense>
  );
};
