import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartItem({ item }) {
  const { dispatch } = useContext(CartContext);

  return (
    <li className="cart-item">
      <img src={item.img} alt={item.title} width="80" />
      <div className="item-info">
        <h4>{item.title}</h4>
        <span id={`cart-item-price-${item.id}`}>${item.price}</span>
      </div>

      <div className="qty-controls">
        <button
          id={`decrement-btn-${item.id}`}
          onClick={() => dispatch({ type: "DECREMENT", payload: item.id })}
        >
          -
        </button>

        <span id={`cart-amount-${item.id}`}>{item.amount}</span>

        <button
          id={`increment-btn-${item.id}`}
          onClick={() => dispatch({ type: "INCREMENT", payload: item.id })}
        >
          +
        </button>
      </div>

      <button
        className="remove-btn"
        onClick={() => dispatch({ type: "REMOVE", payload: item.id })}
      >
        Remove
      </button>
    </li>
  );
}

export default CartItem;
