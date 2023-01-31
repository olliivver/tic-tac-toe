let xTurn = true;
let gameWon = false;
let count = 0;
const boxes = document.getElementsByClassName("box");
const xFirst = document.getElementById("xFirst");
const gameTitle = document.getElementById("ticTacToe");
//What happens when you click a box?
//1. The box ID is sent to the select function
//2. The game over function is called to check if the game has been won
//3. The game instructions disappear
//4. The game checks if a tie has occurred
for (i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", (e) => {
    const boxId = e.target.id;
    select(boxId);
    gameOver();
    xFirst.classList.add("invis");
    if (count === 9 && gameWon === false) {
      gameTitle.innerText = "Game is tied";
    }
  });
}
//The box ID is sent here to determine if the box is empty, and if so, will put an 'X' or 'O' inside.
const select = (boxId) => {
  const boxContent = document.getElementById(boxId);
  if (gameWon == false) {
    if (!boxContent.innerText) {
      if (!xTurn) {
        boxContent.innerText = "O";
        xTurn = true;
        count++;
      } else {
        boxContent.innerText = "X";
        xTurn = false;
        count++;
      }
    }
  }
};
//The game over function iterates through all the rows and diagonals and checks if they contain all 'X's and 'O's.
//If so, the title will announce the winner, and the game will end.
const gameOver = () => {
  const rowArr = [
    "row1",
    "row2",
    "row3",
    "col1",
    "col2",
    "col3",
    "dia1",
    "dia2",
  ];
  for (i = 0; i < rowArr.length; i++) {
    const currentRow = document.getElementsByClassName(rowArr[i]);
    for (j = 0; j < currentRow.length; j++) {
      if (currentRow[j].innerText) {
        if (
          currentRow[0].innerText == currentRow[1].innerText &&
          currentRow[1].innerText == currentRow[2].innerText
        ) {
          if (currentRow[j].innerText == "X") {
            gameTitle.innerText = "Player X Wins";
          } else {
            gameTitle.innerText = "Player O Wins";
          }
          gameWon = true;
        }
      }
    }
  }
};

//RESET Button
//Resets variables and clears game board
document.getElementById("reset-btn").addEventListener("click", (e) => {
  xTurn = true;
  gameTitle.innerText = "TIC TAC TOE";
  gameWon = false;
  count = 0;
  for (i = 0; i < boxes.length; i++) {
    boxes[i].innerText = "";
  }
});
