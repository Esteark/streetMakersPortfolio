import React, { useContext, useEffect } from "react";
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

const Home = () => {
  const { width } = useContext(AppContext);
  useEffect(() => {
    console.log(width);
  }, [width]);
  return (
    <main>
      <ModalVideo />
      <section>{width <= 600 ? <HeaderMobile /> : <></>}</section>;
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
