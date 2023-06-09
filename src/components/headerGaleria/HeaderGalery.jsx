import React, { useContext } from "react";
import "./stylesHeaderGal.scss";
import imgHeader1 from ".././../assets/img/galeria/header1.jpg";
import imgHeader2 from ".././../assets/img/galeria/header2.jpg";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../router/Routers";

const HeaderGalery = () => {
  const { setSecNav } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <section className="headerGal">
      <article className="headerGal-sec1"></article>
      <article className="headerGal-sec2">
        <figure className="img1">
          <img src={imgHeader1} alt="" />
        </figure>
        <figure className="img2">
          <img src={imgHeader2} alt="" />
        </figure>
      </article>
      <article className="headerGal-sec3">
        <h1>MAKING ART</h1>
        <p>
          En esta galería, se pueden apreciar la creatividad y dedicación
          artística detrás de <span>proceso de diseño</span> que enriquece la
          experiencia visual de <span>Street Makers</span> en Medellín.
        </p>
        <button
          onClick={() => {
            setSecNav("inscripcion");
          }}
        >
          CONOCER MÁS
        </button>
      </article>
    </section>
  );
};

export default HeaderGalery;
