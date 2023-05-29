import React, { useContext } from "react";
import "./stylesFooter.scss";
import street from "../../assets/img/streetmakers.png";
import streetmakers from "../../assets/img/steetmakersvertical.png";
import streetDesk from "../../assets/img/Desktop/streetDesk.png";
import steetmakersDesk from "../../assets/img/Desktop/steetmakersDesk.png";
import { AppContext } from "../../router/Router";

const Footer = () => {
  const { width } = useContext(AppContext);
  return (
    <footer>
      <img src={width >= 768 ? streetDesk : street} className="icon1" alt="" />
      <h3>SIXMAKERS 2023©</h3>
      <img
        src={width >= 768 ? steetmakersDesk : streetmakers}
        className="icon3"
        alt=""
      />
      <div className="secRedes">
        <a href="https://www.instagram.com/sixmakers/" target="_blank">
          INSTAGRAM
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100064626738642"
          target="_blank"
        >
          FACEBOOK
        </a>
      </div>
    </footer>
  );
};

export default Footer;
