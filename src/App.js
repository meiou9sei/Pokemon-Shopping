import { Routes, Route } from "react-router-dom";
import { useState, useReducer } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Store from "./components/Store";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";

import useFetchInventory from "./useFetchInventory";
import reducer from "./cartLogic";

function App() {
  const [ghostCart, dispatch] = useReducer(reducer, []);
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
      <div>In your cart: {JSON.stringify(ghostCart)}</div>
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
                  dispatch={dispatch}
                />
              }
            />
            <Route
              path='/cart'
              element={<Checkout cart={cart} setCart={setCart} />}
            />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
