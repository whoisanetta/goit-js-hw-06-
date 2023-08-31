const inputField = document.querySelector("#name-input");
const outputField = document.querySelector("#name-output");

inputField.addEventListener("input", inputChange);

function inputChange(event) {
  const inputValue = event.currentTarget.value;

  outputField.textContent = inputValue === "" ? "Anonymos" : inputValue;
}
