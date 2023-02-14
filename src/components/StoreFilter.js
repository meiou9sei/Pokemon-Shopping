import React, { useEffect, useState } from "react";

const pokemonTypes = [
  "bug",
  "dark",
  "dragon",
  "electric",
  "fairy",
  "fighting",
  "fire",
  "flying",
  "ghost",
  "grass",
  "ground",
  "ice",
  "normal",
  "poison",
  "psychic",
  "rock",
  "steel",
  "water",
];

export const StoreFilter = ({ filter, setFilter }) => {
  // keeps track of what types are checked
  const handleFilterSelect = (e) => {
    filter.type !== e.target.value
      ? setFilter({ ...filter, type: e.target.value })
      : setFilter({ ...filter, type: "" });
  };

  return (
    <div className='store-filter'>
      <h2>Filters</h2>
      <h3>Type</h3>
      <ul className='types-container'>
        {pokemonTypes.map((type) => (
          <li key={type} className='type-input'>
            <button type='button' value={type} onClick={handleFilterSelect}>
              {type}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
