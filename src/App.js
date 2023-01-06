import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Store from "./components/Store";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

import storeInventory from "./storeInventory";

function App() {
  const [inventory, setInventory] = useState(storeInventory);
  const [cart, setCart] = useState([]);

  return (
    <div className='App'>
      <main>
        <Navbar />
        <div className='page-wrapper'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/store' element={<Store inventory={inventory} />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
