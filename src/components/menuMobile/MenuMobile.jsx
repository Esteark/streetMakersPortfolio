import React, { useContext, useEffect } from "react";
import "./stylesMenuMobile.scss";
import icon from "../../assets/img/icon.svg";
import menu from "../../assets/img/menu.svg";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../router/Routers";

const MenuMobile = () => {
  const { handleScroll, openMenu, handleMenu } = useContext(AppContext);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(openMenu);
  }, [openMenu]);
  return (
    <nav className="menuMobile" id="menuScroll">
      <figure>
        <img
          src={icon}
          alt=""
          onClick={() => {
            navigate("/");
          }}
        />
      </figure>
      <figure>
        <img
          src={menu}
          alt=""
          onClick={() => {
            handleMenu();
          }}
        />
      </figure>
    </nav>
  );
};

export default MenuMobile;
