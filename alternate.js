const DOMSelectors = {
    header: document.querySelector("h1"),
    removeButtons: document.querySelectorAll(".remove-btn"),
    form: document.querySelector(".form"),
    nameInput: document.getElementById("name-input"),
    artistInput: document.getElementById("artist-input"),
    imgInput: document.getElementById("img-input"),
    container: document.querySelector(".container"),
  };
  
  /* function getInput() {
    DOMSelectors.form.addEventListener("submit", function (event) {
      event.preventDefault();
      const newAlbum = {
        name: DOMSelectors.nameInput.value,
        artist: DOMSelectors.artistInput.value,
        imageLink: DOMSelectors.imgInput.value,
      };
      return newAlbum;
    });
  }
   */
  
  
  function createCard() {
    DOMSelectors.form.addEventListener("submit", function (event) {
      event.preventDefault(); // default is refresh the page
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
    });
  };
  
  function remove() {
    DOMSelectors.removeButtons.forEach((button) => button.addEventListener("click", function(event){
      console.log(event.target.parentElement)
      //event.target.parentElement.remove()
    }))
  };
  createCard();
  remove()