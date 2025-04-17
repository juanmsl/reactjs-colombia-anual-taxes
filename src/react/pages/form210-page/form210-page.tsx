import { useEventListener, useResizeObserver } from 'polpo/hooks';
import { useCallback, useRef, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useTheme } from 'styled-components';

import { Form210PagePanelStyle, Form210PageStyle } from './form210-page.style';
import { Form210, Form210Tabs } from './modules';

import { Footer } from '@components/footer';
import { FormToolbar } from '@components/form-toolbar';
import { PATHS } from '@core/constants';

export const Form210Page = () => {
  const ref = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const [left, setLeft] = useState(() => {
    const breakpoint = +theme.constants.breakpoints.laptopL.split('px')[0];

    if (window.innerWidth > breakpoint + 64) {
      return (window.innerWidth - breakpoint) / 2;
    }

    return 32;
  });

  const getLeft = useCallback((ref: React.RefObject<HTMLElement>) => {
    setLeft(ref.current?.children[0].getBoundingClientRect().left ?? 0);
  }, []);

  useResizeObserver(ref, () => getLeft(ref));
  useEventListener('resize', () => getLeft(ref));

  return (
    <Form210PageStyle>
      <FormToolbar style={{ left }} />

      <section className='form-210-content'>
        <Form210PagePanelStyle fitHeightContent ref={ref} contentClassName='form-210-content-panel'>
          <Routes>
            <Route index element={<Form210 />} />
            <Route path='steps' element={<Form210Tabs />} />
            <Route path='*' element={<Navigate to={PATHS.FORM210} />} />
          </Routes>
        </Form210PagePanelStyle>

        <Footer />
      </section>
    </Form210PageStyle>
  );
};
