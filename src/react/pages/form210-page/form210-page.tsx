import { useEventListener, useResizeObserver } from 'polpo/hooks';
import { useCallback, useRef, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import './form210-page.styles.css';
import { Form210, Form210Tabs } from './modules';

import { Footer } from '@components/footer';
import { FormToolbar } from '@components/form-toolbar';
import { PATHS } from '@core/constants';
import { SectionLayout } from '@layouts/section-layout';

export const Form210Page = () => {
  const ref = useRef<HTMLElement>(null);
  const [left, setLeft] = useState(() => {
    const breakpoint = 1280;

    if (window.innerWidth > breakpoint + 64) {
      return (window.innerWidth - breakpoint) / 2;
    }

    return 32;
  });

  const getLeft = useCallback((ref: React.RefObject<HTMLElement | null>) => {
    setLeft(ref.current?.children[0].getBoundingClientRect().left ?? 0);
  }, []);

  useResizeObserver(ref, () => getLeft(ref));
  useEventListener('resize', () => getLeft(ref));

  return (
    <main className='form210-page'>
      <FormToolbar style={{ left }} />

      <section className='form-210-content'>
        <SectionLayout
          className='form210-page-panel'
          fitHeightContent
          ref={ref}
          contentClassName='form-210-content-panel'
        >
          <Routes>
            <Route index element={<Form210 />} />
            <Route path='steps' element={<Form210Tabs />} />
            <Route path='*' element={<Navigate to={PATHS.FORM210} />} />
          </Routes>
        </SectionLayout>

        <Footer />
      </section>
    </main>
  );
};
