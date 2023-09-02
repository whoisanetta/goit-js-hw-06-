function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector("button");
const bodySite = document.querySelector("body");
const nameColor = document.querySelector(".color");

button.addEventListener("click", onClickButton);

function onClickButton() {
  bodySite.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function backgroundColorBtnHandler(event) {
  document.body.style.backgroundColor = textContainer.textContent =
    getRandomHexColor();
}
