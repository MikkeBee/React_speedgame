import React from "react";

const Modal = (props) => {
  return (
    <section className="overlay">
      <div className="modalWindow">
        <div className="modalContent">
          <p>Oops, game over, man!</p>
          <p className="result"></p>
          <button type="button" className="closeButton">
            Close
          </button>
        </div>
      </div>
    </section>
  );
};

export default Modal;
