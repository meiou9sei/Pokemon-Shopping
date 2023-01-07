import { useState } from "react";

export default function ProductDisplay({ product }) {
  const [amountToAdd, setAmountToAdd] = useState(1);
  function incrementCount() {
    setAmountToAdd((prevCount) => prevCount + 1);
  }
  function decrementCount() {
    // prevent user from going below 1
    setAmountToAdd((prevCount) => (prevCount <= 1 ? prevCount : prevCount - 1));
  }
  return (
    <li key={product.id} className='product-listing'>
      {" "}
      <div className='product-header'>
        <h2 className='product-name'>{product.name}</h2>
        <p className='product-price'>${product.price}</p>
      </div>
      <img src={product.image} alt={product.name} className='product-image' />
      <div className='add-to-cart-menu'>
        <button className='add-to-cart-button'>Add to cart</button>
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
