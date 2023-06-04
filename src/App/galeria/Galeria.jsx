import React, { useContext, useEffect, useRef } from "react";
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
import Loader from "../../components/loader/Loader";

const Galeria = () => {
  const { width, secNav, setSecNav, handleSetActiveSection } =
    useContext(AppContext);
  const inscripcion = useRef(null);
  useEffect(() => {
    handleSetActiveSection(secNav, inscripcion);
  }, [secNav]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY) {
        setSecNav("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <section>
      <Loader />
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

      <Banners />

      <section className="secInfoMain">
        <div ref={inscripcion}>
          <Form />
        </div>
        <div>
          <SubMenu />
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default Galeria;
