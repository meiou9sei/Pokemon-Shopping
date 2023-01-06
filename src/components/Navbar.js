import { Link } from "react-router-dom";
import React from "react";

export default function Navbar() {
  return (
    <nav>
      <div className='nav-content-wrapper'>
        <p>broke pokemart</p>
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
      </div>
    </nav>
  );
}
