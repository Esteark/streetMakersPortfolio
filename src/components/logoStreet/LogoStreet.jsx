import React from "react";
import streetMakers from "../../assets/img/streetMakers.svg";
import "./stylesLogoStreet.scss";

const LogoStreet = () => {
  return (
    <section className="secLogo">
      <figure>
        <img src={streetMakers} alt="" />
      </figure>
      <div className="separador"></div>
    </section>
  );
};

export default LogoStreet;
