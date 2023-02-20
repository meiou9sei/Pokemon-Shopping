import { useState } from "react";
import { Link } from "react-router-dom";

export default function CheckoutItem({ product, dispatch, ACTIONS }) {
  // fetch product image
  const [defaultImage, setDefaultImage] = useState("");
  async function retrievePokemonFBImages(pokemon) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`);
    if (!res.ok) {
      throw new Error("cannot fetch data");
    }
    const data = await res.json();
    setDefaultImage(data.sprites.other["official-artwork"].front_default);
  }
  retrievePokemonFBImages(product);

  return (
    <li className='cart-item'>
      <Link to={`/store/products/${product.id}`}>
        <h3 className='cart-item-name'>{product.name}</h3>
      </Link>
      <Link to={`/store/products/${product.id}`}>
        <img
          src={defaultImage}
          alt={product.name}
          className='cart-item-image'
        />
      </Link>
      <p>
        {product.quantity} at ${product.price} each
      </p>
      <button
        className='remove-item-button'
        onClick={() =>
          dispatch({
            type: ACTIONS.REMOVE_ITEM,
            payload: { product },
          })
        }
      >
        Remove Item
      </button>
    </li>
  );
}
