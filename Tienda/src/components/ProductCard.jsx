import React from "react";

const ProductCard = ({ producto, addToCart }) => {
  return (
    <div className="card w-60 bg-base-100 shadow-xl m-2">
      <div className="card-body">
        <h2 className="card-title">{producto.name}</h2>
        <p>Precio: ${producto.price}</p>
        <button className="btn btn-primary" onClick={() => addToCart(producto)}>
          🛒 Agregar
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

