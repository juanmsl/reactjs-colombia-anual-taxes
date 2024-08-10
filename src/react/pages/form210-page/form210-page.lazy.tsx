import { lazy, Suspense } from 'react';

const Form210 = lazy(() => import('./form210-page').then(module => ({ default: module.Form210Page })));

export const Form210Lazy = () => {
  return (
    <Suspense>
      <Form210 />
    </Suspense>
  );
};
