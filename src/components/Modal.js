import React from "react";

const Modal = (props) => {
  let message = "";

  if (props.score <= 15) {
    message = "Ouch, you can do better than that!";
  } else if (props.score <= 30) {
    message = "Not bad, but no great. Keep going!";
  } else if (props.score <= 45) {
    message = "Impressive. Most impressive.";
  } else {
    message = "Woah, you're on fire!";
  }

  return (
    <section className="overlay">
      <div className="modalWindow">
        <div className="modalContent">
          <p>Game over, man.</p>
          <p>{message}</p>
          <span className="result">{props.score}</span>

          <button type="button" className="closeButton" onClick={props.reload}>
            <i className="fa-solid fa-circle-xmark fa-3x"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Modal;
