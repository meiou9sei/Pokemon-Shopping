import React, { useEffect } from "react";
import { useState } from "react";

export const SearchProduct = ({
  isInventoryLoaded,
  inventory,
  inventoryCount,
}) => {
  const [sortedInventory, setSortedInventory] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  function sortProductsAlphabetically(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  useEffect(() => {
    setSortedInventory(inventory);
  }, [isInventoryLoaded]);

  useEffect(() => {
    setSortedInventory(inventory.sort(sortProductsAlphabetically));
  }, [isInventoryLoaded]);

  return (
    <div className='search-product-bar'>
      <input
        type='text'
        placeholder='Search...'
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className='search-results-container'>
        <div className='search-bar-top'>
          <p className='results-count'>{} result(s)</p>
        </div>
        <div className='search-bar-bottom'>
          <ul className='search-results'>
            {sortedInventory
              .filter((item) => {
                if (searchTerm == "") {
                  return;
                } else if (item.name.includes(searchTerm.toLowerCase())) {
                  return item;
                }
              })
              .slice(0, 4)
              .map((item) => {
                return (
                  <li className='search-result-item' key={item.id}>
                    {item.name}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};
