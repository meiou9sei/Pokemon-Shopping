import { useState, useEffect } from "react";
import PokemonDB from './data/PokemonDb.json'

const useFetchInventory = () => {
  const [storeInventory, setStoreInventory] = useState([]);
  const [isInventoryLoaded, setIsInventoryLoaded] = useState(false);

  useEffect(function fetchInventory() {
    fetchData(PokemonDB.pokemon);
  }, []);

  function fetchData(listing) {
    setStoreInventory(listing);
    setIsInventoryLoaded(true);
  }

  return {
    storeInventory,
    isInventoryLoaded,
  };
};

export default useFetchInventory;
