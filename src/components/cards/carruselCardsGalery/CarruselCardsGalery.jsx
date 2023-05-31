import React, { useContext } from "react";
import "./stylesSliderGalery.scss";
import { AppContext } from "../../../router/Routers";
import CardGalery from "../cardGaleria/CardGalery";
import Carrusels from "../../carrusels/Carrusels";
import { CardsGaleria, CardsGaleriaDesk } from "../../../services/infoCards";

const CarruselCardsGalery = () => {
  const { width } = useContext(AppContext);
  const renderCardsGalery = () => {
    if (width <= 768) {
      return CardsGaleria.map((card) => (
        <CardGalery img={card.img} key={card.id} />
      ));
    } else {
      return CardsGaleriaDesk.map((card) => (
        <CardGalery img={card.img} key={card.id} />
      ));
    }
  };

  return (
    <section className="secCarruselGalery">
      <Carrusels
        items={renderCardsGalery()}
        op={2}
        paddingLeft="0px"
        paddingRight="0px"
      />
    </section>
  );
};

export default CarruselCardsGalery;
