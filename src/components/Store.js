import React, { useState } from "react";
import ProductDisplay from "./ProductDisplay";
import { StoreFilter } from "./StoreFilter";

export default function Store({ isInventoryLoaded, inventory, dispatch }) {
  const [checkedTypes, setCheckedTypes] = useState([]);
  return (
    <section>
      <div className='store-header'>
        <h1>Pokemon for sell</h1>
      </div>
      <div className='store-display'>
        <StoreFilter
          checkedTypes={checkedTypes}
          setCheckedTypes={setCheckedTypes}
        />
        <ul className='products-display'>
          {!isInventoryLoaded && <div>loading...</div>}
          {isInventoryLoaded &&
            inventory
              .filter((product) =>
                checkedTypes.every((el) => product.type.includes(el))
              )
              .map((product) => (
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
