import React from "react";
import "./stylesHeaderMobile.scss";
import mouth from "../../assets/img/mouth.png";
import grafiti from "../../assets/img/grafitiHeader.png";
import universe from "../../assets/img/universe.png";
import { GrInstagram } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const HeaderMobile = () => {
  const instagramStreet = () => {
    window.open("https://www.instagram.com/streetmakersmedellin/", "_blank");
  };
  return (
    <section
      className="headerMobile"
      style={{
        background: `url(${grafiti})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <article className="item item-logo"></article>
      <article className="item item-date">
        <h3>2023</h3>
      </article>
      <article className="item item-menu"></article>
      <article className="item"></article>
      <article className="item item-mouth">
        <img src={mouth} alt="" />
      </article>
      <article className="item item-universe">
        <img src={universe} alt="" />
      </article>
      <article className="item"></article>
      <article className="item item-headerText1">
        <h2>
          Trágate <br /> el género
        </h2>
      </article>
      <article className="item "></article>
      <article className="item "></article>
      <article className="item item-headerText2">
        <div>
          <section>
            <h4>Medellín </h4>
            <span>
              <GrInstagram onClick={instagramStreet} />
            </span>
          </section>

          <p>JUN23-JUN24</p>
        </div>
      </article>
      <article className="item "></article>
    </section>
  );
};

export default HeaderMobile;
