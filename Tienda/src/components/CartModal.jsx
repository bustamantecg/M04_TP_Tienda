import React from "react";
import { useCart } from "../context/CartContext";
import ResumenCart from "./ResumenCart";

const CartModal = ({ closeModal }) => {
  const {cart, getTotalImporte, getTotalCantidad, clearCart, removeFromCart } = useCart(); // Solo toma lo necesario del contexto
  return (
    <div className="fixed inset-0 bg-amber-100 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-black p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4 text-blue-500">🛒 Carrito de Compras</h2>
        
        {cart.length === 0 ? (
          <p className="text-gray-600">El carrito está vacío.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center border-b p-2 m-4 bg-amber-950">
                <span>{item.name} (x{item.quantity}) </span>
                <p>cnt: {item.quantity} x {item.price} = $ {item.quantity * item.price}</p>
                <div>
                  <button className="btn btn-sm btn-error" onClick={() => removeFromCart(item.id)}>
                    ❌
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4 flex justify-between">
          <button className="btn btn-secondary" onClick={clearCart}>
            Vaciar Carrito
          </button>
          <button className="btn btn-primary" onClick={closeModal}>
            Cerrar
          </button>
        </div>
        <ResumenCart 
          importe={getTotalImporte(cart)}
          cantidad= {getTotalCantidad(cart)}
        />
      </div>
    </div>
  );
};

export default CartModal;
