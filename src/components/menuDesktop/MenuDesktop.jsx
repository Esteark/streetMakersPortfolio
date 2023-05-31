import React, { useContext, useEffect } from "react";
import icon from "../../assets/img/icon.svg";
import menu from "../../assets/img/menu.svg";
import "./stylesMenudesktop.scss";
import { AppContext } from "../../router/Routers";
import { useNavigate } from "react-router-dom";

const MenuDesktop = () => {
  const { handleScroll } = useContext(AppContext);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navigate = useNavigate();

  return (
    <nav className="nav__desk" id="menuScroll">
      <section className="sec1 d-flex">
        <h3
          onClick={() => {
            navigate("/eventos");
          }}
        >
          EVENTO
        </h3>
      </section>
      <section className="sec2 d-flex">
        <h3
          onClick={() => {
            navigate("/galeria");
          }}
        >
          GALERÍA
        </h3>
      </section>
      <section className="sec3 d-flex">
        <img
          src={icon}
          alt=""
          onClick={() => {
            navigate("/");
          }}
          style={{ cursor: "pointer" }}
        />
      </section>
      <section className="sec4 d-flex">
        <h3>INSCRIPCIÓN</h3>
      </section>
      <section className="sec5 d-flex">
        <a
          href="https://www.instagram.com/streetmakersmedellin/"
          target="_blank"
        >
          MÁS INFO
        </a>
      </section>
    </nav>
  );
};

export default MenuDesktop;
