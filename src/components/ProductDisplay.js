import { AddToCart } from "./AddToCart";
import { useState } from "react";

export default function ProductDisplay({ product, dispatch }) {
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
      <AddToCart product={product} dispatch={dispatch} />
    </li>
  );
}
