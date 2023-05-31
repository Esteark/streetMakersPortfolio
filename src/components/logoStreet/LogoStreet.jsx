import React, { useContext } from "react";
import streetMakers from "../../assets/img/streetMakers.svg";
import "./stylesLogoStreet.scss";
import SeparadorLogo from "../separadorLogo/SeparadorLogo";
import { AppContext } from "../../router/Routers";

const LogoStreet = ({ op = 0 }) => {
  const { width } = useContext(AppContext);
  return (
    <section
      className="secLogo"
      style={{
        padding: `${op != 0 ? "0" : ""}`,
        transform: `${
          (op != 0) & (width <= 768)
            ? "translateY(-110px)"
            : op != 0 && width > 768
            ? "translateY(-310px)"
            : ""
        }`,
      }}
    >
      <figure>
        <img src={streetMakers} alt="" />
      </figure>
      <SeparadorLogo tipo={op} />
    </section>
  );
};

export default LogoStreet;
