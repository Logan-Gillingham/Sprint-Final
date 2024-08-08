import React from 'react';
import { Link } from 'react-router-dom';
import { useShoppingCart } from '../ShoppingCartContext';
import './Header.css';

const Header = () => {
  const { cartItems } = useShoppingCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <Link to="/" className="site-name">Pound Town</Link>
      <div className="cart-container">
        <Link to="/cart" className="cart-icon">
          <img src="/cart-icon.png" alt="Shopping Cart" />
          <span className="cart-count">{totalItems}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;