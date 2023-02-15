import { useState, useEffect } from "react";

const CURRMAXPOKEMON = 1008;
const AMOUNTTOFETCH = 151;

const useFetchInventory = () => {
  const [storeInventory, setStoreInventory] = useState([]);
  const [isInventoryLoaded, setIsInventoryLoaded] = useState(false);

  useEffect(function fetchInventory() {
    fetchData(AMOUNTTOFETCH);
  }, []);

  async function fetchData(amountToFetch) {
    const dataArray = [];
    for (let pokemonId = 1; pokemonId < amountToFetch + 1; pokemonId++) {
      const data = await fetchPokemon(pokemonId);
      dataArray.push(data);
    }
    setStoreInventory(dataArray);
    setIsInventoryLoaded(true);
  }

  // fetches pokemon name and image
  async function fetchPokemon(pokemonId) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    if (!res.ok) {
      throw new Error("cannot fetch data");
    }
    const data = await res.json();
    const dataObj = {
      id: pokemonId,
      name: data.name,
      image: data.sprites.other["official-artwork"].front_default,
      price: Math.floor(Math.random() * 999),
      type: [...data.types.map((index) => index.type.name)],
    };
    return dataObj;
  }

  return {
    storeInventory,
    isInventoryLoaded,
  };
};

export default useFetchInventory;
