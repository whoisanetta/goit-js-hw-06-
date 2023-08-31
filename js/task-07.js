const sizeInput = document.querySelector("input");
const text = document.querySelector("#text");

sizeInput.addEventListener("input", sizeChange);

function sizeChange(event) {
  const fontSize = event.target.value + "px";
  text.style.fontSize = fontSize;
}
