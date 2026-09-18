import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { state } = useContext(CartContext);

  const totalCount = state.cart.reduce((sum, item) => sum + item.amount, 0);

  return (
    <nav className="navbar">
      <h2>useReducer</h2>
      <div className="nav-cart">
        <span className="cart-icon">🛒</span>
        <span id="nav-cart-item-count">{totalCount}</span>
      </div>
    </nav>
  );
}

export default Navbar;
