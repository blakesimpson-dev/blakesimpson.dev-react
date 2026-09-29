import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {Home} from '../pages/home';

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
