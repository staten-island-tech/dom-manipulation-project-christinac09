const DOMSelectors = {
  header: document.querySelector("h1"),
  button: document.querySelector(".btn"),
  form: document.querySelector(".form"),
};
DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault(); // default is refresh the page
  let name = document.querySelector(".").value;
  console.log(name);
});
