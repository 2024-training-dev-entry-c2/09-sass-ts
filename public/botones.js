document.addEventListener("DOMContentLoaded", function () {
    var botones = document.querySelectorAll(".main-seccion6-preguntas-contenedor button");
    botones.forEach(function (boton, index) {
        boton.addEventListener("click", function () {
            var _a;
            var respuesta = (_a = boton.closest(".main-seccion6-preguntas-contenedor")) === null || _a === void 0 ? void 0 : _a.querySelector(".main-seccion6-preguntas-contenedor-respuesta");
            if (respuesta && respuesta instanceof HTMLElement) {
                if (respuesta.style.display === "none" || respuesta.style.display === "") {
                    respuesta.style.display = "block";
                }
                else {
                    respuesta.style.display = "none";
                }
            }
        });
    });
});
