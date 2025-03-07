import React from 'react';

const Footer = ({ theme }) => {
  return (
    <footer className={`p-4 bg-gray-800 text-white text-center flex justify-center items-center ${theme}`} style={{ position: 'fixed', bottom: 0, width: '100%' }}>
    
      <div className="container">
        <h2 className="mb-4">Copyright © 2023 Mi Tienda. Todos los derechos reservados.</h2>
        <p className="mt-2">bustamantecg@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;