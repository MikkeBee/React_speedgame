import React from "react";

const Header = (props) => {
  return (
    <section className="mainBody">
      <h1>Speedgame</h1>
      <div className="score">Your score</div>

      <div className="scoreArea">
        <span id="score">{props.score}</span>
      </div>
    </section>
  );
};

export default Header;
