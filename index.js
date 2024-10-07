const DOMSelectors = {
  header: document.querySelector("h1"),
  removeButton: document.querySelector(".remove-btn"),
  form: document.querySelector(".form"),
  nameInput: document.querySelector("#name-input"),
  descInput: document.querySelector("#desc-input"),
  imgInput: document.querySelector("#img-input")
};
DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault(); // default is refresh the page
  let name = DOMSelectors.nameInput.value;
  let desc = DOMSelectors.descInput.value;
  let img = DOMSelectors.imgInput.value;
  let newAlbum = {
    name: name,
    description: desc,
    imageLink: img
  }
  console.log(newAlbum)
});
