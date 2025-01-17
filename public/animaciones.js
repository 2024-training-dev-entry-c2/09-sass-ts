document.addEventListener("DOMContentLoaded", function () {
    var opiniones = document.querySelectorAll(".main-seccion4-opiniones-opion");
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
            else {
                // (entry.target as HTMLElement).classList.remove("visible"); 
            }
        });
    }, { threshold: 0.2 });
    opiniones.forEach(function (opinion) {
        observer.observe(opinion);
    });
});
