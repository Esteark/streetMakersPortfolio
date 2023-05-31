import React, { useContext } from "react";
import "./stylesGalery.scss";
import gal1 from "../../assets/img/galeria/gal1.jpg";
import gal2 from "../../assets/img/galeria/gal2.jpg";
import gal3 from "../../assets/img/galeria/gal3.jpg";
import gal4 from "../../assets/img/galeria/gal4.jpg";
import gal5 from "../../assets/img/galeria/gal5.jpg";
import gal6 from "../../assets/img/galeria/gal6.jpg";
import gal7 from "../../assets/img/galeria/gal7.jpg";
import gal8 from "../../assets/img/galeria/gal8.jpg";
import gal9 from "../../assets/img/galeria/gal9.jpg";
import gal10 from "../../assets/img/galeria/gal10.jpg";
import gal11 from "../../assets/img/galeria/gal11.jpg";
import { AppContext } from "../../router/Routers";

const MainGalery = () => {
  const { width } = useContext(AppContext);
  return (
    <section className="galery">
      <article className="gal1">
        <img src={gal1} alt="" className="" />
      </article>
      <article className="gal2-3">
        <img src={gal2} alt="" className=" img2" />
        <img src={gal3} alt="" className=" img3" />
      </article>
      <article className="gal4-5-6">
        <div>
          <img src={gal4} alt="" className=" img4" />
          {width >= 768 ? <img src={gal5} alt="" className=" img5" /> : <></>}
        </div>
        {width >= 768 ? <img src={gal6} alt="" className=" img6" /> : <></>}
      </article>
      {width >= 768 ? (
        <>
          <section className="gal7-8-9">
            <img src={gal7} alt="" className=" img7" />
            <article>
              <img src={gal8} alt="" className=" img8" />
              <img src={gal9} alt="" className=" img9" />
            </article>
          </section>
          <article className="gal10">
            <img src={gal10} alt="" className="" />
          </article>
          <article className="gal11">
            <img src={gal11} alt="" className="" />
          </article>
        </>
      ) : (
        <></>
      )}
    </section>
  );
};

export default MainGalery;
