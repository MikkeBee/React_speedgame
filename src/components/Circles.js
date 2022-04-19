import React from "react";

const Circles = (props) => {
  return (
    <div
      style={{ pointerEvents: props.disabled ? "auto" : "none" }}
      key={props.circle.id}
      className={`circle${props.circle.id} ${props.active ? "active" : ""}`}
      id="circle"
      onClick={() => props.click(props.circle.id)}
    >
      <i className={`fa-solid ${props.circle.backimg} fa-4x`}></i>
    </div>
  );
};

export default Circles;

// return <div>{props.id}</div>;

//<div className={`circle ${props.active} ? 'active' : ''}`}
