const form = document.querySelector("#web-form");
form.addEventListener("submit", submitForm);

form.addEventListener("invalid", cancelPopup, true);

function cancelPopup(event) {
  console.log("cancelPopup");
  console.log(event);

  event.preventDefault();
}
function submitForm(event) {
  console.log("submitForm");
  event.preventDefault();
  printdata();
  form.reset();
}

function printdata() {
  console.log("printdata");

  const data = new FormData(form);
  console.log(data.get("firstname"));
}
