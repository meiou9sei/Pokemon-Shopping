import React, { useEffect } from "react";
import { useState } from "react";
import ProductDisplay from "./ProductDisplay";
import { Link } from "react-router-dom";

export const SearchProduct = ({
  isInventoryLoaded,
  inventory,
  setIsSearchBarVisible,
}) => {
  const [sortedInventory, setSortedInventory] = useState([]);
  const [filteredSortedInventory, setFilteredSortedInventory] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setSortedInventory(inventory.sort(sortProductsAlphabetically));
  }, [isInventoryLoaded]);

  useEffect(() => {
    setFilteredSortedInventory(
      sortedInventory.filter((item) => {
        if (searchTerm == "") {
          return;
        } else if (item.name.includes(searchTerm.toLowerCase())) {
          return item;
        }
      })
    );
  }, [searchTerm]);

  function sortProductsAlphabetically(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  function clearClickToSearch() {
    setSearchTerm("");
    hideSearchBar();
  }

  function hideSearchBar() {
    setIsSearchBarVisible(false);
  }

  return (
    <div className='search-product-bar'>
      <input
        type='text'
        placeholder='Search...'
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className='search-results-container'>
        <div className='search-bar-top'>
          <p className='results-count'>
            {filteredSortedInventory.length > 0 &&
              `${filteredSortedInventory.length} result(s)`}
          </p>
        </div>
        <div className='search-bar-bottom'>
          <ul className='search-results'>
            {filteredSortedInventory.slice(0, 4).map((item) => {
              return (
                <li
                  className='result-product-wrapper'
                  key={item.id}
                  onClick={clearClickToSearch}
                >
                  <ProductDisplay
                    className='search-result-item'
                    product={item}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
