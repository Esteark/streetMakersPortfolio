import React, { useContext } from "react";
import "./stylesSecInfoEve.scss";
import imgInfo from "../../assets/img/eventos/imgInfo.png";
import imgInfoMobile from "../../assets/img/eventos/imgInfoMobile.png";
import { AppContext } from "../../router/Routers";

const SecInfoEventos = () => {
  const { width, setSecNav } = useContext(AppContext);
  return (
    <section className="secInfoEve">
      <h2>SOMOS REFERENTE URBANO</h2>
      <article className="secInfoEve-article">
        <div className="sec1">
          <p>
            <span> Medellín</span> ha surgido como un referente en la música
            urbana, especialmente en el <span>hip hop</span>, nutriendo a
            talentosos artistas y fusionando pasión, creatividad y autenticidad.
          </p>
          <p>
            Con una escena musical en constante ebullición, la ciudad ha acogido
            y nutrido a una generación de talentosos artistas que han llevado
            sus letras y ritmos a lo más alto. La ciudad ha forjado
            <span> una identidad sonora única</span> al fusionar influencias
            locales y globales, trascendiendo fronteras y conquistando
            admiración mundial.
          </p>
          <p>
            Medellín ha demostrado que la música urbana es un vehículo de
            empoderamiento y cambio, siendo <span>una poderosa voz</span> para
            una generación en busca de la libertad y superación.
          </p>
          <button
            onClick={() => {
              setSecNav("inscripcion");
            }}
          >
            CONOCER MÁS
          </button>
        </div>
        <figure className="sec2">
          <img src={width > 768 ? imgInfo : imgInfoMobile} alt="" />
        </figure>
      </article>
    </section>
  );
};

export default SecInfoEventos;
