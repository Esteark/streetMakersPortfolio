import React, { useEffect } from "react";
import "./stylePatrocinador.scss";
import img1 from "../../assets/img/1.png";
import img2 from "../../assets/img/2.png";
import img3 from "../../assets/img/3.png";
import img4 from "../../assets/img/4.png";
import img5 from "../../assets/img/5.png";
import { motion, useAnimation } from "framer-motion";

const CardPatrocinador = () => {
  return (
    <section className="secPatrocinadores">
      <article className="slide-track">
        <figure className="item item-1">
          <img src={img1} alt="" />
        </figure>
        <figure className="item">
          <img src={img2} alt="" />
        </figure>
        <figure className="item">
          <img src={img3} alt="" />
        </figure>
        <figure className="item">
          <img src={img4} alt="" />
        </figure>
        <figure className="item">
          <img src={img5} alt="" />
        </figure>
        <figure className="item item-1">
          <img src={img1} alt="" />
        </figure>
        <figure className="item">
          <img src={img2} alt="" />
        </figure>
        <figure className="item">
          <img src={img3} alt="" />
        </figure>
        <figure className="item">
          <img src={img4} alt="" />
        </figure>
        <figure className="item">
          <img src={img5} alt="" />
        </figure>
      </article>
    </section>
  );
};

export default CardPatrocinador;
