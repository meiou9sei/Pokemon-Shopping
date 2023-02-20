import { Routes, Route } from "react-router-dom";
import { useReducer } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Checkout from "./pages/Checkout";
import Footer from "./components/Footer";
import { ProductPage } from "./pages/ProductPage";
import { NotFoundPage } from "./pages/NotFoundPage";

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
  const { isInventoryLoaded, storeInventory, inventoryCount } =
    useFetchInventory();

  return (
    <div className='App'>
      <main>
        <Navbar
          inventory={storeInventory}
          isInventoryLoaded={isInventoryLoaded}
        />
        <div className='page-wrapper'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route
              path='/store'
              element={
                <Store
                  isInventoryLoaded={isInventoryLoaded}
                  inventory={storeInventory}
                />
              }
            />
            <Route
              path='/store/products/:productId'
              element={
                <ProductPage
                  isInventoryLoaded={isInventoryLoaded}
                  inventory={storeInventory}
                  dispatch={dispatch}
                  inventoryCount={inventoryCount}
                />
              }
            />
            <Route
              path='/cart'
              element={<Checkout cart={cart} dispatch={dispatch} />}
            />
            <Route path='*' element={<NotFoundPage />}></Route>
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
