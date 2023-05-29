import React, { useContext } from "react";
import "./stylesCarrusel.scss";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { AppContext } from "../../router/Routers";

const Carrusels = ({ items, paddingLeft = "20px", paddingRight = "20px" }) => {
  const { width } = useContext(AppContext);
  const responsive = {
    0: {
      items: 1,
    },
    350: {
      items: 2,
    },
    568: {
      items: 2,
    },
    668: {
      items: 3,
      itemsFit: "fill",
    },
    768: {
      items: 2,
    },

    1024: {
      items: 2,
      itemsFit: "fill",
    },
    1075: {
      items: 3,
      itemsFit: "fill",
    },
    1500: {
      items: 4,
      itemsFit: "fill",
    },
    2000: {
      items: 5,
      itemsFit: "fill",
    },
    2800: {
      items: 6,
      itemsFit: "fill",
    },
  };

  return (
    <section
      className="secCarrusel"
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        paddingLeft: paddingLeft,
        paddingRight: paddingRight,
      }}
    >
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        keyboardNavigation={false}
        infinite={true}
        disableButtonsControls={width >= 768 ? false : true}
      />
    </section>
  );
};

export default Carrusels;
