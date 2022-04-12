import React from "react";

const StopButton = (props) => {
  return (
    <div className="buttons">
      <button type="button" className="button2" onClick={props.gameEnd}>
        Stop game
      </button>
    </div>
  );
};

export default StopButton;
