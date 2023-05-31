import React, { useContext } from "react";
import "./stylesEventos.scss";
import { AppContext } from "../../router/Routers";
import MenuDesktop from "../../components/menuDesktop/MenuDesktop";
import MenuMobile from "../../components/menuMobile/MenuMobile";
import OptionsMenu from "../../components/menuMobile/options/OptionsMenu";
import HeaderMobile from "../../components/headerMobile/HeaderMobile";
import HeaderDesktop from "../../components/headerDesktop/HeaderDesktop";

const Eventos = () => {
  const { width } = useContext(AppContext);
  return (
    <section>
      {width >= 768 ? (
        <MenuDesktop />
      ) : (
        <>
          <MenuMobile />
          <OptionsMenu />
        </>
      )}
      {width < 768 ? <HeaderMobile op={1} /> : <HeaderDesktop op={1} />};
    </section>
  );
};

export default Eventos;
