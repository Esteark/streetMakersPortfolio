import React from "react";
import { CardsHome } from "../../../services/infoCards";
import CardHome from "../cardHome/CardHome";
import Carrusels from "../../carrusels/Carrusels";
import { useContext } from "react";
import { AppContext } from "../../../router/Routers";
import "./stylesCarruselHome.scss";
const CarruselCardsHome = () => {
  const { width } = useContext(AppContext);
  const renderCardsHome = () => {
    return CardsHome.map((card) => (
      <CardHome
        img={card.img}
        tipo={card.tipo}
        icon={card.icon}
        text1={card.text1}
        text2={card.text2}
        key={card.id}
      />
    ));
  };

  return (
    <section
      className="secCarruselHome"
      style={{
        height: `${width >= 1500 ? "850px" : width >= 768 ? "750px" : "500px"}`,
        marginTop: `${width >= 768 ? "200px" : "50px"}`,
      }}
    >
      <article>
        <h2>CRECE LA CULTURA HIP HOP</h2>
      </article>
      <Carrusels
        items={renderCardsHome()}
        paddingLeft={width >= 2800 ? "5%" : "0px"}
        paddingRight={width >= 2800 ? "5%" : "0px"}
      />
    </section>
  );
};

export default CarruselCardsHome;
