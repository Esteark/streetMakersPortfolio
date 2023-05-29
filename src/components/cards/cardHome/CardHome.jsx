import React from "react";
import "./stylesCardHome.scss";

const CardHome = ({ img, tipo, icon, text1, text2 }) => {
  return (
    <figure className="CardHome">
      <img src={img} alt="" />
      <article className="CardHome_article1">
        <div className="secText">
          <h3>{tipo}</h3>
        </div>
      </article>
      <figcaption className="CardHome_figcap">
        <article className="CardHome_article2">
          <div className="sec1">
            <h3>{text1}</h3>
            <h2>{text2}</h2>
          </div>
          <div className="sec2">
            <img src={icon} alt="" />
          </div>
        </article>
      </figcaption>
    </figure>
  );
};

export default CardHome;
