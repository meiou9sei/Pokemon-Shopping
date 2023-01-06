import React from "react";

export default function Store({ isInventoryLoaded, inventory }) {
  return (
    <section>
      <h1>Pokemon for sell</h1>
      <ul className='products-display'>
        {!isInventoryLoaded && <div>loading...</div>}
        {isInventoryLoaded &&
          inventory.map((product) => (
            <li key={product.id} className='product-listing'>
              {" "}
              <div className='product-header'>
                <h2 className='product-name'>{product.name}</h2>
                <p className='product-price'>${product.price}</p>
              </div>
              <img
                src={product.image}
                alt={product.name}
                className='product-image'
              />
              <div className='add-to-cart-menu'>
                <button className='add-to-cart-button'>Add to cart</button>
                <div className='amount-to-add'>
                  <span className='less'>-</span> numHere{" "}
                  <span className='more'>+</span>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
}
