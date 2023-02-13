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

export const StoreFilter = ({ checkedTypes, setCheckedTypes }) => {
  const [disableTypeCheckboxes, setDisableTypeCheckboxes] = useState(false);
  // keeps track of what types are checked
  const handleCheck = (e) => {
    const typeToCheck = e.target.name;
    setCheckedTypes((prevState) => {
      if (prevState.includes(typeToCheck)) {
        return [...prevState.filter((type) => type !== typeToCheck)];
      } else return [...prevState, e.target.name];
    });
  };
  // limit to max 2 types selectable in filter
  useEffect(() => {
    if (checkedTypes.length >= 2) {
      setDisableTypeCheckboxes(true);
    } else setDisableTypeCheckboxes(false);
  }, [checkedTypes]);

  return (
    <div className='store-filter'>
      <h2>Filters</h2>
      <h3>Type</h3>
      <div className='types-container'>
        {pokemonTypes.map((type) => (
          <div key={type} className='type-input'>
            <input
              type='checkbox'
              name={`${type}`}
              id={`${type}`}
              onChange={handleCheck}
              disabled={!checkedTypes.includes(type) && disableTypeCheckboxes}
            />
            <label htmlFor={type}>{type}</label>
          </div>
        ))}
      </div>
    </div>
  );
};
