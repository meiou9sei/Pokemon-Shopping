import React from "react";

export default function Checkout({ cart }) {
  return (
    <section>
      <h1>Your Cart</h1>
      <p>here's all the pokemon you're gonna buy</p>
      <ul className='checkout-cart'>
        {cart.length === 0 && <p>your cart is empty. go add some pokemon</p>}
        {cart.length >= 1 &&
          cart.map((item) => (
            <li key={item.id} className='cart-item'>
              <h2 className='cart-item-name'>{item.name}</h2>
              <img
                src={item.image}
                alt={item.name}
                className='cart-item-image'
              />
              <p>
                {item.quantity} at ${item.price} each
              </p>
              <button className='remove-item-button'>Remove Item</button>
            </li>
          ))}
      </ul>
    </section>
  );
}
