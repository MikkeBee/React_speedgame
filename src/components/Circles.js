import React from "react";

const Circles = (props) => {
  return (
    <div className="circles">
      <div className="circle1" id="circle">
        <i className="fa-solid fa-bolt-lightning"></i>
      </div>
      <div className="circle2" id="circle">
        <i className="fa-solid fa-music"></i>
      </div>
      <div className="circle3" id="circle">
        <i className="fa-solid fa-robot"></i>
      </div>
      <div className="circle4" id="circle">
        <i className="fa-solid fa-power-off"></i>
      </div>
    </div>
  );
};

export default Circles;
