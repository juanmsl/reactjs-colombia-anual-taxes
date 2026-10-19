import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

import { Form210Provider } from '@contexts';
import { Router } from '@router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Form210Provider>
        <Suspense>
          <Analytics />
          <SpeedInsights />
          <Router />
        </Suspense>
      </Form210Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
