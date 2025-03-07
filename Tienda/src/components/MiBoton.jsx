import React from 'react'

const MiBoton = () => {
    const manejarClick = () => {
      alert('¡Botón presionado!');
    };
  
    return (
      <div>
          MiBoton
          <button 
            className="btn btn-primary" 
            onClick={manejarClick}
          >
            Button
          </button>
      </div>
    );
  }  

  export default MiBoton;