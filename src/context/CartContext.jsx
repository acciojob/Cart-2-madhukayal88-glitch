import React, { createContext, useReducer } from "react";

export const CartContext = createContext();

export const initialCart = [
  {
    id: 1,
    title: "Samsung Galaxy S7",
    price: 599.99,
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368215/phone-2_ohtt5s.png",
    amount: 1,
  },
  {
    id: 2,
    title: "google pixel ",
    price: 499.99,
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1583371867/phone-1_gvesln.png",
    amount: 1,
  },
  {
    id: 3,
    title: "Xiaomi Redmi Note 2",
    price: 699.99,
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368224/phone-3_h2s6fo.png",
    amount: 1,
  },
];

export function cartReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, amount: item.amount + 1 }
            : item
        ),
      };

    case "DECREMENT":
      return {
        ...state,
        cart: state.cart
          .map((item) =>
            item.id === action.payload
              ? { ...item, amount: item.amount - 1 }
              : item
          )
          .filter((item) => item.amount > 0),
      };

    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case "CLEAR":
      return { ...state, cart: [] };

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { cart: initialCart });
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
