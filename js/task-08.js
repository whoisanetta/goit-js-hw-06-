const form = document.querySelector("form");

form.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(event.currentTarget);
  const dataObject = {};

  formData.forEach((value, name) => {
    dataObject[name] = value;
  });

  if (validateForm(dataObject)) {
    console.log(dataObject);
    form.reset();
  } else {
    alert("All fields must be filled");
  }

  function validateForm(data) {
    for (const key in data) {
      if (data[key] === "") {
        return false;
      }
    }
    return true;
  }
}
