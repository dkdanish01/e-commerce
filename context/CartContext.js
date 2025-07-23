// context/CartContext.js
import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false); // ✅ Track if localStorage loaded

  // ✅ Load cart from localStorage once on mount (client side only)
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
    setIsLoaded(true); // ✅ Now cart is ready
  }, []);

  // ✅ Always sync cartItems to localStorage
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }
  }, [cartItems, isLoaded]);

  const addToCart = (product, selectedSize) => {
    const existingIndex = cartItems.findIndex(
      item => item.slug === product.slug && item.size === selectedSize
    );

    let updatedCart = [...cartItems];

    if (existingIndex > -1) {
      updatedCart[existingIndex].quantity += 1;
    } else {
      updatedCart.push({ ...product, size: selectedSize, quantity: 1 });
    }

    setCartItems(updatedCart);
  };

  const removeFromCart = (slug, size) => {
    const updatedCart = cartItems.filter(
      item => !(item.slug === slug && item.size === size)
    );
    setCartItems(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, isLoaded }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
