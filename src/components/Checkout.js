import { useEffect, useState } from "react";
import { ACTIONS } from "../cartLogic";
import CheckoutItem from "./CheckoutItem";

export default function Checkout({ cart, dispatch }) {
  const [totalPrice, setTotalPrice] = useState(calculateTotalPrice());
  useEffect(() => {
    if (!isOrderPlaced) {
      const newTotalPrice = calculateTotalPrice();
      setTotalPrice(newTotalPrice);
    }
  }, [cart]);
  function calculateTotalPrice() {
    const newTotalPrice = () =>
      cart.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.price * currentValue.quantity,
        0
      );
    return newTotalPrice;
  }
  const [isOrderPlaced, setIsOrderPlaced] = useState(true);
  // set isOrderPlaced to false each time checkout loaded
  useEffect(() => {
    setIsOrderPlaced(false);
  }, []);
  const placeOrder = () => {
    setIsOrderPlaced(true);
    dispatch({
      type: ACTIONS.CLEAR_CART,
      payload: {},
    });
  };

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
              <button onClick={placeOrder}>Place your order</button>
            </div>
          </div>
        )) ||
          (isOrderPlaced && (
            <p>
              sorry we take cash only, please buy at our physical location 💀
            </p>
          )) || <p>your cart is empty. go add some pokemon</p>}
      </div>
    </section>
  );
}
