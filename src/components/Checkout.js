import { ACTIONS } from "../cartLogic";

export default function Checkout({ cart, dispatch }) {
  return (
    <section>
      <h1>Your Cart</h1>
      <p>here's all the pokemon you're gonna buy</p>
      <ul className='checkout-cart'>
        {cart.length === 0 && <p>your cart is empty. go add some pokemon</p>}
        {cart.length >= 1 &&
          cart.map((product) => (
            <li key={product.id} className='cart-item'>
              <h2 className='cart-item-name'>{product.name}</h2>
              <img
                src={product.image}
                alt={product.name}
                className='cart-item-image'
              />
              <p>
                {product.quantity} at ${product.price} each
              </p>
              <button
                className='remove-item-button'
                onClick={() =>
                  dispatch({
                    type: ACTIONS.REMOVE_ITEM,
                    payload: { product },
                  })
                }
              >
                Remove Item
              </button>
            </li>
          ))}
      </ul>
    </section>
  );
}
