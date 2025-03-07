import React from 'react'

const ProductCard = ({ product, addToCart }) => {
    return (
      <div className="card w-60 bg-base-100 shadow-xl m-2">
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <p>Precio: ${product.price}</p>
          <button className="btn btn-primary" onClick={() => addToCart(product)}>
            <i className="bi bi-cart-plus"></i>
          </button>
        </div>
      </div>
    );
  };

export default ProductCard