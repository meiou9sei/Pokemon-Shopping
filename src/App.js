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
  const [cart, dispatch] = useReducer(reducer, []);
  const { isInventoryLoaded, storeInventory } = useFetchInventory();

  return (
    <div className='App'>
      <div>In your cart: {JSON.stringify(cart)}</div>
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
                  dispatch={dispatch}
                />
              }
            />
            <Route
              path='/cart'
              element={<Checkout cart={cart} dispatch={dispatch} />}
            />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
