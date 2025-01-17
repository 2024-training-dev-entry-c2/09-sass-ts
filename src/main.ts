document.addEventListener("DOMContentLoaded", () => {
  const mainLogo = document.getElementById("main-logo");
  const scrollLogo = document.getElementById("scroll-logo");

  if (!mainLogo || !scrollLogo) {
    console.error("Uno o ambos logos no existen en el DOM.");
    return;
  }

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
      mainLogo.classList.add("hidden");
      scrollLogo.classList.remove("hidden");
    } else {
      mainLogo.classList.remove("hidden");
      scrollLogo.classList.add("hidden");
    }
  });
});
