import { Navigate, Route, Routes } from 'react-router-dom';

import { Form210PageStyle } from './form210-page.style';
import { FormToolbar, Form210, Form210Tabs } from './modules';

import { Footer } from '@components/footer';
import { PATHS } from '@core/constants';

export const Form210Page = () => {
  return (
    <Form210PageStyle>
      <FormToolbar />

      <section className='form-210-content-panel'>
        <Routes>
          <Route index element={<Form210 />} />
          <Route path='steps' element={<Form210Tabs />} />
          <Route path='*' element={<Navigate to={PATHS.FORM210} />} />
        </Routes>
      </section>

      <Footer />
    </Form210PageStyle>
  );
};
