import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductCard from '../components/ProductCard';
import { ShoppingCartProvider } from '../ShoppingCartContext';

const mockProduct = {
  id: 1,
  name: 'Test Product',
  description: 'This is a test product',
  price: 99.99,
  image: 'https://via.placeholder.com/150',
};

const renderWithContext = (ui, options) =>
  render(<ShoppingCartProvider>{ui}</ShoppingCartProvider>, options);

describe('ProductCard', () => {
  test('renders product name, description, price, and image', () => {
    renderWithContext(<ProductCard product={mockProduct} />);

    // Check if the name is rendered
    expect(screen.getByText('Test Product')).toBeInTheDocument();

    // Check if the description is rendered
    expect(screen.getByText('This is a test product')).toBeInTheDocument();

    // Check if the price is rendered
    expect(screen.getByText('$99.99')).toBeInTheDocument();

    // Check if the image is rendered
    const imgElement = screen.getByAltText('Test Product');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement.src).toBe('https://via.placeholder.com/150');
  });

  test('allows changing the quantity', () => {
    renderWithContext(<ProductCard product={mockProduct} />);

    const quantityInput = screen.getByLabelText(/Qty:/);
    expect(quantityInput.value).toBe('1');

    fireEvent.change(quantityInput, { target: { value: '2' } });
    expect(quantityInput.value).toBe('2');
  });

  test('adds product to cart with the correct quantity', () => {
    const mockAddToCart = jest.fn();
    const mockContext = {
      addToCart: mockAddToCart,
    };

    jest
      .spyOn(React, 'useContext')
      .mockImplementation(() => mockContext);

    renderWithContext(<ProductCard product={mockProduct} />);

    const addToCartButton = screen.getByText(/Add to Cart/i);

    // Add 2 items to the cart
    fireEvent.change(screen.getByLabelText(/Qty:/), { target: { value: '2' } });
    fireEvent.click(addToCartButton);

    // Check if the addToCart function is called with correct arguments
    expect(mockAddToCart).toHaveBeenCalledWith({
      ...mockProduct,
      quantity: 2,
    });
  });
  test('prevents setting quantity below 1', () => {
    renderWithContext(<ProductCard product={mockProduct} />);
  
    const quantityInput = screen.getByLabelText(/Qty:/);
    expect(quantityInput.value).toBe('1'); // Initial value should be 1
  
    // Try to set the quantity to 0
    fireEvent.change(quantityInput, { target: { value: '0' } });
    expect(quantityInput.value).toBe('1'); // Value should remain 1
  
    // Try to set the quantity to a negative number
    fireEvent.change(quantityInput, { target: { value: '-1' } });
    expect(quantityInput.value).toBe('1'); // Value should remain 1
  });
  test('disables Add to Cart button for invalid quantity', () => {
    renderWithContext(<ProductCard product={mockProduct} />);
  
    const addToCartButton = screen.getByText(/Add to Cart/i);
    const quantityInput = screen.getByLabelText(/Qty:/);
  
    // Valid quantity, button should be enabled
    expect(addToCartButton).not.toBeDisabled();
  
    // Set invalid quantity (0)
    fireEvent.change(quantityInput, { target: { value: '0' } });
    expect(addToCartButton).toBeDisabled(); // Button should be disabled
  
    // Set invalid quantity (negative number)
    fireEvent.change(quantityInput, { target: { value: '-1' } });
    expect(addToCartButton).toBeDisabled(); // Button should be disabled
  
    // Set valid quantity (positive number)
    fireEvent.change(quantityInput, { target: { value: '2' } });
    expect(addToCartButton).not.toBeDisabled(); // Button should be enabled again
  });
});