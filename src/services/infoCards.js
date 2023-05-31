// Importaciones de imagenes e iconos para cards Home
import img1Home from "../assets/img/cardsHome/1.png";
import img2Home from "../assets/img/cardsHome/2.png";
import img3Home from "../assets/img/cardsHome/3.png";
import img4Home from "../assets/img/cardsHome/4.png";
import img5Home from "../assets/img/cardsHome/5.png";
import img6Home from "../assets/img/cardsHome/6.png";
import img7Home from "../assets/img/cardsHome/7.png";
import img8Home from "../assets/img/cardsHome/8.png";
import iconHome1 from "../assets/img/iconsCardHome/1.svg";
import iconHome2 from "../assets/img/iconsCardHome/2.svg";
import iconHome3 from "../assets/img/iconsCardHome/3.svg";
import iconHome4 from "../assets/img/iconsCardHome/4.svg";
import iconHome5 from "../assets/img/iconsCardHome/5.svg";
import iconHome6 from "../assets/img/iconsCardHome/6.svg";
import product1 from "../assets/img/cardsGaleria/1.jpg";
import product2 from "../assets/img/cardsGaleria/2.jpg";
import product3 from "../assets/img/cardsGaleria/3.jpg";
import product4 from "../assets/img/cardsGaleria/4.jpg";
import product5 from "../assets/img/cardsGaleria/5.jpg";
import product6 from "../assets/img/cardsGaleria/6.jpg";
import product7 from "../assets/img/cardsGaleria/7.jpg";
import product8 from "../assets/img/cardsGaleria/8.jpg";
import product9 from "../assets/img/cardsGaleria/9.jpg";
import product10 from "../assets/img/cardsGaleria/10.jpg";
import product11 from "../assets/img/cardsGaleria/11.jpg";
import product12 from "../assets/img/cardsGaleria/12.jpg";
import product13 from "../assets/img/cardsGaleria/13.jpg";
import product14 from "../assets/img/cardsGaleria/14.jpg";
import product15 from "../assets/img/cardsGaleria/15.jpg";
import imgEve1 from "../assets/img/cardsEventos/mob/1.png";
import imgEve2 from "../assets/img/cardsEventos/mob/2.png";
import imgEve3 from "../assets/img/cardsEventos/mob/3.png";
import imgEve4 from "../assets/img/cardsEventos/mob/4.png";
import imgEve5 from "../assets/img/cardsEventos/mob/5.png";
import imgEve6 from "../assets/img/cardsEventos/mob/6.png";
import imgEve7 from "../assets/img/cardsEventos/mob/7.png";
import imgEve8 from "../assets/img/cardsEventos/mob/8.png";

//Objeto con toda la información para las cards del home
export const CardsHome = [
  {
    id: 1,
    img: img1Home,
    tipo: "EXPONENTE",
    icon: iconHome1,
    text1: "Ganbeta en:",
    text2: "BREAKING",
    path: "/eventos",
  },
  {
    id: 2,
    img: img2Home,
    tipo: "EXPONENTE",
    icon: iconHome2,
    text1: "Bboy Julio en:",
    text2: "MC / RAP",
    path: "/eventos",
  },
  {
    id: 3,
    img: img3Home,
    tipo: "EXPONENTE",
    icon: iconHome3,
    text1: "Junior Ruiz en:",
    text2: "GRAFFITI",
    path: "/eventos",
  },
  {
    id: 4,
    img: img4Home,
    tipo: "EXPONENTE",
    icon: iconHome4,
    text1: "Dmoe en:",
    text2: "DJ",
    path: "/eventos",
  },
  {
    id: 5,
    img: img5Home,
    tipo: "EXPONENTE",
    icon: iconHome5,
    text1: "Sem en:",
    text2: "Beat Maker",
    path: "/eventos",
  },
  {
    id: 6,
    img: img6Home,
    tipo: "PRODUCTO",
    icon: iconHome6,
    text1: "Más contenido en:",
    text2: "MAKING ART",
    path: "/galeria",
  },
  {
    id: 6,
    img: img7Home,
    tipo: "PRODUCTO",
    icon: iconHome6,
    text1: "Más contenido en:",
    text2: "MAKING ART",
    path: "/galeria",
  },
  {
    id: 6,
    img: img8Home,
    tipo: "PRODUCTO",
    icon: iconHome6,
    text1: "Más contenido en:",
    text2: "MAKING ART",
    path: "/galeria",
  },
];

export const CardsGaleria = [
  {
    id: 1,
    img: product1,
  },
  {
    id: 2,
    img: product2,
  },
  {
    id: 3,
    img: product3,
  },
  {
    id: 4,
    img: product4,
  },
  {
    id: 5,
    img: product5,
  },
  {
    id: 6,
    img: product6,
  },
  {
    id: 7,
    img: product7,
  },
  {
    id: 8,
    img: product8,
  },
  {
    id: 9,
    img: product9,
  },
  {
    id: 10,
    img: product10,
  },
  {
    id: 11,
    img: product11,
  },
  {
    id: 12,
    img: product12,
  },
  {
    id: 13,
    img: product13,
  },
  {
    id: 14,
    img: product14,
  },
  {
    id: 15,
    img: product15,
  },
];

export const CardsGaleriaDesk = [
  {
    id: 7,
    img: product7,
  },
  {
    id: 8,
    img: product8,
  },
  {
    id: 9,
    img: product9,
  },
  {
    id: 10,
    img: product10,
  },
  {
    id: 11,
    img: product11,
  },
  {
    id: 12,
    img: product12,
  },
  {
    id: 13,
    img: product13,
  },
  {
    id: 14,
    img: product14,
  },
  {
    id: 15,
    img: product15,
  },
];

export const CardsEventos = [
  {
    id: 1,
    text1: "",
    text2: "",
    icon: "",
    img: imgEve1,
  },
  {
    id: 2,
    text1: "LOS RAPPERS (MCS):",
    text2:
      "Los rappers improvisan rimas y retórica sobre música en el hip hop, liderados por pioneros como Grandmaster Flash y KRS-One.",
    icon: iconHome2,
    img: imgEve2,
  },
  {
    id: 3,
    text1: "GRAFFITI:",
    text2:
      "El graffiti, nacido en el hip hop, es arte visual con aerosoles en paredes y edificios, liderado por The Fab Five en Nueva York.",
    icon: iconHome3,
    img: imgEve3,
  },
  {
    id: 4,
    text1: "BREAKDANCE:",
    text2:
      "Baile hip hop de los 80 con acrobacias, liderado por Afrika Bambaataa y Rock Steady Crew.",
    icon: iconHome1,
    img: imgEve4,
  },
  {
    id: 5,
    text1: "EL DJ O DISC-JOCKEY:",
    text2:
      "Crea música mezclando discos y desarrollando técnicas como scratching y looping.",
    icon: iconHome4,
    img: imgEve5,
  },
  {
    id: 6,
    text1: "BEATMAKING:",
    text2:
      "En los 80 surge un movimiento musical contracultural de DJs y beatmakers que generan música usando sampleo y tecnología.",
    icon: iconHome5,
    img: imgEve6,
  },
  {
    id: 7,
    text1: "EN 2006",
    text2:
      "Se crea el primer festival Altavoz con música RAP dentro del festival realizado en la ciudad de Medellín.",
    icon: iconHome6,
    img: imgEve7,
  },
  {
    id: 8,
    text1: "CASAS DE HIP HOP EN MEDELLÍN",
    text2: "Casa Kolacho / La casa del Hip Hop / 4Eskuela / Urban Flow.",
    icon: iconHome6,
    img: imgEve8,
  },
];
