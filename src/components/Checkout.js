import React from "react";

export default function Checkout({ cart }) {
  return (
    <section>
      <h1>Your Cart</h1>
      <p>here's all the pokemon you're gonna buy</p>
      <div className='checkout-cart'></div>
    </section>
  );
}
