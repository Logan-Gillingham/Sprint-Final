import React, { useState } from 'react';
import { useShoppingCart } from '../ShoppingCartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useShoppingCart();
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <div className="quantity-container">
        <label htmlFor={`quantity-${product.id}`}>Qty:</label>
        <input
          type="number"
          id={`quantity-${product.id}`}
          value={quantity}
          min="1"
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
      </div>
      <button onClick={() => addToCart({ ...product, quantity })}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;