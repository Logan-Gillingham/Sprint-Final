import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ShoppingCartProvider } from "./ShoppingCartContext";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";
import './App.css';
function App() {
  return (
    <ShoppingCartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </Router>
    </ShoppingCartProvider>
  );
}

export default App;
