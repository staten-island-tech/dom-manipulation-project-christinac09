const DOMSelectors = {
  header: document.querySelector("h1"),
  removeButton: document.querySelector(".remove-btn"),
  form: document.querySelector(".form"),
  nameInput: document.querySelector("#name-input"),
  descInput: document.querySelector("#desc-input"),
  imgInput: document.querySelector("#img-input"),
};
DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault(); // default is refresh the page
  const newAlbum = {
    name: DOMSelectors.nameInput.value,
    description: DOMSelectors.descInput.value,
    imageLink: DOMSelectors.imgInput.value,
  };
  console.log(newAlbum);
});
