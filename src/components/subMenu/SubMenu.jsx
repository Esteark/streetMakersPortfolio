import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import "./stylesSubMenu.scss";

const SubMenu = () => {
  return (
    <section className="subMenu">
      <article className="subMenu_info">
        <h3>INICIO</h3>
        <div>
          {[...Array(5)].map((_, index) => (
            <BsFillStarFill className="icon" key={index} />
          ))}
        </div>
      </article>
      <article className="subMenu_info">
        <h3>GALERÍA</h3>
        <div>
          {[...Array(5)].map((_, index) => (
            <BsFillStarFill className="icon" key={index} />
          ))}
        </div>
      </article>
      <article className="subMenu_info">
        <h3>EVENTO</h3>
        <div>
          {[...Array(5)].map((_, index) => (
            <BsFillStarFill className="icon" key={index} />
          ))}
        </div>
      </article>
      <article className="subMenu_info">
        <h3>PROCESO</h3>
        <div>
          {[...Array(5)].map((_, index) => (
            <BsFillStarFill className="icon" key={index} />
          ))}
        </div>
      </article>
      <article className="subMenu_info">
        <h3>BEHANCE</h3>
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
