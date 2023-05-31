import React from "react";
import "./stylesCardGalery.scss";

const CardGalery = ({ img }) => {
  return (
    <figure className="CardGalery">
      <img src={img} alt="" />
    </figure>
  );
};

export default CardGalery;
