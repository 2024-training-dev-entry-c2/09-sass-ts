document.addEventListener("DOMContentLoaded", () => {
    const opiniones: NodeListOf<HTMLElement> = document.querySelectorAll(".main-seccion4-opiniones-opion");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    (entry.target as HTMLElement).classList.add("visible");
                } else {
                    // (entry.target as HTMLElement).classList.remove("visible"); 
                }
            });
        },
        { threshold: 0.2 } 
    );

    opiniones.forEach((opinion) => {
        observer.observe(opinion);
    });
});