let userInput = document.querySelector("#userInput")
let message = document.querySelector('#message')
let messageMirror = document.querySelector('#mirror')
let submitButton = document.querySelector('#submit')


userInput.addEventListener('focus', showHint)
userInput.addEventListener('keyup', mirrorValue)
submitButton.addEventListener('click', drawBoard)


function drawBoard () {
  const board = document.querySelector("#board")
  board.innerHTML = "";
  let userValue = userInput.value

    if(userValue < 0 || userValue > 99 || isNaN(userValue)) {
        message.style.color = "red"
        message.textContent = "Make sure it's a number from 2 to 99!";
    } else {
    message.textContent = "";
    messageMirror.textContent = "";
    userValue.value = "";
    board.innerHTML = "";
    }

    if (userValue == 0 || userValue > 99 || userValue == "") {
      for (i=0; i < 10 ; i++){
        const columnTile = document.createElement("div")
        columnTile.classList.add("column-tile")
        // boardName.appendChild(columnTile)
    
        for (j=0; j < 10; j++){
          const rowTile = document.createElement("div")
          rowTile.classList.add("row-tile")
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
    }
 




function showHint(){
  message.style.color ="green"
  message.textContent = "Enter a number between 1 and 100"
}

function mirrorValue() {
  messageMirror.textContent = ` x ${userInput.value}`;
}