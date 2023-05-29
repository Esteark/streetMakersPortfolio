import React, { useContext, useEffect } from "react";
import HeaderMobile from "../../components/headerMobile/HeaderMobile";
import { AppContext } from "../../router/Router";
import LogoStreet from "../../components/logoStreet/LogoStreet";
import Banners from "../../components/banners/Banners";
import Form from "../../components/form/Form";
import SubMenu from "../../components/subMenu/SubMenu";
import Footer from "../../components/footer/Footer";
import Video from "../../components/video/Video";
import ModalVideo from "../../components/modalVideo/ModalVideo";
import CardPatrocinador from "../../components/cardPatrocinador/CardPatrocinador";
import "./stylesHome.scss";
import CardHome from "../../components/cards/cardHome/CardHome";
import CarruselCardsHome from "../../components/cards/carruselCardsHome/CarruselCardsHome";

const Home = () => {
  const { width, isOpen } = useContext(AppContext);
  useEffect(() => {
    console.log(width);
  }, [width]);
  return (
    <main>
      <ModalVideo />
      <section>{width <= 600 ? <HeaderMobile /> : <></>}</section>;
      <LogoStreet />
      <section className="CarruselHome">
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
