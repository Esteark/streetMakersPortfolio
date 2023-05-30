import React, { useContext } from "react";
import "./stylesGaleria.scss";
import { AppContext } from "../../router/Routers";
import MenuDesktop from "../../components/menuDesktop/MenuDesktop";
import HeaderGalery from "../../components/headerGaleria/HeaderGalery";

const Galeria = () => {
  const { width } = useContext(AppContext);
  return (
    <section>
      {width >= 768 ? <MenuDesktop /> : <></>}
      <HeaderGalery />
    </section>
  );
};

export default Galeria;
