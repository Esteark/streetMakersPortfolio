import React, { useContext } from "react";
import "./stylesCarrusel.scss";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { AppContext } from "../../router/Router";

const Carrusels = ({
  items,
  height = 400,
  paddingLeft = "20px",
  paddingRight = "20px",
  margintop = 0,
  marginbottom = 0,
}) => {
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
  };

  return (
    <section
      className="secCarrusel"
      style={{
        width: "100%",
        height: height,
        display: "flex",
        alignItems: "center",
        paddingLeft: paddingLeft,
        marginTop: margintop,
        marginBottom: marginbottom,
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
