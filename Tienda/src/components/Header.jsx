import React, { useState, useEffect } from 'react';

// Componente para el encabezado
const Header = ({ toggleTheme }) => {
  return (
    <header className="p-4 bg-gray-800 text-white flex justify-between items-center">
      <h1 className="text-xl">Mi Tienda</h1>
      <button className="btn btn-secondary" onClick={toggleTheme}>
        Cambiar Tema
      </button>
    </header>
  );
};

export default Header