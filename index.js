const DOMSelectors = {
  heading: document.querySelector("h1"),
  removeButtons: document.querySelectorAll(".remove-btn"),
  form: document.querySelector(".form"),
  allInputs: document.querySelectorAll(".input-value"),
  nameInput: document.getElementById("name-input"),
  artistInput: document.getElementById("artist-input"),
  imgInput: document.getElementById("img-input"),
  container: document.querySelector(".container"),
};
let idCounter = 0;
function makeAlbum() {
  const newAlbum = {
    name: DOMSelectors.nameInput.value,
    artist: DOMSelectors.artistInput.value,
    imageLink: DOMSelectors.imgInput.value,
  };
  // check if all input fields are filled out
  /* if (!checkIfFilled(newAlbum)) {
    return;
  } */
  console.log(newAlbum);
  return newAlbum;
}

function addCard(card) {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card" id="card-${idCounter}">
      <h2 class="card-name">${card.name}</h2>
      <h3 class="card-artist">${card.artist}</h3>
      <img src="${card.imageLink}" alt="" class="card-img">
      <button class="remove-btn" id="btn-${idCounter}">Remove</button>
    </div>`
  );
}

function addRemoveButtons() {
  let currentId = idCounter;
  let currentCard = document.getElementById(`card-${currentId}`);
  let currentRemoveBtn = document.getElementById(`btn-${currentId}`);
  currentRemoveBtn.addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target.parentElement === currentCard) {
      event.target.parentElement.remove();
    } else {
      alert("something is wrong with addRemoveButtons function");
    }
  });
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
    alert("HEY. fill out ALL input fields");
    return false;
  } else {
    return true;
  }
} */

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  const Album = makeAlbum();
  idCounter += 1;
  addCard(Album);
  removeInputs();
  addRemoveButtons();
});
