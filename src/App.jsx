import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, About, Catogary, Communities, Contact } from './pages'
import ProductPage from './pages/ProductPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:slug" element={<ProductPage />} /> {/* Dynamic route */}
        {/* <Route path="/cart" element={<CartPage />} /> Dynamic route */}
        <Route path="/about" element={<About />} />
        <Route path="/catogary" element={<Catogary />} />
        <Route path="/communities" element={<Communities />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
