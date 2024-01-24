import React, { useEffect, useState } from "react";
import "./Cell.css";

const movesArray = new Array(9).fill(""); //stores players moves

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

let cellsFilled = 0;

function Cell(props) {
  const [player, setPlayer] = useState(""); //player will take values('cross','circle')
  // const [gameOver, setGameOver] = useState(false);
  let cellClass = "cell " + player;

  // for clear board button
  if (props.clear) {
    cellClass = "cell";
  }
  //for clear board button
  useEffect(() => {
    if (props.clear) {
      cellsFilled = 0;
      setPlayer("");
      movesArray.fill("");
    }
  }, [props.clear]);

  const handleClick = () => {
    cellClass = "cell " + player;
    if (!isCellTaken()) {
      if (props.cross) {
        putCross();
      } else {
        putCircle();
      }
      countCells();
      checkForWin(winPositionsArr);
    }
  };
  const putCross = () => {
    setPlayer("cross");
    props.onSwapTurn("circle");
    movesArray[props.pos] = "cross";
  };
  const putCircle = () => {
    setPlayer("circle");
    props.onSwapTurn("cross");
    movesArray[props.pos] = "circle";
  };
  const isCellTaken = () => {
    const taken = player === "cross" || player === "circle";
    props.checkCell(taken);
    return taken;
  };

  function countCells() {
    cellsFilled++;
    console.log(cellsFilled);
    if (cellsFilled === 9) {
    }
  }
  const newGame = (name) => {
    props.isGameOver(true, name);
    movesArray.fill("");
  };
  const checkForWin = (winCombinations) => {
    winCombinations.forEach((comb) => {
      if (
        movesArray[comb[0]] === "cross" &&
        movesArray[comb[1]] === "cross" &&
        movesArray[comb[2]] === "cross"
      ) {
        newGame("playerCross");
      }
      if (
        movesArray[comb[0]] === "circle" &&
        movesArray[comb[1]] === "circle" &&
        movesArray[comb[2]] === "circle"
      ) {
        newGame("playerCircle");
      }
    });
  };

  return <div className={cellClass} onClick={handleClick}></div>;
}

export default Cell;
