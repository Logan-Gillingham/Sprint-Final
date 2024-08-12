import React from "react";
import { useShoppingCart } from "../ShoppingCartContext";
import "./CartItemsList.css";

const CartItemsList = () => {
  const { cartItems } = useShoppingCart();

  const subtotal = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const taxRate = 0.15;
  const tax = subtotal * taxRate;

  const total = subtotal + tax;

  return (
    <div className="cart-items-list">
      <h3>Items Added</h3>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <span>{item.name}</span>
                <span>
                  {item.quantity} x ${item.price.toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
          
          <div className="cart-summary">
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>Tax (15%): ${tax.toFixed(2)}</p>
            <p><strong>Total: ${total.toFixed(2)}</strong></p>
          </div>
        </>
      )}
    </div>
  );
};

export default CartItemsList;