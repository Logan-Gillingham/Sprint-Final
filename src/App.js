import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ShoppingCartProvider } from './ShoppingCartContext';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import ShoppingCartDropdown from './components/ShoppingCartDropdown';
import Checkout from './components/Checkout';

function App() {
  return (
    <ShoppingCartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<ShoppingCartDropdown />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </ShoppingCartProvider>
  );
}

export default App;
