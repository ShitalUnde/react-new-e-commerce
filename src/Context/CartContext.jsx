import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  
  useEffect(() => {
console.log(  `cartItems`, cartItems)
  },[cartItems])

  return (
    <CartContext.Provider value={{ cartItems , setCartItems}}>
      {children}
    </CartContext.Provider>
  );
};
