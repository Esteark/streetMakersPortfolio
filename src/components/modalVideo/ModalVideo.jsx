import React, { useContext, useState } from "react";
import "./stylesModal.scss";
import { motion, AnimatePresence } from "framer-motion";
import { AppContext } from "../../router/Router";
import { IoCloseCircle } from "react-icons/io5";

const ModalVideo = () => {
  const { isOpen, handleModal } = useContext(AppContext);
  const modalVariants = {
    hidden: {
      y: "-100%",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
  };
  return (
    <motion.div
      className="secModalVideo"
      variants={modalVariants}
      initial="hidden"
      animate={isOpen ? "visible" : "hidden"}
      transition={{ duration: 0.3 }}
    >
      <article>
        <div className="sec1">
          <IoCloseCircle
            className="icon"
            onClick={() => {
              handleModal();
            }}
          />
        </div>
        <div className="sec2">
          <iframe
            src="https://www.youtube.com/embed/xwTVjCQOvDg"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </article>
    </motion.div>
  );
};

export default ModalVideo;
