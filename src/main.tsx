import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {AppRoutes} from './routes';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('index.html is missing the #root element');
}

createRoot(rootElement).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>,
);
