const DOMSelectors = {
  heading: document.querySelector("h1"),
  removeButtons: document.querySelectorAll(".remove-btn"),
  form: document.querySelector(".form"),
  allInputs: document.querySelectorAll(".input-value"),
  nameInput: document.getElementById("name-input"),
  artistInput: document.getElementById("artist-input"),
  imgInput: document.getElementById("img-input"),
  container: document.querySelector(".container"),
  cards: document.querySelectorAll(".card"),
};

function makeAlbum() {
  const newAlbum = {
    name: DOMSelectors.nameInput.value,
    artist: DOMSelectors.artistInput.value,
    imageLink: DOMSelectors.imgInput.value,
  };
  // check if all input fields are filled out
  if (!checkIfFilled(newAlbum)) {
    return;
  }
  console.log(newAlbum);
  return newAlbum;
}

function addCard(card) {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
      <h2 class="card-name">${card.name}</h2>
      <h3 class="card-artist">${card.artist}</h3>
      <img src="${card.imageLink}" alt="" class="card-img">
      <button class="remove-btn">Remove</button>
    </div>`
  );
}

function addRemoveButtons() {
  DOMSelectors.removeButtons = document.querySelectorAll(".remove-btn");
  DOMSelectors.removeButtons.forEach((btn) =>
    btn.addEventListener("click", function (event) {
      event.preventDefault();
      event.target.parentElement.remove();
    })
  );
}

function removeInputs() {
  DOMSelectors.allInputs.forEach((input) => (input.value = ""));
}

/* function checkIfFilled(object) {
  const inputs = Object.values(object);
  let counter = 0;
  inputs.forEach((value) => {
    if (value === "") {
      counter += 1;
    }
  });
  if (counter > 0) {
    alert("Please fill out ALL input fields");
    return false;
  } else {
    return true;
  }
} */

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  const Album = makeAlbum();
  addCard(Album);
  removeInputs();
  addRemoveButtons();
});
