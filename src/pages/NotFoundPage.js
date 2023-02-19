import React from "react";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div className='not-found-page'>
      <h1>This page does not exist</h1>
      <Link to='/'>Take me back to the main page!</Link>
    </div>
  );
};
