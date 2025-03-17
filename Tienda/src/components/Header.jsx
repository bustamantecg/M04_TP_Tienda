import { useState } from "react";
import { useCart } from "../context/CartContext";
import CartModal from "./CartModal";

const Header = ({ toggleTheme }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { cart, removeFromCart, clearCart} = useCart();

  return (
    <div className="p-4 bg-gray-800 text-white flex justify-between items-center">
      <h1 className="text-xl">La Tienda</h1>

      <div className="indicator">
        <span className="indicator-item badge badge-secondary">({cart.reduce((total, item) => total + item.quantity, 0)})</span>
        <button className="btn btn-primary"
          onClick={() => setModalOpen(true)}
        >🛒 Mi Carrito</button>
      </div>
      <button className="btn btn-secondary" onClick={toggleTheme}>
        Cambiar Tema
      </button>

      {isModalOpen && (
        <CartModal
          closeModal={() => setModalOpen(false)}
          removeFromCart={(id) => removeFromCart(id)}
          clearCart={clearCart}
       />
      )}
    </div>
  );
};

export default Header;
/*
 removeFromCart={(id) => removeFromCart(id)}
 clearCart={clearCart}
*/