import React, { useEffect, useState } from "react";
import "./stylesLoader.scss";
import icon from "../../assets/img/icon.svg";
import { BsFillStarFill } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
const Loader = () => {
  const [show, setShow] = useState(true);

  const [counter, setCounter] = useState(0);
  const [stars, setStars] = useState([1, 2, 3, 4, 5]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "auto";
    }, 3000);

    const tiempo = setInterval(() => {
      setCounter((prevCounter) => (prevCounter + 1) % (stars.length + 2));
    }, 200);

    return () => {
      clearTimeout(timer);
      clearInterval(tiempo);
    };
  }, [stars.length]);

  return (
    <AnimatePresence>
      {show && (
        <motion.section
          className="secLoader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1], // Escala desde 1 a 1.2 y luego vuelve a 1
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity, // Repite infinitamente
              repeatType: "reverse", // Invierte la animación al repetir
            }}
            className="icon"
          >
            <img src={icon} alt="" />
          </motion.div>
          <article className="secLoader-stars">
            {stars.map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: counter >= index + 1 ? 1 : 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <BsFillStarFill className="icon" />
              </motion.div>
            ))}
          </article>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Loader;
