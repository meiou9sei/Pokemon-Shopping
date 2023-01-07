import { ACTIONS } from "../cartLogic";
import CheckoutItem from "./CheckoutItem";

export default function Checkout({ cart, dispatch }) {
  return (
    <section>
      <h1>Your Cart</h1>
      <p>here's all the pokemon you're gonna buy</p>
      <ul className='checkout-cart'>
        {cart.length === 0 && <p>your cart is empty. go add some pokemon</p>}
        {cart.length >= 1 &&
          cart.map((product) => (
            <CheckoutItem
              key={product.id}
              product={product}
              dispatch={dispatch}
              ACTIONS={ACTIONS}
            />
          ))}
      </ul>
    </section>
  );
}
