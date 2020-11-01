// it prevent browser from reading event listener before page is loaded
document.addEventListener("DOMContentLoaded", function () {
 
// set an onclick method on each block using event listener
  document.getElementById("game").addEventListener("click", startGame);
  const winningTypes = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
    [6, 4, 8],
  ];
  // array on which value is filled after click of each box
  fillingState = ["", "", "", "", "", "", "", "", ""];
  let whoIsWinner = "";
  var currentPlayer = "X";

// function to start game
  function startGame(event) {
    secondPlayer();
    // it print value X or O on blocks
    function secondPlayer() {
      if (event.target.innerHTML != "" || whoIsWinner != "") {
        return;
      }
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      event.target.innerHTML = currentPlayer;
    }
    
    // get value filled inside the block and position of the block
    // let blockvalue = event.target.innerHTML;
    let textPosition = event.target.getAttribute("id");
    
    // fill value of block on array 
    fillingState[textPosition] = currentPlayer;
    Whowin();
  }

  // function to check winning condiion

  function Whowin() {
    let textClicked = textclicked();
    if (textClicked > 4) {
      console.log("textClicked" + textClicked);
      winner();
    }
  }
  function textclicked() {
    let boxFilled = fillingState.filter((element) => {
      element.trim();
      return element != "";
    });
    console.log("boxFilled " + boxFilled);
    return boxFilled.length;
  }

  function winner() {
    console.log("winner method");
    for (i = 0; i < winningTypes.length - 1; i++) {
      let element = winningTypes[i];
      let a = fillingState[element[0]];
      let b = fillingState[element[1]];
      let c = fillingState[element[2]];
      console.log("pri9ntingabc");
      console.log("a:" + a + "b:" + b + "c:" + c);
      if (a === "" || b === "" || c === "") {
        continue;
      }
      if (a === b && b === c) {
        whoIsWinner = a;
        document.getElementById("end").innerHTML =
          whoIsWinner + " has won the game";
        break;
      }
    }
  }
});