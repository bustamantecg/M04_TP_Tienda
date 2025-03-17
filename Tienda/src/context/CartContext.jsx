import { createContext, useContext, useEffect, useState } from "react";

// Creamos el contexto
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true); // Nuevo estado

// Cargar carrito desde localStorage al iniciar
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCart(storedCart);
    }
    setLoading(false); // Marcar como cargado
  }, []);
  
  useEffect(() => {
    if (!loading) { // Solo guardar cuando no esté cargando
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, loading]);


  const addToCart = (producto) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find((item) => item.id === producto.id);
      if (itemExists) {
        return prevCart.map((item) =>
          item.id === producto.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...producto, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalImporte = (cart) => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getTotalCantidad= (cart) => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, getTotalImporte, getTotalCantidad }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook para usar el contexto del carrito
export const useCart = () => {
  return useContext(CartContext);
};
