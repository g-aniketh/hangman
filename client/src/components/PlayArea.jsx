import React from "react";

function PlayArea() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Hangman</h1>
          <div className="hangman-image"></div>
          <div className="word"></div>
        </div>
        <div className="col">
          <div className="guesses"></div>
        </div>
      </div>
    </div>
  );
}

export default PlayArea;
