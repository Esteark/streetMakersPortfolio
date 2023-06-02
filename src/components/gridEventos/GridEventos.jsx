import React from "react";
import img1 from "../../assets/img/cardsEventos/desk/1.png";
import img2 from "../../assets/img/cardsEventos/desk/2.png";
import img3 from "../../assets/img/cardsEventos/desk/3.png";
import img4 from "../../assets/img/cardsEventos/desk/4.png";
import img5 from "../../assets/img/cardsEventos/desk/5.png";
import img6 from "../../assets/img/cardsEventos/desk/6.png";
import img7 from "../../assets/img/cardsEventos/desk/7.png";
import img8 from "../../assets/img/cardsEventos/desk/8.png";
import imgEventos from "../../assets/img/imgEventos.png";
import iconHome1 from "../../assets/img/iconsCardHome/1.svg";
import iconHome2 from "../../assets/img/iconsCardHome/2.svg";
import iconHome3 from "../../assets/img/iconsCardHome/3.svg";
import iconHome4 from "../../assets/img/iconsCardHome/4.svg";
import iconHome5 from "../../assets/img/iconsCardHome/5.svg";
import iconHome6 from "../../assets/img/iconsCardHome/6.svg";
import "./stylesGridEventos.scss";

const GridEventos = () => {
  return (
    <section className="secGridEventos">
      <article className="secGridEventos-sec1">
        <div className="seccion1">
          <figure>
            <img src={img1} alt="" />
          </figure>
          <figure className="secCardEvento1">
            <img src={img2} alt="" style={{ height: "60%" }} />
            <figcaption>
              <div>
                <h3>LOS Rappers (MCs):</h3>
                <p>
                  Los rappers improvisan rimas y retórica sobre música en el hip
                  hop, liderados por pioneros como Grandmaster Flash y KRS-One.
                </p>
              </div>
              <span>
                <img src={iconHome2} alt="" />
              </span>
            </figcaption>
          </figure>
        </div>
        <div className="seccion2">
          <figure>
            <img src={img3} alt="" />
            <figcaption>
              <div>
                <h3>GRAFFITI:</h3>
                <p>
                  El graffiti, nacido en el hip hop, es arte visual con
                  aerosoles en paredes y edificios, liderado por The Fab Five en
                  Nueva York.
                </p>
              </div>
              <span>
                <img src={iconHome3} alt="" />
              </span>
            </figcaption>
          </figure>
          <figure>
            <img src={img4} alt="" />
            <figcaption>
              <div>
                <h3>BREAKDANCE:</h3>
                <p>
                  Baile hip hop de los 80 con acrobacias, liderado por Afrika
                  Bambaataa y Rock Steady Crew.
                </p>
              </div>
              <span>
                <img src={iconHome1} alt="" />
              </span>
            </figcaption>
          </figure>
          <figure>
            <img src={img5} alt="" />
            <figcaption>
              <div>
                <h3>EL DJ O DISC-JOCKEY:</h3>
                <p>
                  Crea música mezclando discos y desarrollando técnicas como
                  scratching y looping.
                </p>
              </div>
              <span>
                <img src={iconHome4} alt="" />
              </span>
            </figcaption>
          </figure>
        </div>
      </article>
      <article className="secGridEventos-sec2">
        <img src={imgEventos} alt="" />
        <div>
          <figure>
            <img src={img6} alt="" />
            <figcaption>
              <div>
                <h3>BEATMAKING:</h3>
                <p>
                  En los 80 surge un movimiento musical contracultural de DJs y
                  beatmakers que generan música usando sampleo y tecnología.
                </p>
              </div>
              <span>
                <img src={iconHome5} alt="" />
              </span>
            </figcaption>
          </figure>
          <figure>
            <img src={img7} alt="" />
            <figcaption>
              <div>
                <h3>EN 2006</h3>
                <p>
                  Se crea el primer festival Altavoz con música RAP dentro del
                  festival realizado en la ciudad de Medellín.
                </p>
              </div>
              <span>
                <img src={iconHome6} alt="" />
              </span>
            </figcaption>
          </figure>
          <figure>
            <img src={img8} alt="" />
            <figcaption>
              <div>
                <h3>CASAS DE HIP HOP EN MEDELLÍN:</h3>
                <p>
                  Casa Kolacho / La casa del Hip Hop / 4Eskuela / Urban Flow.
                </p>
              </div>
              <span>
                <img src={iconHome6} alt="" />
              </span>
            </figcaption>
          </figure>
        </div>
      </article>
    </section>
  );
};

export default GridEventos;
