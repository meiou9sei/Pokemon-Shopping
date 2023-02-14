import { useState, useEffect } from "react";

const MAXPOKEMON = 905;
const AMOUNTTOFETCH = 20;

const useFetchInventory = () => {
  const [storeInventory, setStoreInventory] = useState([]);
  useEffect(function fetchInventory() {
    fetchData(AMOUNTTOFETCH);
  }, []);
  const [isInventoryLoaded, setIsInventoryLoaded] = useState(false);

  async function fetchData(amountToFetch) {
    const dataArray = [];
    const usedPokemon = [];
    for (let i = 0; i < amountToFetch; i++) {
      let pokemonId = getRandomIntInclusive(1, MAXPOKEMON);
      // prevents duplicates
      while (usedPokemon.includes(pokemonId)) {
        pokemonId = getRandomIntInclusive(1, MAXPOKEMON);
      }
      usedPokemon.push(pokemonId);
      const data = await fetchPokemon(pokemonId);
      dataArray.push(data);
    }
    setStoreInventory(dataArray);
    setIsInventoryLoaded(true);
  }

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

  // fetches random pokemon name and image
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
