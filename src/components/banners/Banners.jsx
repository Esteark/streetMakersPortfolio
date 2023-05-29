import React from "react";
import "./stylesBanner.scss";
import textSlider from "../../assets/img/Marquesina-textos.gif";
import cards from "../../assets/img/logos-patrocinadores.gif";

const Banners = () => {
  return (
    <section className="secBanners">
      <figure className="secBanners-texts">
        <img src={textSlider} alt="" />
      </figure>
      <figure className="secBanners-cards">
        <img src={cards} alt="" />
      </figure>
    </section>
  );
};

export default Banners;
