import React from "react";

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

export const StoreFilter = () => {
  return (
    <div className='store-filter'>
      <h2>Filters</h2>
      <h3>Type</h3>
      <div className='types-container'>
        {pokemonTypes.map((type) => (
          <div key={type} className='type-input'>
            <input type='checkbox' name={`${type}`} id={`${type}`} />
            <label htmlFor={type}>{type}</label>
          </div>
        ))}
      </div>
    </div>
  );
};
