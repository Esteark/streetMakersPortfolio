import React, { useContext, useEffect, useState } from "react";
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

const Home = () => {
  const { width } = useContext(AppContext);

  useEffect(() => {
    console.log(width);
  }, [width]);
  return (
    <main>
      <ModalVideo />
      {width >= 768 ? <MenuDesktop /> : <></>}
      {width < 768 ? <HeaderMobile /> : <HeaderDesktop />};
      <LogoStreet />
      <section className="CarruselHome">
        <h2>CRECE LA CULTURA HIP HOP </h2>
        <CarruselCardsHome />
      </section>
      <Video />
      <Banners />
      <section className="secInfoMain">
        <Form />
        <SubMenu />
      </section>
      <Footer />
    </main>
  );
};

export default Home;
