import React, { useState } from "react";
import "../stylesheets/CalculatorGrid.css";
import Button from "./Button.jsx";

function CalculatorGrid() {
  
  const [result, setResult] = useState("0"); 

  function handleOneBtn() {
    setResult((prev) => prev + "1");
  }

  function handleTwoBtn() {
    setResult((prev) => prev + "2");
  }

  function handleThreeBtn() {
    setResult((prev) => prev + "3");
  }

  function handleFourBtn() {
    setResult((prev) => prev + "4");
  }
  
  function handleFiveBtn() {
    setResult((prev) => prev + "5");
  }

  function handleSixBtn() {
    setResult((prev) => prev + "6");
  }

  function handleSevenBtn() {
    setResult((prev) => prev + "7");
  }

  function handleEightBtn() {
    setResult((prev) => prev + "8");
  }

  function handleNineBtn() {
    setResult((prev) => prev + "9");
  }

  function handleChange(e) {
    if (e.target.value.startsWith("0")) {
      e.target.value.slice(1); 
    } 
  }

  return (
    <div className="calculator">

      <input type="text" onChange={handleChange} value={result} className="input" />

      <Button value="AC" />
      <Button value="Undo" />
      <Button value="%" />
      <Button value="/" />

      <Button value="7" onClick={handleSevenBtn} />
      <Button value="8" onClick={handleEightBtn} />
      <Button value="9" onClick={handleNineBtn} />
      <Button value="x" />

      <Button value="4" onClick={handleFourBtn} />
      <Button value="5" onClick={handleFiveBtn} />
      <Button value="6" onClick={handleSixBtn} />
      <Button value="-" />

      <Button value="1" onClick={handleOneBtn} />
      <Button value="2" onClick={handleTwoBtn} />
      <Button value="3" onClick={handleThreeBtn} />
      <Button value="+" />

      <Button value="Ans" />
      <Button value="0" />
      <Button value="." />
      <Button value="=" />

    </div>
  );
}

export default CalculatorGrid;
