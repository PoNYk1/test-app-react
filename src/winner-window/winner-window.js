import React from "react";

import "./winner-window.css";

export default function WinnerWindow({ winner, draw }) {
  let clases = "winner-window",
    classSpan,
    winnerString;

  if (winner !== undefined) {
    clases += " show";
    if (winner === true) {
      winnerString = "BLUE WON !!!";
      classSpan = "win";
    } else if (winner === false) {
      winnerString = "RED WON !!!";
      classSpan = "win";
    }
    if (winner === "draw") {
      winnerString = "DRAW";
      classSpan = "draw";
    }
    setTimeout(() => location.reload(), 2000);
  }
  let display = (
    <div>
      <span className={classSpan}>{winnerString}</span>
    </div>
  );
  return <div className={clases}>{display}</div>;
}

/*
if (winner === "draw") {
  winnerString = "DRAW";
  classSpan = "draw";
}
*/
/*
if (winner === true) {
      winnerString = "BLUE WON !!!";
      classSpan = "win";
    } else if (winner === false) {
      winnerString = "RED WON !!!";
      classSpan = "win";
    }
*/
