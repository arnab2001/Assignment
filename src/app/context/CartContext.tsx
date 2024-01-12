"use client";
import React, { createContext, useState } from "react";
import { Movie } from "../types/Movie";

interface CartContextValue {
  items: Movie[];
  addItem: (movie: Movie) => void;
  removeItem: (movie: Movie) => void;
  clearCart: () => void;
  getNumberOfItems: () => number;
  getTotalCartValue: () => number;
}

export const CartContext = createContext<CartContextValue>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
  getNumberOfItems: () => 0,
  getTotalCartValue: () => 0,
});

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<Movie[]>([]);
  console.log(cartItems);
  const handleAddItem = (movie: Movie) => {
    const isMovieInCart = cartItems.some((item) => item.title === movie.title);

    if (!isMovieInCart) {
      setCartItems((prevItems) => [...prevItems, movie]);
    }
  };

  const handleRemoveItem = (movie: Movie) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== movie.id)
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };
  const getNumberOfItems = () => {
    return cartItems.length;
  };
  const getTotalCartValue = () => {
    return cartItems.reduce((total, movie) => total + movie.price, 0);
  };

  const value = {
    items: cartItems,
    addItem: handleAddItem,
    removeItem: handleRemoveItem,
    clearCart: handleClearCart,
    getNumberOfItems,
    getTotalCartValue,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
