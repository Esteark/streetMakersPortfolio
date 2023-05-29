import React from "react";
import streetMakers from "../../assets/img/streetMakers.svg";
import "./stylesLogoStreet.scss";
import SeparadorLogo from "../separadorLogo/SeparadorLogo";

const LogoStreet = () => {
  return (
    <section className="secLogo">
      <figure>
        <img src={streetMakers} alt="" />
      </figure>
      <SeparadorLogo />
    </section>
  );
};

export default LogoStreet;
