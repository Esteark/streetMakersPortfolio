import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../App/home/Home";

export const AppContext = createContext({});

const Router = () => {
  const [width, setwidth] = useState(window.innerWidth);

  const [isOpen, setIsOpen] = useState(false);
  const handleModal = () => {
    setIsOpen(!isOpen);
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
    <AppContext.Provider value={{ width, isOpen, handleModal }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default Router;
