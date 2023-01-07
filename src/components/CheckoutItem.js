export default function CheckoutItem({ product, dispatch, ACTIONS }) {
  return (
    <li className='cart-item'>
      <h2 className='cart-item-name'>{product.name}</h2>
      <img src={product.image} alt={product.name} className='cart-item-image' />
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
  );
}
