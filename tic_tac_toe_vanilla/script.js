const cells = document.querySelectorAll(".cell");
const board = document.querySelector(".board");
const reset = document.querySelector(".reset");
const clear = document.querySelector(".clear");
const playerXScoreDOM = document.querySelector(".player--x--score");
const playerOScoreDOM = document.querySelector(".player--o--score");
let playerXScore = 0;
let playerOScore = 0;

let player1 = true; // toggle to swap turns
board.classList.add("cross"); // let crosses make first move

let cellsFilled = 0; //increases with every move

function newGame() {
  player1 = true;
  cellsFilled = 0;
  cells.forEach((cell) => (cell.className = "cell"));
  board.className = "board cross";
}
//clear button
clear.addEventListener("click", newGame);
//reset button
reset.addEventListener("click", () => {
  playerXScore = 0;
  playerOScore = 0;
  playerOScoreDOM.textContent = 0;
  playerXScoreDOM.textContent = 0;
  newGame();
});

//click to make a move(put a mark)
function handleClick(cell) {
  if (!cellTaken(cell)) {
    if (player1) {
      putCross(cell);
    } else {
      putCircle(cell);
    }
    checkForWin(cells, winPositionsArr);
    countCells();
  }
}
//listen for moves
cells.forEach((cell) =>
  cell.addEventListener("click", handleClick.bind(null, cell))
);

//check how many empty cells left
function countCells() {
  cellsFilled++;
  if (cellsFilled === 9) {
    setTimeout(() => {
      newGame();
    }, 1500);
  }
}

function putCross(cell) {
  cell.classList.add("cross");
  board.classList.remove("cross");
  board.classList.add("circle");
  player1 = !player1;
}
function putCircle(cell) {
  cell.classList.add("circle");
  board.classList.remove("circle");
  board.classList.add("cross");
  player1 = !player1;
}

function cellTaken(cell) {
  const taken =
    cell.classList.contains("circle") || cell.classList.contains("cross");
  return taken;
}

function checkForWin(cells, winCombinations) {
  winCombinations.forEach((comb) => {
    if (
      cells[comb[0]].classList.contains("cross") &&
      cells[comb[1]].classList.contains("cross") &&
      cells[comb[2]].classList.contains("cross")
    ) {
      playerXScore++;
      playerXScoreDOM.textContent = playerXScore;
      newGame();
    }
    if (
      cells[comb[0]].classList.contains("circle") &&
      cells[comb[1]].classList.contains("circle") &&
      cells[comb[2]].classList.contains("circle")
    ) {
      playerOScore++;
      playerOScoreDOM.textContent = playerOScore;
      newGame();
    }
  });
}

const winPositionsArr = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8],
];

console.log(board);
