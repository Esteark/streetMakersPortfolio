import React from "react";
import "./stylesHeaderMobile.scss";
import mouth from "../../assets/img/mouth.png";
import eye from "../../assets/img/eye.png";
import grafiti from "../../assets/img/grafitiHeader.png";
import universe from "../../assets/img/universe.png";
import build from "../../assets/img/build.svg";
import metro from "../../assets/img/metro.svg";
import insta from "../../assets/img/insta.svg";
import { GrInstagram } from "react-icons/gr";

const HeaderMobile = ({ op = 0 }) => {
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
        <img src={op == 0 ? mouth : eye} alt="" />
      </article>
      <article className="item item-universe">
        <img src={universe} alt="" />
      </article>
      <article className="item"></article>
      <article className="item item-headerText1">
        <h2
          style={{
            fontSize: `${op != 0 ? "50px" : ""}`,
            letterSpacing: `${op != 0 ? "5px" : ""}`,
          }}
        >
          Trágate <br /> {op == 0 ? "el género" : "el contexto"}
        </h2>
      </article>
      <article className="item "></article>
      <article className="item "></article>
      <article className="item item-headerText2">
        <div style={{ display: `${op != 0 ? "none" : ""}` }}>
          <section>
            <h4>Medellín </h4>
            <span>
              <GrInstagram onClick={instagramStreet} />
            </span>
          </section>

          <p>JUN24-JUN25</p>
        </div>
        <div
          style={{ display: `${op == 0 ? "none" : ""}` }}
          className="iconsEvento"
        >
          <span>
            <img src={build} alt="" />
          </span>
          <span>
            <img src={metro} alt="" />
          </span>
          <span>
            <img src={insta} alt="" onClick={instagramStreet} />
          </span>
        </div>
      </article>
      <article className="item "></article>
    </section>
  );
};

export default HeaderMobile;
