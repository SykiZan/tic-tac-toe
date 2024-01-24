import React from "react";
import "./GameInfo.css";
function GameInfo(props) {
  return (
    <div className="game-info">
      <h2 className="score">Score</h2>
      <div>
        <h2 className="score">Player_X:</h2>
        <h2 className="score player--x--score">{props.crossScore}</h2>
      </div>
      <div>
        <h2 className="score">Player_O:</h2>
        <h2 className="score player--y--score">{props.circleScore}</h2>
      </div>
    </div>
  );
}

export default GameInfo;
