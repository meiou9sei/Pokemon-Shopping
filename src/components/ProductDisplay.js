import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductDisplay({ product }) {
  // fetch product image default and shiny
  const [defaultImage, setDefaultImage] = useState("");
  const [shinyImage, setShinyImage] = useState("");
  async function retrievePokemonFBImages(pokemon) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`);
    if (!res.ok) {
      throw new Error("cannot fetch data");
    }
    const data = await res.json();
    setDefaultImage(data.sprites.other["official-artwork"].front_default);
    setShinyImage(data.sprites.other["official-artwork"].front_shiny);
  }
  retrievePokemonFBImages(product);

  return (
    <li className='product-listing'>
      <Link to={`/store/products/${product.id}`}>
        <div className='product-header'>
          <h2 className='product-name'>{product.name}</h2>
          <p className='product-price'>${product.price}</p>
        </div>
        <div className='image-wrapper'>
          <img
            src={defaultImage}
            alt={product.name}
            className='product-image image-base'
          />
          <img
            src={shinyImage}
            alt={`shiny ${product.name}`}
            className='product-image image-hover'
          />
        </div>
      </Link>
    </li>
  );
}
