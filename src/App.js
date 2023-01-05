import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Store from "./components/Store";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <Store />
      <Cart />
      <Footer />
    </div>
  );
}

export default App;
