import React, { useContext } from "react";
import "./stylesCarruselEve.scss";
import { AppContext } from "../../../router/Routers";
import { CardsEventos } from "../../../services/infoCards";
import CardEvento from "../cardEventos/CardEvento";
import Carrusels from "../../carrusels/Carrusels";

const CarruselEventos = () => {
  const { width } = useContext(AppContext);
  const renderCardsEventos = () => {
    return CardsEventos.map((card) => (
      <CardEvento
        img={card.img}
        text1={card.text1}
        text2={card.text2}
        icon={card.icon}
        op={card.id != 1 ? 1 : 0}
        key={card.id}
      />
    ));
  };
  return (
    <section className="secCarruselEventos">
      <Carrusels
        items={renderCardsEventos()}
        op={3}
        paddingLeft="0px"
        paddingRight="0px"
      />
    </section>
  );
};

export default CarruselEventos;
