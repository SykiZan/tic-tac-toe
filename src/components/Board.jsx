import React, { useState } from "react";
import "./Board.css";
import Cell from "./Cell";
function Board(props) {
  const arr = new Array(9).fill("");

  const [mark, setMark] = useState("cross");
  const [crossTurn, setCrossTurn] = useState(true);
  const swapTurnHandler = (mark) => {
    setMark(mark);
  };

  let cellTaken = false;
  const checkCellHandler = (taken) => {
    cellTaken = taken;
  };

  const boardClass = "board " + mark;
  const boardClickHandler = () => {
    if (!cellTaken) setCrossTurn(!crossTurn);
    props.onNewGame(true);
  };

  const gameOver = (isOver, name) => {
    console.log("over", isOver);
    props.onGameOver(isOver, name);
  };

  let clearBoard = "";
  if (props.onClear) clearBoard = props.onClear;
  else if (props.win) clearBoard = props.win;
  if (props)
    return (
      <>
        <div className={boardClass} onClick={boardClickHandler}>
          {arr.map((cell, i) => (
            <Cell
              onSwapTurn={swapTurnHandler}
              cross={crossTurn}
              checkCell={checkCellHandler}
              clear={clearBoard}
              pos={i}
              isGameOver={gameOver}
            />
          ))}
        </div>
      </>
    );
}

export default Board;
