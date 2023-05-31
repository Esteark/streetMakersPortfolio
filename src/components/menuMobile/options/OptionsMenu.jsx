import React, { useContext } from "react";
import "./stylesOptions.scss";
import { IoCloseCircle } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { AppContext } from "../../../router/Routers";

const OptionsMenu = () => {
  const location = useLocation();
  const { openMenu, handleMenu } = useContext(AppContext);

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
        <a href="">Evento</a>
        <a href="">Galeria</a>
        <a href="">Inscripción</a>
        <a href="">Más Info</a>
      </article>
    </motion.section>
  );
};

export default OptionsMenu;
