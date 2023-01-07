import { useState } from "react";
import { ACTIONS } from "../App";

export default function ProductDisplay({ product, dispatch }) {
  const [amountToAdd, setAmountToAdd] = useState(1);
  function incrementCount() {
    setAmountToAdd((prevCount) => prevCount + 1);
  }
  function decrementCount() {
    // prevent user from going below 1
    setAmountToAdd((prevCount) => (prevCount <= 1 ? prevCount : prevCount - 1));
  }
  return (
    <li className='product-listing'>
      {" "}
      <div className='product-header'>
        <h2 className='product-name'>{product.name}</h2>
        <p className='product-price'>${product.price}</p>
      </div>
      <img src={product.image} alt={product.name} className='product-image' />
      <div className='add-to-cart-menu'>
        <button
          className='add-to-cart-button'
          onClick={() =>
            dispatch({
              type: ACTIONS.ADD_ITEM,
              payload: { product, amountToAdd },
            })
          }
        >
          Add to cart
        </button>
        <div className='amount-to-add'>
          <button className='less' onClick={decrementCount}>
            -
          </button>
          {amountToAdd}
          <button className='more' onClick={incrementCount}>
            +
          </button>
        </div>
      </div>
    </li>
  );
}
