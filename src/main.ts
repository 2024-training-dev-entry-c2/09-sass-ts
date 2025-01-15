const languageModal = document.getElementById("language-modal") as HTMLElement;
const languageModalContainer = document.getElementById("lm-container") as HTMLElement;
const languageButtons = document.querySelectorAll(".button_language") as NodeListOf<HTMLButtonElement>;
const languageButtonClose = document.getElementById("lm-button-close") as HTMLButtonElement;

document.addEventListener('DOMContentLoaded', () => {
  languageButtons.forEach(button => {
    button.addEventListener('click', () => {
      languageModal.classList.add("language-modal--show");
      languageModalContainer.classList.add("language-modal__container--show");
    });
  });

  languageButtonClose.addEventListener('click', () => {
    languageModal.classList.add("language-modal--hide");
    languageModalContainer.classList.add("language-modal__container--hide");

    setTimeout(() => {
      languageModalContainer.classList.remove("language-modal__container--show", "language-modal__container--hide");
      languageModal.classList.remove("language-modal--show", "language-modal--hide");
    }, 1300);
  })

});