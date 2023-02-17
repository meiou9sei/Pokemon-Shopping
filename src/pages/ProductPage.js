import React from "react";
import { useParams } from "react-router-dom";

export const ProductPage = () => {
  const { productId } = useParams();
  return (
    <div>
      <h1>product page</h1>
      <div>product number: {productId}</div>
    </div>
  );
};
