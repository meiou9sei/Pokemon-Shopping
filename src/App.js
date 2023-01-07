import { Routes, Route } from "react-router-dom";
import { useState, useReducer } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Store from "./components/Store";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";

import useFetchInventory from "./useFetchInventory";

export const ACTIONS = {
  ADD_ITEM: "addItem",
  REMOVE_ITEM: "removeItem",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_ITEM:
      return [...state, newItem(action.payload)];
    case ACTIONS.REMOVE_ITEM:
      return state - 1;
    default:
      return state;
  }
}

function newItem(payload) {
  return { id: payload.id, name: payload.name };
}

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
      <div>{JSON.stringify(ghostCart)}</div>
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
