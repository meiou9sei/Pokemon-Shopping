import { Link } from "react-router-dom";
import React from "react";
import { SearchProduct } from "./SearchProduct";
import { useState } from "react";

export default function Navbar({ inventory, isInventoryLoaded }) {
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  return (
    <nav>
      <div className='nav-content-wrapper'>
        <p>broke pokemart</p>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/store'>Store</Link>
          </li>
          <li>
            <Link to='/cart'>Cart</Link>
          </li>
          <li>
            <button
              onClick={() => {
                setIsSearchBarVisible(!isSearchBarVisible);
              }}
            >
              ClickToSearch
            </button>
          </li>
        </ul>
      </div>
      {isSearchBarVisible && (
        <SearchProduct
          inventory={inventory}
          isInventoryLoaded={isInventoryLoaded}
          setIsSearchBarVisible={setIsSearchBarVisible}
        />
      )}
    </nav>
  );
}
