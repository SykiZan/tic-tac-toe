import React, { useEffect, useState } from "react";
import "./GameWindow.css";
import Board from "./Board";
import GameInfo from "./GameInfo";

let crossScore = 0;
let circleScore = 0;

function GameWindow() {
  const [clearClicked, setClearClicked] = useState(false);
  const [gameOver, setGameOver] = useState("");
  const clearClickHandler = () => {
    setClearClicked(true);
  };
  const newGame = (boardClicked) => {
    if (boardClicked) {
      setClearClicked(false);
      if (gameOver) setGameOver(false);
    }
  };
  const gameOverHandler = (isOver, name) => {
    if (name === "playerCross") crossScore++;
    if (name === "playerCircle") circleScore++;
    setGameOver(isOver);
  };

  return (
    <div className="game-window">
      <GameInfo crossScore={crossScore} circleScore={circleScore} />

      <div className="board--wrap">
        <Board
          onClear={clearClicked}
          onNewGame={newGame}
          onGameOver={gameOverHandler}
          win={gameOver}
        />
      </div>
      <button className="btn clear" onClick={clearClickHandler}>
        Clear board
      </button>
    </div>
  );
}

export default GameWindow;
