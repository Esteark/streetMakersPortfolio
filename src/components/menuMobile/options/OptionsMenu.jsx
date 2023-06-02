import React, { useContext } from "react";
import "./stylesOptions.scss";
import { IoCloseCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AppContext } from "../../../router/Routers";

const OptionsMenu = () => {
  const navigate = useNavigate();
  const { openMenu, handleMenu, setSecNav } = useContext(AppContext);
  const instagramStreet = () => {
    window.open("https://www.instagram.com/streetmakersmedellin/", "_blank");
  };

  return (
    <motion.section
      className="secMenuMobileClick"
      initial={{ x: "100%" }}
      animate={{ x: openMenu ? 0 : "100%" }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.3 }}
    >
      <article className="sec1">
        <IoCloseCircle
          onClick={() => {
            handleMenu();
          }}
        />
      </article>
      <article className="sec2">
        <h3
          onClick={() => {
            navigate("/eventos");
            handleMenu();
          }}
        >
          Eventos
        </h3>
        <h3
          onClick={() => {
            navigate("/galeria");
            handleMenu();
          }}
        >
          Galeria
        </h3>
        <h3
          onClick={() => {
            setSecNav("inscripcion");
            handleMenu();
          }}
        >
          Inscripción
        </h3>
        <h3 onClick={instagramStreet}>Más Info</h3>
      </article>
    </motion.section>
  );
};

export default OptionsMenu;
