import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Cart } from './pages/Cart';
import { Catalog } from './pages/Catalog';

type RouteProps = {
  value: number;
};

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      <Routes>
        <Route path="/Catalog" element={<Catalog />} />
      </Routes>
    </Router>
  );
}
