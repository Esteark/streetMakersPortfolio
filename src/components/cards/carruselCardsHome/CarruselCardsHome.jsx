import React from "react";
import { CardsHome } from "../../../services/infoCards";
import CardHome from "../cardHome/CardHome";
import Carrusels from "../../carrusels/Carrusels";
import { useContext } from "react";
import { AppContext } from "../../../router/Routers";

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
    <Carrusels
      items={renderCardsHome()}
      height={width <= 768 ? "400px" : "600px"}
      margintop={width <= 768 ? "90px" : "120px"}
      paddingLeft={"0px"}
      paddingRight={"0px"}
    />
  );
};

export default CarruselCardsHome;
