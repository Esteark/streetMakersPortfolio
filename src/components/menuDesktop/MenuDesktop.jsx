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

  return (
    <nav className="nav__desk" id="menuScroll">
      <section className="sec1 d-flex">
        <h3>EVENTO</h3>
      </section>
      <section className="sec2 d-flex">
        <h3>GALERÍA</h3>
      </section>
      <section className="sec3 d-flex">
        <img src={icon} alt="" />
      </section>
      <section className="sec4 d-flex">
        <h3>INSCRIPCIÓN</h3>
      </section>
      <section className="sec5 d-flex">
        <h3>MÁS INFO</h3>
      </section>
    </nav>
  );
};

export default MenuDesktop;
