import React from 'react';
import { useShoppingCart } from '../ShoppingCartContext';
import './Checkout.css';

const generateOrderCode = () => {
  return Math.random().toString(36).substr(2, 9).toUpperCase();
};

const Checkout = () => {
  const { cartItems, removeFromCart } = useShoppingCart();
  const orderCode = generateOrderCode();

  const handleCheckout = () => {
    alert(`Thanks for your order! Your order code is ${orderCode}.`);
    cartItems.forEach(item => removeFromCart(item)); // Clear the cart
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <button onClick={handleCheckout} className="complete-order-button">
        Complete Order
      </button>
    </div>
  );
};

export default Checkout;