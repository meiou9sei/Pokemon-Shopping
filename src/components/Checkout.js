import { useEffect, useState } from "react";
import { ACTIONS } from "../cartLogic";
import CheckoutItem from "./CheckoutItem";

export default function Checkout({ cart, dispatch }) {
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const newTotalPrice = cart.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.price * currentValue.quantity,
      0
    );
    setTotalPrice(newTotalPrice);
  }, [cart]);

  return (
    <section>
      <h1>Your Cart</h1>
      <p>here's all the pokemon you're gonna buy</p>
      <div className='checkout-cart'>
        <h2>Order summary:</h2>
        {(cart.length >= 1 && (
          <div className='active-cart'>
            <ul>
              {cart.map((product) => (
                <CheckoutItem
                  key={product.id}
                  product={product}
                  dispatch={dispatch}
                  ACTIONS={ACTIONS}
                />
              ))}
            </ul>
            <div className='checkout-bottom'>
              <h2>Order total: ${totalPrice}</h2>
              <button>Place your order</button>
            </div>
          </div>
        )) || <p>your cart is empty. go add some pokemon</p>}
      </div>
    </section>
  );
}
