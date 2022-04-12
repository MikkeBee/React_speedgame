import React from "react";

const Modal = (props) => {
  return (
    <section className="overlay">
      <div className="modalWindow">
        <div className="modalContent">
          <p>Oops, game over, man!</p>
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
