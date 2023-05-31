import React from "react";
import "./stylesBanner.scss";
import textSlider from "../../assets/img/Marquesina-textos.gif";

const Banners = () => {
  return (
    <section className="secBanners">
      <figure className="secBanners-texts">
        <img src={textSlider} alt="" />
      </figure>
    </section>
  );
};

export default Banners;
