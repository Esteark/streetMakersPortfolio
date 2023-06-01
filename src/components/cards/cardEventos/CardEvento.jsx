import React from "react";
import "./stylesCardEvento.scss";

const CardEvento = ({ img, text1, text2, icon, op }) => {
  return (
    <figure className="CardEvento">
      <img
        src={img}
        alt=""
        className="imgCardEve"
        style={{ height: `${op == 0 ? "100%" : "40%"}` }}
      />
      <figcaption style={{ display: `${op == 0 ? "none" : "flex"}` }}>
        <article className="sec1">
          <h3>{text1}</h3>
          <p>{text2}</p>
        </article>
        <article className="sec2">
          <span>
            <img src={icon} alt="" />
          </span>
        </article>
      </figcaption>
    </figure>
  );
};

export default CardEvento;
