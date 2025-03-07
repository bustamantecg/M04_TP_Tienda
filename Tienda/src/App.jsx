import React, { useState, useEffect } from 'react';

import './index.css'
import Header from './components/Header'
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('light');
  const [cart, setCart] = useState([]);
  const products = [
    { id: 1, name: 'Producto 1', price: 10 },
    { id: 2, name: 'Producto 2', price: 20 },
    { id: 3, name: 'Producto 3', price: 30 },
    { id: 4, name: 'Producto 4', price: 170 },
  ];

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  return (
    <>      
    <div className={`App ${theme}`}>
      <Header toggleTheme={toggleTheme} />
      <div className="flex flex-wrap justify-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <Footer theme={theme}/>
    </div>
    </>
  )
}

export default App
