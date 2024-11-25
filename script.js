let userInput = document.querySelector("#userInput")
let message = document.querySelector('#message')
let messageMirror = document.querySelector('#mirror')
let submitButton = document.querySelector('#submit')
let footerBtns = document.querySelectorAll("#buttons button")
let selectedColor = "red"
let currentOpacity = 0.0

let redBtn = document.querySelector("#red-btn")
let blackBtn = document.querySelector("#black-btn")
let randomBtn = document.querySelector("#random-btn")
let eraserBtn = document.querySelector("#eraser-btn")


drawBoard()

redBtn.onclick = () => {
  selectedColor = "red"
  resetOpacity()
}

blackBtn.onclick = () => {
  selectedColor = "black"
  resetOpacity()
}

randomBtn.onclick = () => {
  selectedColor = "random"
  resetOpacity()
}

eraserBtn.onclick = () => selectedColor = "white"

userInput.addEventListener('focus', showHint)
userInput.addEventListener('keyup', mirrorValue)
submitButton.addEventListener('click', drawBoard)




function drawBoard () {
  const board = document.querySelector("#board")
  board.innerHTML = "";
  let userValue = userInput.value

    if(userValue < 0 || userValue > 100 || isNaN(userValue)) {
        message.style.color = "red"
        message.textContent = "Make sure it's a number from 2 to 100!";
    } else {
    message.textContent = "";
    messageMirror.textContent = "";
    userValue.value = "";
    board.innerHTML = "";
    }

    if (userValue == 0 || userValue > 100 || userValue == "") {
      for (i=0; i < 10 ; i++){
        const columnTile = document.createElement("div")
        columnTile.classList.add("column-tile")
        // boardName.appendChild(columnTile)
    
        for (j=0; j < 10; j++){
          const rowTile = document.createElement("div")
          rowTile.classList.add("row-tile")
          // rowTile.addEventListener("mouseover", changeColor)
          columnTile.appendChild(rowTile)
        }
    
        board.appendChild(columnTile)

      } 
    } else {
        for (i=0; i < userValue ; i++){
          const columnTile = document.createElement("div")
          columnTile.classList.add("column-tile")
          // boardName.appendChild(columnTile)
      
          for (j=0; j < userValue; j++){
            const rowTile = document.createElement("div")
            rowTile.classList.add("row-tile")
            columnTile.appendChild(rowTile)
          }
      
          board.appendChild(columnTile)
        }
      }

      startColor()
    }
 
function startColor (){
  let tiles = document.getElementsByClassName("row-tile");
  for (let i = 0; i < tiles.length; i++) {
      tiles[i].addEventListener("mouseover",(e) => {
        if (selectedColor === "random"){
          console.log(e.eventPhase)
          tiles[i].style.backgroundColor = "#"+Math.floor(Math.random()*16777215).toString(16); 
        } else{
          tiles[i].style.opacity = currentOpacity
          tiles[i].style.backgroundColor = selectedColor;
        }
        currentOpacity+=0.1

      });
      }
}


function showHint(){
  message.style.color ="green"
  message.textContent = "Enter a number between 1 and 100"
}

function mirrorValue() {
  messageMirror.textContent = ` x ${userInput.value}`;
}

const resetOpacity = () => currentOpacity = 0; 