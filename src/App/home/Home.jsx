import React, { useContext, useEffect, useRef, useState } from "react";
import HeaderMobile from "../../components/headerMobile/HeaderMobile";
import { AppContext } from "../../router/Routers";
import LogoStreet from "../../components/logoStreet/LogoStreet";
import Banners from "../../components/banners/Banners";
import Form from "../../components/form/Form";
import SubMenu from "../../components/subMenu/SubMenu";
import Footer from "../../components/footer/Footer";
import Video from "../../components/video/Video";
import ModalVideo from "../../components/modalVideo/ModalVideo";
import "./stylesHome.scss";
import CarruselCardsHome from "../../components/cards/carruselCardsHome/CarruselCardsHome";
import MenuDesktop from "../../components/menuDesktop/MenuDesktop";
import HeaderDesktop from "../../components/headerDesktop/HeaderDesktop";
import MenuMobile from "../../components/menuMobile/MenuMobile";
import CardPatrocinador from "../../components/cardPatrocinador/CardPatrocinador";
import OptionsMenu from "../../components/menuMobile/options/OptionsMenu";
import Loader from "../../components/loader/Loader";

const Home = () => {
  const { width, handleSetActiveSection, secNav, setSecNav } =
    useContext(AppContext);
  const inscripcion = useRef(null);

  useEffect(() => {
    console.log(width);
  }, [width]);

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

  return (
    <main>
      <Loader />
      <ModalVideo />
      {width >= 768 ? (
        <MenuDesktop />
      ) : (
        <>
          <MenuMobile />
          <OptionsMenu />
        </>
      )}
      {width < 768 ? <HeaderMobile /> : <HeaderDesktop />};
      <LogoStreet />
      <section className="CarruselHome">
        <h2>CRECE LA CULTURA HIP HOP </h2>
        <CarruselCardsHome />
      </section>
      <Video />
      <Banners />
      <CardPatrocinador />
      <section className="secInfoMain">
        <div ref={inscripcion}>
          <Form />
        </div>

        <SubMenu />
      </section>
      <Footer />
    </main>
  );
};

export default Home;
