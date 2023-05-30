import React, { useContext } from "react";
import "./stylesGaleria.scss";
import HeaderGaleria from "../../components/headerGaleria/headerGaleria";
import { AppContext } from "../../router/Routers";
import MenuDesktop from "../../components/menuDesktop/MenuDesktop";
import MenuMobile from "../../components/menuMobile/MenuMobile";
const Galeria = () => {
  const { width } = useContext(AppContext);
  return (
    <section>
      {width >= 768 ? <MenuDesktop /> : <MenuMobile />}
      <HeaderGaleria />
    </section>
  );
};

export default Galeria;
