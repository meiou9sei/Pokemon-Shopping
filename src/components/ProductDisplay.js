import { useState } from "react";
import { ACTIONS } from "../cartLogic";

export default function ProductDisplay({ product, dispatch }) {
  const [amountToAdd, setAmountToAdd] = useState(1);
  function incrementCount() {
    setAmountToAdd((prevCount) => prevCount + 1);
  }
  function decrementCount() {
    // prevent user from going below 1
    setAmountToAdd((prevCount) => (prevCount <= 1 ? prevCount : prevCount - 1));
  }
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
      <div className='add-to-cart-menu'>
        <button
          className='add-to-cart-button'
          onClick={() =>
            dispatch({
              type: ACTIONS.ADD_ITEM,
              payload: { product, amountToAdd },
            })
          }
        >
          Add to cart
        </button>
        <div className='amount-to-add'>
          <button className='less' onClick={decrementCount}>
            -
          </button>
          {amountToAdd}
          <button className='more' onClick={incrementCount}>
            +
          </button>
        </div>
      </div>
    </li>
  );
}
