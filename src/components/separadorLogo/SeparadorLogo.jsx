import React from "react";
import "./stylesSeparador.scss";

const SeparadorLogo = ({ tipo = 0 }) => {
  return (
    <div className={tipo == 0 ? "separadorHome" : "separadorEvento"}></div>
  );
};

export default SeparadorLogo;
