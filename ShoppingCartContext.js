import React, { createContext, useReducer, useContext } from 'react';

const ShoppingCartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];
    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.payload.id);
    default:
      return state;
  }
};

export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, []);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const removeFromCart = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  };

  return (
    <ShoppingCartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => useContext(ShoppingCartContext);