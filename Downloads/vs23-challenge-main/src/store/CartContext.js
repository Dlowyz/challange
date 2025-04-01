import React, { useState } from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  updateCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setCartAmount] = useState(0);
  const updateCart = (updatedItems) => {
    setCartItems(updatedItems);
    console.log("updateCart called:", updatedItems);
  };
  const updateCartAmount = (updated) => {
    setCartAmount(updated);

  };

  const value = {
    items: cartItems,
    totalAmount: totalAmount,
    updateCartAmount,
    updateCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContext;
