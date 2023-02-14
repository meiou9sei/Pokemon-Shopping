import React, { useEffect, useState } from "react";
import ProductDisplay from "./ProductDisplay";
import { StoreFilter } from "./StoreFilter";

export default function Store({ isInventoryLoaded, inventory, dispatch }) {
  const [filter, setFilter] = useState({});
  const [inventoryToDisplay, setInventoryToDisplay] = useState(inventory);
  useEffect(
    function filterInventoryDisplay() {
      let filterExists = false;
      // check if non-empty string exists on filter
      for (const subFilter of Object.values(filter)) {
        if (subFilter !== "") {
          filterExists = true;
        }
      }

      let filteredInventory = inventory;
      if (filterExists) {
        filteredInventory = inventory.filter((product) => {
          for (const property in filter) {
            if (filter[property]) {
              return product[property].includes(filter[property]);
            }
          }
        });
      }
      setInventoryToDisplay(filteredInventory);
    },
    [isInventoryLoaded, filter]
  );

  return (
    <section>
      <div className='store-header'>
        <h1>Pokemon for sell</h1>
      </div>
      <div className='store-display'>
        <StoreFilter filter={filter} setFilter={setFilter} />
        <ul className='products-display'>
          {!isInventoryLoaded && <div>loading...</div>}
          {(isInventoryLoaded &&
            inventoryToDisplay.length > 0 &&
            inventoryToDisplay.map((product) => (
              <ProductDisplay
                key={product.id}
                product={product}
                dispatch={dispatch}
              />
            ))) || <p>Pokemon of that category is currently unavailable</p>}
        </ul>
      </div>
    </section>
  );
}
