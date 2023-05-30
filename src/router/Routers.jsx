import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../App/home/Home";

export const AppContext = createContext({});

const Routers = () => {
  const [width, setwidth] = useState(window.innerWidth);

  const [isOpen, setIsOpen] = useState(false);
  const handleModal = () => {
    setIsOpen(!isOpen);
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
    <AppContext.Provider value={{ width, isOpen, handleModal, handleScroll }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default Routers;
