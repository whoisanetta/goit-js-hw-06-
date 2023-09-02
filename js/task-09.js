const button = document.querySelector("button");
const bodySite = document.querySelector("body");
const nameColor = document.querySelector(".color");

button.addEventListener("click", onClickButton);

function onClickButton() {
  bodySite.style.backgroundColor = getRandomHexColor();
}

function backgroundColorBtnHandler(event) {
  document.body.style.backgroundColor = textContainer.textContent =
    getRandomHexColor();
}

function backgroundColorBtnHandler(event) {
  document.body.style.backgroundColor = textContainer.textContent =
    getRandomHexColor();
}
