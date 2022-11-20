import React from "react";
import "../stylesheets/Button.css";

function Button({ value, bg, onClick }) {
  function handleClick() {
    onClick();
  }

  return (
    <button className={"btn " + bg} onClick={handleClick}>
      {value}
    </button>
  );
}

export default Button;
