function editButtons() {
    let currentId = idCounter;
    let currentCardName = document.getElementById(`card-name-${currentId}`);
    let currentCardArtist = document.getElementById(`card-artist-${currentId}`)
    let currentEditBtn = document.getElementById(`editbtn-${currentId}`);
    currentEditBtn.addEventListener("click", function () {
      currentCardName.contentEditable = true;
      currentCardName.style.backgroundColor = "#dddbdb";
      currentCardArtist.contentEditable = true;
      currentCardArtist.style.backgroundColor = "#dddbdb";
    });
  }
function doneButtons(){
    let currentId = idCounter;
    let currentCardName = document.getElementById(`card-name-${currentId}`);
    let currentCardArtist = document.getElementById(`card-artist-${currentId}`)
    let currentDoneBtn = document.getElementById(`donebtn-${currentId}`);
    currentDoneBtn.addEventListener("click", function () {
      currentCardName.contentEditable = false;
      currentCardName.style.backgroundColor = "#7199ce";
      currentCardArtist.contentEditable = false;
      currentCardArtist.style.backgroundColor = "#7199ce";
    });
  }

// add those functions to index.js
// call them in form.addEventListener
// add in insertAdjacentHTML in addCard(card)
// make a div for the three buttons:
    /* `<div class="buttons-container">
        <button class="remove-btn" id="btn-${idCounter}">Remove</button>
        <button class="edit-btn" id="editbtn-${idCounter}">Edit</button>
        <button class="done-btn" id="donebtn-${idCounter}">Done</button></div>
    </div>` */
// then in style.css:
    /* .buttons-container {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    } */
// also adjust sizing percentages for individual buttons