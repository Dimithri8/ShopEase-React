import { Button } from "@mui/material";
import "./Cart.css";
import CartItem from "../../components/CartItem/CartItem";
import { useEffect, useReducer } from "react";

export default function Cart() {
  useEffect(() => {
    async function getProducts() {
      const response = await fetch(`http://localhost:3001/cart`);
      const data = await response.json();
      const productsWithQty = data.map((item) => ({
        ...item,
        qty: item.qty || 1,
      }));

      dispatch({ type: "initial_cart", payload: productsWithQty });
    }
    getProducts();
  }, []);

  function reducer(state, action) {
    switch (action.type) {
      case "initial_cart": {
        return action.payload;
      }
      case "increment_qty": {
        return state.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      case "decrement_qty": {
        return state
          .map((item) => {
            if (item.id === action.payload.id) {
              const newQty = item.qty - 1;
              return newQty > 0 ? { ...item, qty: newQty } : null;
            } else {
              return item;
            }
          })
          .filter(Boolean);
      }
      case "remove_item": {
        return state.filter((item) => item.id != action.payload.id);
      }
      case "clear_cart": {
        return [];
      }
    }
  }

  const [cart, dispatch] = useReducer(reducer, []);

  const totalPrice = cart.reduce((total, item) => {
    return Math.round((total + item.price * item.qty) * 100) / 100;
  }, 0);

  return (
    <>
      <div className="cart-container">
        <div className="cart-items-container">
          <h1>My Cart</h1>
          <ul className="cart-items-wrapper">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <CartItem product={item} dispatch={dispatch} />
              </li>
            ))}
          </ul>
          <div className="cart-btns-container">
            <Button
              fullWidth
              type="button"
              variant="outlined"
              onClick={() => dispatch({ type: "clear_cart" })}
            >
              Clear Cart
            </Button>
            <Button fullWidth type="button" variant="contained">
              Pay ${totalPrice}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
