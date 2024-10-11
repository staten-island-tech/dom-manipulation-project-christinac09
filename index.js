const DOMSelectors = {
  heading: document.querySelector("h1"),
  removeButtons: document.querySelectorAll(".card-removeBtn"),
  form: document.querySelector(".form"),
  allInputs: document.querySelectorAll(".input-value"),
  nameInput: document.getElementById("name-input"),
  artistInput: document.getElementById("artist-input"),
  imgInput: document.getElementById("img-input"),
  container: document.querySelector(".container"),
};

function createCard() {
  const newAlbum = {
    name: DOMSelectors.nameInput.value,
    artist: DOMSelectors.artistInput.value,
    imageLink: DOMSelectors.imgInput.value,
  };
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
      <h2 class="card-name">${newAlbum.name}</h2>
      <h3 class="card-artist">${newAlbum.artist}</h3>
      <img src="${newAlbum.imageLink}" alt="" class="card-img">
      <button class="card-removeBtn">Remove</button>
    </div>`
  );
  DOMSelectors.removeButtons = document.querySelectorAll(".card-removeBtn"); // so that it includes the button of the new card
  //DOMSelectors.allInputs.forEach((input)=>input.value="")
};

function removeCard() {
  DOMSelectors.removeButtons.forEach((button) => button.addEventListener("click",function(event){
  event.preventDefault();
  event.target.parentElement.remove()
}))
};

DOMSelectors.form.addEventListener("submit", function (event){
  event.preventDefault();
  createCard();
  removeCard();
});

