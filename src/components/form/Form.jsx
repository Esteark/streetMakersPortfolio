import React, { useContext, useState } from "react";
import "./stylesForm.scss";
import { GrInstagram } from "react-icons/gr";
import { SlArrowUp } from "react-icons/sl";
import Swal from "sweetalert2";
import { showNotify } from "../../services/Notify";
import { useParams } from "react-router-dom";
import { AppContext } from "../../router/Routers";

const Form = () => {
  const [text, setText] = useState("");
  const reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const { id } = useParams();
  const { setSecNav } = useContext(AppContext);
  const showAlert = () => {
    if (text) {
      if (reg.test(text)) {
        Swal.fire({
          title: "Enviar datos",
          text: "¿Te encuentras completamente seguro de enviar esta información?",
          icon: "question",
          iconColor: "#b0ce37", // Cambiar el color del icono
          confirmButtonColor: "#b0ce37", // Cambiar el color del botón de confirmación
          cancelButtonColor: "#ec501c",
          confirmButtonText: "Enviar",
          cancelButtonText: "Cancelar",
          showCancelButton: true,
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Datos Enviados!",
              icon: "success",
              confirmButtonColor: "#b0ce37",
            });
            setText("");
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire({
              title: "Operación cancelada",
              icon: "error",
              confirmButtonColor: "#ec501c",
            });
          }
        });
      } else {
        showNotify(
          "Ingresa un correo electrónico  válido para poder continuar"
        );
      }
    } else {
      showNotify("Ingresa un correo electrónico para poder continuar");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setSecNav("");
  };

  return (
    <section className="secForm" id={id}>
      <article className="secForm_header">
        <h3>ENTRADA LIBRE con boletería</h3>
        <GrInstagram className="icon" />
      </article>
      <article className="secForm_input">
        <h2>INSCRIPCIÓN</h2>
        <p>
          Para recibir una entrada es necesario inscribir tu correo. Al terminar
          de ingresar tus datos no olvides revisar la bandeja de entrada o el
          spam.
        </p>
        <input
          type="email"
          placeholder="EMAIL"
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
        />
        <p>
          Acepto el <span>tratamiento de datos</span> y los{" "}
          <span>términos y condiciones</span>
        </p>
      </article>
      <article className="secForm_buttons">
        <button onClick={showAlert}>ENVIAR</button>
        <div>
          <button onClick={scrollToTop}>VOLVER</button>
          <SlArrowUp className="icon" onClick={scrollToTop} />
        </div>
      </article>
    </section>
  );
};

export default Form;
