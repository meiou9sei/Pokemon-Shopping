import { Link } from "react-router-dom";
import React from "react";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/store'>Store</Link>
        </li>
        <li>
          <Link to='/cart'>Cart</Link>
        </li>
      </ul>
    </nav>
  );
}
