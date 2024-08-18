import { SimpleLoader, ThemeProvider } from '@juanmsl/ui';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Form210Provider } from '@contexts';
import { DarkTheme, LightTheme } from '@core/theme';
import { Router } from '@router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider darkTheme={DarkTheme} lightTheme={LightTheme}>
      <Suspense fallback={<SimpleLoader />}>
        <BrowserRouter>
          <Form210Provider>
            <Analytics />
            <SpeedInsights />
            <Router />
          </Form210Provider>
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>,
);
