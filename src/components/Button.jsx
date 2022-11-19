import React from "react";
import "../stylesheets/Button.css";

function Button({ value, onClick }) {

  function handleClick() {
    onClick();
  } 

  return (
    <button className="btn" onClick={handleClick}>{value}</button>
  );
}

export default Button;
