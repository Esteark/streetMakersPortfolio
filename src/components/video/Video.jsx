import React, { useContext, useState } from "react";
import "./stylesVideo.scss";
import videoImg from "../../assets/img/video.jpg";
import ModalVideo from "../modalVideo/ModalVideo";
import { AppContext } from "../../router/Routers";

const Video = () => {
  const { handleModal } = useContext(AppContext);
  return (
    <figure className="secVideo" style={{ cursor: "pointer" }}>
      <img src={videoImg} alt="" onClick={handleModal} />
    </figure>
  );
};

export default Video;
