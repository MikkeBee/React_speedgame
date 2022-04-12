import React from "react";

const GoButton = (props) => {
  return (
    <div className="buttons">
      <button type="button" className="button1" onClick={props.gameStart}>
        Start game
      </button>
    </div>
  );
};

export default GoButton;
