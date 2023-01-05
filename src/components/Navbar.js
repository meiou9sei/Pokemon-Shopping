import { Link } from "react-router-dom";
import React from "react";

export default function Navbar() {
  return (
    <nav>
      <li>
        <Link to='/'>Home</Link>
        <Link to='/store'>Store</Link>
        <Link to='/cart'>Cart</Link>
      </li>
    </nav>
  );
}
