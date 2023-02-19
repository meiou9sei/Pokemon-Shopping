import { useState, useEffect } from "react";
import PokemonDB from "./data/PokemonDb.json";

const useFetchInventory = () => {
  const [storeInventory, setStoreInventory] = useState([]);
  const [isInventoryLoaded, setIsInventoryLoaded] = useState(false);
  const [inventoryCount, setInventoryCount] = useState(0);

  useEffect(function fetchInventory() {
    fetchData(PokemonDB.pokemon);
  }, []);

  function fetchData(listing) {
    setStoreInventory(listing);
    setIsInventoryLoaded(true);
    setInventoryCount(listing.length);
  }

  return {
    storeInventory,
    isInventoryLoaded,
    inventoryCount,
  };
};

export default useFetchInventory;
