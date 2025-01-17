const elements = [
  document.getElementById("head__EARS") as HTMLElement,
  document.getElementById("head__HEAD") as HTMLElement,
  document.getElementById("head__NOSE_MIDDLE") as HTMLElement,
  document.getElementById("head__HEART_NOSE") as HTMLElement,
  document.getElementById("head__RIGHT_EYE_CONTUR") as HTMLElement,
  document.getElementById("head__LEFT_EYE_CONTUR") as HTMLElement,
  document.getElementById("head__TOP_SECOND_RIGHT_EYE") as HTMLElement,
  document.getElementById("head__TOP_SECOND_LEFT_EYE") as HTMLElement,
  document.getElementById("head__TOP_RIGHT_EYE") as HTMLElement,
  document.getElementById("head__TOP_LEFT_EYE") as HTMLElement,
  document.getElementById("head__BOTTOM_RIGHT_EYE") as HTMLElement,
  document.getElementById("head__BOTTOM_LEFT_EYE") as HTMLElement,
  document.getElementById("head__LEFT__NOSE_PART") as HTMLElement,
  document.getElementById("head__RIGHT_NOSE_PART") as HTMLElement,
  document.getElementById("head__LEFT_CIRCLE") as HTMLElement,
  document.getElementById("head__RIGHT_CIRCLE") as HTMLElement,
  document.getElementById("head__RIGHT_CHEAK") as HTMLElement,
  document.getElementById("head__LEFT_CHEAK") as HTMLElement,
  document.getElementById("head__BOTTOM_CIRCLE") as HTMLElement,
  document.getElementById("head__BOTTOM_LIPS") as HTMLElement,
  document.getElementById("head__TOP_LIPS") as HTMLElement,
  document.getElementById("head__HEAD_MIDDLE_SMALL_CIRCLE") as HTMLElement,
  document.getElementById("head__HEAD_RIGHT_SMALL_CIRCLE") as HTMLElement,
  document.getElementById("head__HEAD_LEFT_SMALL_CIRCLE") as HTMLElement,
  document.getElementById("head__HEAD_TOP_CIRCLE") as HTMLElement,
  document.querySelector(".stroke") as HTMLElement,
];

const colorButtonElement = [
  document.getElementById("color-1") as HTMLElement,
  document.getElementById("color-2") as HTMLElement,
  document.getElementById("color-3") as HTMLElement,
  document.getElementById("color-4") as HTMLElement,
  document.getElementById("color-5") as HTMLElement,
  document.getElementById("color-6") as HTMLElement,
  document.getElementById("color-7") as HTMLElement,
  document.getElementById("color-8") as HTMLElement,
];

let colorSelected = "rgb(255, 224, 0)";

function handleClick(event: Event) {
  const element = event.target as HTMLElement;
  element.setAttribute("fill", colorSelected);
}

function handleClickColor(event: Event) {
  const element = event.target as HTMLElement;
  const computedStyle = getComputedStyle(element);
  colorSelected = computedStyle.backgroundColor;
}

elements.forEach((element) => {
  if (element) {
    element.addEventListener("click", handleClick);
  }
});

colorButtonElement.forEach((element) => {
  if (element) {
    element.addEventListener("click", handleClickColor);
  }
});
