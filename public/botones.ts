// Esperar que el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
    // Seleccionamos todos los botones
    const botones = document.querySelectorAll(".main-seccion6-preguntas-contenedor button");
  
    // Iteramos sobre cada botón y agregamos el manejador de eventos
    botones.forEach((boton, index) => {
      boton.addEventListener("click", () => {
        // Seleccionamos la respuesta correspondiente al botón clickeado
        const respuesta = boton.closest(".main-seccion6-preguntas-contenedor")?.querySelector(".main-seccion6-preguntas-contenedor-respuesta");
  
        if (respuesta && respuesta instanceof HTMLElement) {
          // Si la respuesta está visible, la ocultamos, si no, la mostramos
          if (respuesta.style.display === "none" || respuesta.style.display === "") {
            respuesta.style.display = "block";
          } else {
            respuesta.style.display = "none";
          }
        }
      });
    });
  });
  
  