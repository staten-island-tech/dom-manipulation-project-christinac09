const DOMSelectors = {
  header: document.querySelector("h1"),
  removeButton: document.querySelector(".remove-btn"),
  form: document.querySelector(".form"),
  nameInput: document.querySelector("#name-input"),
  artistInput: document.querySelector("#artist-input"),
  imgInput: document.querySelector("#img-input"),
  container: document.querySelector(".container"),
};

function getInput() {
  DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault(); // default is refresh the page
    const newAlbum = {
      name: DOMSelectors.nameInput.value,
      artist: DOMSelectors.artistInput.value,
      imageLink: DOMSelectors.imgInput.value,
    };
    return newAlbum;
  });
}
const a = getInput();
console.log(a);
function createCard(album) {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card"><h2 class="card-header">${album.name}</h2><button class="remove-btn">remove</button></div>`
  );
}

createCard(a);
