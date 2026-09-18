import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";

function Cart() {
  const { state, dispatch } = useContext(CartContext);
  const { cart } = state;

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.amount,
    0
  );

  if (cart.length === 0) {
    return <p className="empty-cart">Cart is currently empty</p>;
  }

  return (
    <div className="cart-container">
      <ul id="cart-items-list">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>

      <div className="cart-footer">
        <button
          id="clear-all-cart"
          onClick={() => dispatch({ type: "CLEAR" })}
        >
          Clear Cart
        </button>

        <h3 id="cart-total-amount">Total: ${totalAmount.toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default Cart;
