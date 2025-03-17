import React, { useState, useEffect } from 'react';
import {CartProvider} from './context/CartContext';
import './index.css'
import Header from './components/Header'
import Footer from './components/Footer';
import ProductoListado from './components/ProductoListado';


const productos = [
  { id: 1, name: 'Cree led 55w', price: 83000 },
  { id: 2, name: 'Emulador luz trailer', price: 30000 },
  { id: 3, name: 'Enganche Braco Fiat Toro', price: 285000 },
  { id: 4, name: 'Juego conector enganche', price: 21000 },
  { id: 5, name: 'Lona Fiat Toro', price: 380000 },
  { id: 6, name: 'Enganche Braco Fiat Toro', price: 285000 },
  { id: 7, name: 'Juego conector enganche', price: 21000 },
  { id: 8, name: 'Lona Amarok', price: 560000 },
];

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <CartProvider>
      <div className={`App ${theme}`}>
        <Header toggleTheme={toggleTheme} />
        <ProductoListado productos={productos} />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App
