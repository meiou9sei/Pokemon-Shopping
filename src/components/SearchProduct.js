import React from "react";

export const SearchProduct = () => {
  return (
    <div className='search-product-bar'>
      <input type='text' placeholder='Search...' />
      <div className='search-results-container'>
        <div className='search-bar-top'>
          <p className='results-count'>{} result(s)</p>
        </div>
        <div className='search-bar-bottom'>
          <ul className='search-results'>
            <li>product 1</li>
            <li>product 2</li>
            <li>product 3</li>
            <li>product 4</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
