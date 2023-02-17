import { Routes, Route } from "react-router-dom";
import { useReducer } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Checkout from "./pages/Checkout";
import Footer from "./components/Footer";

import useFetchInventory from "./useFetchInventory";
import reducer from "./cartLogic";

function App() {
  // check localStorage if userCart exists
  let localCart;
  try {
    localCart = JSON.parse(localStorage.getItem("pokestore.userCart"));
  } catch (error) {
    const localCartError = new Error("Error fetching cart from localStorage");
    console.log(localCartError);
    console.log(error);
  }

  const [cart, dispatch] = useReducer(reducer, localCart || []);
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
