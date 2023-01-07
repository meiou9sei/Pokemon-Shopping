import React from "react";
import ProductDisplay from "./ProductDisplay";

export default function Store({ isInventoryLoaded, inventory, dispatch }) {
  return (
    <section>
      <h1>Pokemon for sell</h1>
      <ul className='products-display'>
        {!isInventoryLoaded && <div>loading...</div>}
        {isInventoryLoaded &&
          inventory.map((product) => (
            <ProductDisplay
              key={product.id}
              product={product}
              dispatch={dispatch}
            />
          ))}
      </ul>
    </section>
  );
}
