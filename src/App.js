import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Store from "./components/Store";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";

import useFetchInventory from "./useFetchInventory";
import useCart from "./useCart";

function App() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "bulbasaur",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      price: 187,
      quantity: 7,
    },
  ]);
  const { isInventoryLoaded, storeInventory } = useFetchInventory();

  return (
    <div className='App'>
      <main>
        <Navbar />
        <div className='page-wrapper'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route
              path='/store'
              element={
                <Store
                  isInventoryLoaded={isInventoryLoaded}
                  inventory={storeInventory}
                  cart={cart}
                  setCart={setCart}
                  useCart={useCart}
                />
              }
            />
            <Route
              path='/cart'
              element={
                <Checkout
                  cart={cart}
                  cart={cart}
                  setCart={setCart}
                  useCart={useCart}
                />
              }
            />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
