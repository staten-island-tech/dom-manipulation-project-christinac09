const DOMSelectors = {
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
  if (!checkIfFilled(newAlbum)) {
    return;
  }
  console.log(newAlbum);
  return newAlbum;
}

function addCard(card) {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card" id="card-${idCounter}">
      <h2 class="card-name" id="card-name-${idCounter}">${card.name}</h2>
      <h3 class="card-artist" id="card-artist-${idCounter}">${card.artist}</h3>
      <img src="${card.imageLink}" alt="" class="card-img">
      <button class="remove-btn" id="btn-${idCounter}">Remove</button>
    </div>`
  );
}
// this one ONLY addseventlistener to the button that was just created (DOESNT WORK FOR BTNS THAT WERE ALR IN HTML FILE)
function addRemoveButtons() {
  let currentId = idCounter;
  let currentCard = document.getElementById(`card-${currentId}`);
  let currentRemoveBtn = document.getElementById(`btn-${currentId}`);
  currentRemoveBtn.addEventListener("click", function (event) {
    event.preventDefault();
    //event.target.parentElement.remove(); <-- alt method
    currentCard.remove();
  });
}

// this one addseventlistener to ALL remove buttons EACH time a new card is created
/* function addRemoveButtons2() {
  DOMSelectors.removeButtons = document.querySelectorAll(".remove-btn");
  DOMSelectors.removeButtons.forEach((button)=>{button.addEventListener("click", function(event) {
    event.preventDefault();
    event.target.parentElement.remove()
  })})
} */

function removeInputs() {
  DOMSelectors.allInputs.forEach((input) => (input.value = ""));
}

function checkIfFilled(object) {
  const inputs = Object.values(object);
  let valid = true;
  inputs.forEach((value) => {
    if (value === "") {
      valid = false;
    }
  });
  if (!valid) {
    alert("HEY. fill out ALL input fields");
    return false;
  } else {
    return true;
  }
}

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  const Album = makeAlbum();
  idCounter += 1; // for targetting specific card & button in addRemoveButtons function
  addCard(Album);
  removeInputs();
  addRemoveButtons();
});
