import React from "react";

const Buttons = (props) => {
  return (
    <div className="buttons">
      <button type="button" className="button1" onClick={props.gameStart}>
        Start game
      </button>
      <button type="button" className="button2">
        Stop game
      </button>
    </div>
  );
};

export default Buttons;
