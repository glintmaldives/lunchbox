import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const Products = React.lazy(() => import('./pages/Products'));
const Features = React.lazy(() => import('./pages/Features'));
const Partners = React.lazy(() => import('./pages/Partners'));
const Company = React.lazy(() => import('./pages/Company'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="features" element={<Features />} />
          <Route path="partners" element={<Partners />} />
          <Route path="company" element={<Company />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;