import React from "react";
import ProductDisplay from "./ProductDisplay";
import { StoreFilter } from "./StoreFilter";

export default function Store({ isInventoryLoaded, inventory, dispatch }) {
  return (
    <section>
      <div className='store-header'>
        <h1>Pokemon for sell</h1>
      </div>
      <div className='store-display'>
        <StoreFilter />
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
      </div>
    </section>
  );
}
