import React from "react";
import ProductCard from "./ProductCard";
import { useCart } from "../context/CartContext";

const ProductoListado = ({ productos }) => {
  const { addToCart } = useCart();

  return (
    <div className="flex flex-wrap justify-center">
      {productos.map((producto) => (
        <ProductCard key={producto.id} producto={producto} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductoListado;
