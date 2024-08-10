import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./home-page').then(module => ({ default: module.HomePage })));

export const HomeLazy = () => {
  return (
    <Suspense>
      <Home />
    </Suspense>
  );
};
