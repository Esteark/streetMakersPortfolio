import React, { useEffect } from "react";
import "./stylePatrocinador.scss";
import cards from "../../assets/img/logos-patrocinadores.gif";

const CardPatrocinador = () => {
  return (
    <figure className="secBanners-cards">
      <img src={cards} alt="" />
    </figure>
  );
};

export default CardPatrocinador;
