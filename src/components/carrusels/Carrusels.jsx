import React, { useContext } from "react";
import "./stylesCarrusel.scss";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { AppContext } from "../../router/Routers";

const Carrusels = ({
  items,
  paddingLeft = "20px",
  paddingRight = "20px",
  op = 0,
}) => {
  const { width } = useContext(AppContext);
  const responsive = {
    0: {
      items: 1,
    },
    370: {
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
  const responsiveEve = {
    0: {
      items: 1,
    },
    370: {
      items: 1,
      itemsFit: "fill",
    },

    568: {
      items: 1,
      itemsFit: "fill",
    },
    668: {
      items: 4,
      itemsFit: "fill",
    },
    768: {
      items: 5,
    },

    1024: {
      items: 4,
      itemsFit: "fill",
    },
    1075: {
      items: 6,
      itemsFit: "fill",
    },
    1500: {
      items: 6,
      itemsFit: "fill",
    },
    2000: {
      items: 7,
      itemsFit: "fill",
    },
    2800: {
      items: 8,
      itemsFit: "fill",
    },
  };

  const responsiveGal = {
    0: {
      items: 1,
      itemsFit: "fill",
    },
    370: {
      items: 2,
      itemsFit: "fill",
    },

    568: {
      items: 3,
      itemsFit: "fill",
    },
    668: {
      items: 3,
      itemsFit: "fill",
    },
    768: {
      items: 5,
    },

    1024: {
      items: 5,
      itemsFit: "fill",
    },
    1075: {
      items: 7,
      itemsFit: "fill",
    },
    1500: {
      items: 8,
      itemsFit: "fill",
    },
    2000: {
      items: 8,
      itemsFit: "fill",
    },
    2800: {
      items: 8,
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
        mouseTracking={true}
        items={items}
        responsive={
          op == 0 ? responsive : op == 2 ? responsiveGal : responsiveEve
        }
        keyboardNavigation={false}
        infinite={true}
        disableButtonsControls={
          op !== 0 ? true : op == 0 && width >= 768 ? false : true
        }
      />
    </section>
  );
};

export default Carrusels;
