import React, { useContext } from "react";
import "./stylesOptions.scss";
import { IoCloseCircle } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AppContext } from "../../../router/Routers";

const OptionsMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();
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
        <h3>Evento</h3>
        <h3
          onClick={() => {
            navigate("/galeria");
            handleMenu();
          }}
        >
          Galeria
        </h3>
        <h3>Inscripción</h3>
        <h3>Más Info</h3>
      </article>
    </motion.section>
  );
};

export default OptionsMenu;
