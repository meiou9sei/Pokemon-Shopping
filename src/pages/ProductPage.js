import React from "react";
import { useParams } from "react-router-dom";
import { AddToCart } from "../components/AddToCart";

export const ProductPage = ({ inventory, dispatch }) => {
  const { productId } = useParams();
  return (
    <div>
      <h1>product page</h1>
      <div>product number: {productId}</div>
      <AddToCart
        product={inventory.find((obj) => obj.id === parseInt(productId))}
        dispatch={dispatch}
      />
    </div>
  );
};
