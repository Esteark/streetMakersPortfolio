import React, { useContext } from "react";
import "./stylesEventos.scss";
import { AppContext } from "../../router/Routers";
import MenuDesktop from "../../components/menuDesktop/MenuDesktop";
import MenuMobile from "../../components/menuMobile/MenuMobile";
import OptionsMenu from "../../components/menuMobile/options/OptionsMenu";
import HeaderMobile from "../../components/headerMobile/HeaderMobile";
import HeaderDesktop from "../../components/headerDesktop/HeaderDesktop";
import Banners from "../../components/banners/Banners";

import SubMenu from "../../components/subMenu/SubMenu";
import Footer from "../../components/footer/Footer";
import Form from "../../components/form/Form";
import LogoStreet from "../../components/logoStreet/LogoStreet";
import SecInfoEventos from "../../components/secInfoEventos/SecInfoEventos";

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
      <LogoStreet op={1} />
      <SecInfoEventos />
      <section>
        <Banners />
      </section>
      <section className="secInfoMain">
        <Form />
        <SubMenu />
      </section>
      <Footer />
    </section>
  );
};

export default Eventos;
