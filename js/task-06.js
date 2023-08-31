const inputField = document.querySelector("#validation-input");

inputField.addEventListener("blur", checkValidation);

function checkValidation(event) {
  const symbolLength = inputField.dataset.length;

  const inputSymbolLength = inputField.value.length;

  if (inputSymbolLength === Number(symbolLength)) {
    inputField.classList.remove("invalid");
    inputField.classList.add("valid");
  } else {
    inputField.classList.remove("valid");
    inputField.classList.add("invalid");
  }
}
