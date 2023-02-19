import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AddToCart } from "../components/AddToCart";

export const ProductPage = ({ inventory, dispatch, isInventoryLoaded }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isProductLoaded, setIsProductLoaded] = useState(false);
  const [productDetails, setProductDetails] = useState("");
  async function retrievePokemonDetails(pokemon) {
    const resPokemon = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon.id}`
    );
    if (!resPokemon.ok) {
      throw new Error("error fetching pokemon data");
    }
    const resPokemonSpecies = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}`
    );
    if (!resPokemonSpecies.ok) {
      throw new Error("error fetching pokemon species data");
    }
    const dataPokemon = await resPokemon.json();
    const dataPokemonSpecies = await resPokemonSpecies.json();
    setProductDetails({
      color: dataPokemonSpecies.color.name,
      genera: dataPokemonSpecies.genera.find(
        (genera) => genera.language.name === "en"
      ).genus,
      generation: product.generation,
      types: product.type,
      evolution_chain: dataPokemonSpecies.evolution_chain.url,
      flavor_text: dataPokemonSpecies.flavor_text_entries.findLast(
        (flavorText) => flavorText.language.name === "en"
      ).flavor_text,
      images: {
        frontDefault:
          dataPokemon.sprites.other["official-artwork"].front_default,
      },
    });
    setIsProductLoaded(true);
  }
  useEffect(() => {
    if (isInventoryLoaded) {
      setProduct(inventory.find((obj) => obj.id === parseInt(productId)));
    }
    if (Object.keys(product).length) {
      retrievePokemonDetails(product);
    }
  }, [isInventoryLoaded, product]);

  return (
    <div className='product-page'>
      {(isProductLoaded && (
        <div className='product-wrapper'>
          <div className='product-images'>
            <div className='product-images-gallery'></div>
            <div className='product-image-display'>
              {
                <img
                  src={productDetails.images.frontDefault}
                  alt={`${product.name} front default image`}
                />
              }
            </div>
          </div>
          <div className='product-info'>
            <div className='product-title'>
              <h1 className='product-name'>{product.name}</h1>
              <p className='product-id'>{product.id}</p>
              <p className='product-price'>${product.price}</p>
            </div>
            <div className='product-description'>
              <p className='product-generation'>{productDetails.generation}</p>
              <p className='product-types'>
                {productDetails.types.map((type) => (
                  <span key={type}>{type}</span>
                ))}
              </p>
              <p className='product-genera'>{productDetails.genera}</p>
              <p className='product-flavor-text'>
                {productDetails.flavor_text}
              </p>
              <p className='product-color'>{productDetails.color}</p>
            </div>
          </div>
          <AddToCart product={product} dispatch={dispatch} />
        </div>
      )) || <p>loading</p>}
    </div>
  );
};
