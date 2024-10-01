const DOMSelectors = {
  header: document.querySelector("h1"),
  cardHeader: document.querySelector(".card-header"),
  button: document.querySelector(".btn"),
  form: document.querySelector(".form"),
};
DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault(); // default is refresh the page
  console.log(document.querySelector("input").value);
});
