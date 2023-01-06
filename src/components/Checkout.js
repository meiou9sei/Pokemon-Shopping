import React from "react";

export default function Checkout({ cart }) {
  console.log(cart);
  return (
    <section>
      <h1>Your Cart</h1>
      <p>here's all the pokemon you're gonna buy</p>
      <div className='checkout-cart'>
        {cart.length === 0 && <p>your cart is empty. go add some pokemon</p>}
      </div>
    </section>
  );
}
