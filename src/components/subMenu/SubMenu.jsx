import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import "./stylesSubMenu.scss";

const SubMenu = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <section className="subMenu">
      <article className="subMenu_info">
        <a onClick={scrollToTop}>INICIO</a>
        <div>
          {[...Array(5)].map((_, index) => (
            <BsFillStarFill className="icon" key={index} />
          ))}
        </div>
      </article>
      <article className="subMenu_info">
        <a>GALERÍA</a>
        <div>
          {[...Array(5)].map((_, index) => (
            <BsFillStarFill className="icon" key={index} />
          ))}
        </div>
      </article>
      <article className="subMenu_info">
        <a>EVENTO</a>
        <div>
          {[...Array(5)].map((_, index) => (
            <BsFillStarFill className="icon" key={index} />
          ))}
        </div>
      </article>
      <article className="subMenu_info">
        <a>PROCESO</a>
        <div>
          {[...Array(5)].map((_, index) => (
            <BsFillStarFill className="icon" key={index} />
          ))}
        </div>
      </article>
      <article className="subMenu_info">
        <a>BEHANCE</a>
        <div>
          {[...Array(5)].map((_, index) => (
            <BsFillStarFill className="icon" key={index} />
          ))}
        </div>
      </article>
    </section>
  );
};

export default SubMenu;
