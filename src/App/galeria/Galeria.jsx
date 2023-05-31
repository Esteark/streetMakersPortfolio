import React, { useContext } from "react";
import "./stylesGaleria.scss";
import { AppContext } from "../../router/Routers";
import MenuDesktop from "../../components/menuDesktop/MenuDesktop";
import HeaderGalery from "../../components/headerGaleria/HeaderGalery";
import Form from "../../components/form/Form";
import Footer from "../../components/footer/Footer";
import MenuMobile from "../../components/menuMobile/MenuMobile";
import OptionsMenu from "../../components/menuMobile/options/OptionsMenu";
import MainGalery from "../../components/mainGalery/MainGalery";
import SubMenu from "../../components/subMenu/SubMenu";
import Banners from "../../components/banners/Banners";
import CarruselCardsGalery from "../../components/cards/carruselCardsGalery/CarruselCardsGalery";

const Galeria = () => {
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
      <HeaderGalery />
      <MainGalery />
      <CarruselCardsGalery />

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

export default Galeria;
