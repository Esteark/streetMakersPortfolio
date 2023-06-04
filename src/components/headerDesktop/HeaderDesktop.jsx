import React from "react";
import mouth from "../../assets/img/mouth.png";
import eye from "../../assets/img/eye.png";
import grafiti from "../../assets/img/grafitiHeader.png";
import universe from "../../assets/img/universe.png";
import build from "../../assets/img/build.svg";
import metro from "../../assets/img/metro.svg";
import insta from "../../assets/img/insta.svg";

import "./stylesHedaerDesktop.scss";

const HeaderDesktop = ({ op = 0 }) => {
  const instagramStreet = () => {
    window.open("https://www.instagram.com/streetmakersmedellin/", "_blank");
  };
  return (
    <section
      className="headerDesktop"
      style={{
        background: `url(${grafiti})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "40%",
      }}
    >
      {/* Primera fila  */}
      <article className="item"></article>
      <article className="item"></article>
      <article className="item item-date">
        <h3>2023</h3>
      </article>
      <article className="item"></article>
      <article className="item"></article>
      {/* Segunda fila  */}
      <article className="item"></article>
      <article className="item"></article>
      <article className="item item-Texts">
        <div className="sec1">
          <h2>TRÁGATE</h2>
          <div className="sec1-icons">
            {op !== 0 ? (
              <>
                <article className="iconEve ">
                  <img src={metro} alt="" />
                </article>
                <article className="iconEve ">
                  <img src={build} alt="" />
                </article>
              </>
            ) : (
              <></>
            )}
            <article className={`${op != 0 ? "iconEve" : "icon"}`}>
              <img src={insta} alt="" onClick={instagramStreet} />
            </article>
          </div>
        </div>
        <div className="sec2">
          <h2
            style={{
              transform: `${op != 0 ? "translateY(10px)" : ""}`,
            }}
          >
            {op == 0 ? "EL GÉNERO" : "EL CONTEXTO"}
          </h2>
          <div
            className="sec2-subtexts"
            style={{ display: `${op != 0 ? "none" : ""}` }}
          >
            <h3>MEDELLÍN</h3>
            <div>
              <p>JUN 24</p>
              <p>JUN 25</p>
            </div>
          </div>
        </div>
      </article>
      <article className="item"></article>
      <article className="item item-universe">
        <img src={universe} alt="" />
      </article>
      {/* Tercera fila  */}
      <article className=""></article>
      <article className="item item-mouth">
        <img src={op != 0 ? eye : mouth} alt="" />
      </article>
      <article className="item"></article>
      <article className="item"></article>
      <article className=""></article>
    </section>
  );
};

export default HeaderDesktop;
