import React from 'react';
import { getProducts } from '../api';
import ProductCard from './ProductCard';

const ProductList = () => {
  const products = getProducts();

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;