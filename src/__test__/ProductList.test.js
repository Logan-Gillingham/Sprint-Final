import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductList from '../components/ProductList';
import { ShoppingCartProvider } from '../ShoppingCartContext';

test('renders product list', () => {
  render(
    <ShoppingCartProvider>
      <ProductList />
    </ShoppingCartProvider>
  );

  const productElements = screen.getAllByText(/Product/i);
  expect(productElements.length).toBe(5); 
});