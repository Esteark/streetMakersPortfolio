import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export const showNotify = (mensaje) => {
  Toastify({
    text: `${mensaje}`,
    duration: 3000,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #b0ce37, #b0ce37)",
      color: "#000",
      fontWeight: 700,
    },

    onClick: function () {}, // Callback after click
  }).showToast();
};
