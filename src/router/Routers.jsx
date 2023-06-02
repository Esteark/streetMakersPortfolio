import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../App/home/Home";
import Galeria from "../App/galeria/Galeria";
import Eventos from "../App/eventos/Eventos";
import Form from "../components/form/Form";

export const AppContext = createContext({});

const Routers = () => {
  const [width, setwidth] = useState(window.innerWidth);

  const [isOpen, setIsOpen] = useState(false);
  const handleModal = () => {
    setIsOpen(!isOpen);
  };
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const [secNav, setSecNav] = useState("");
  const handleSetActiveSection = (section, ref) => {
    if (section === "inscripcion") {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    const menu = document.getElementById("menuScroll");
    if (window.scrollY > menu.offsetHeight) {
      menu.classList.add("backgroundScroll");
    } else {
      menu.classList.remove("backgroundScroll");
    }
  };

  useEffect(() => {
    const resizeScreen = () => {
      setwidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeScreen);
    return () => {
      window.removeEventListener("resize", resizeScreen);
    };
  });

  return (
    <AppContext.Provider
      value={{
        width,
        isOpen,
        handleModal,
        handleScroll,
        openMenu,
        handleMenu,
        secNav,
        setSecNav,
        handleSetActiveSection,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/eventos" element={<Eventos />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default Routers;
