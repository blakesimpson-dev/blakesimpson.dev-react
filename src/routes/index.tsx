import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {Home} from '../pages/home';

/** The site is a single page; any other path redirects to it. */
export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
