import React, { useState } from "react";
import "../stylesheets/CalculatorGrid.css";
import Button from "./Button.jsx";
import { evaluate } from "mathjs";

function CalculatorGrid() {
  const [result, setResult] = useState("");

  function handleZeroBtn() {
    if (result) {
      setResult((prev) => prev + "0");
    }
  }

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

  function handleAcBtn() {
    setResult("");
  }

  function handlePercentageBtn() {
    setResult((prev) => prev + "%");
  }

  function handleUndoBtn() {
    setResult((prev) => prev.slice(0, prev.length - 1));
  }

  function handleDivisionBtn() {
    setResult((prev) => prev + "/");
  }

  function handleMultiplication() {
    setResult((prev) => prev + "*");
  }

  function handlePlusBtn() {
    setResult((prev) => prev + "+");
  }

  function handleSubstractionBtn() {
    setResult((prev) => prev + "-");
  }

  function handlePointBtn() {
    if (result) {
      setResult((prev) => prev + ".");
    }
  }

  function handleAnsBtn() {
    // Implement functionality
  }

  function handleEqualBtn() {
    setResult((prev) => evaluate(prev));
  }

  function handleChange(e) {}

  return (
    <div className="calculator">
      <input
        type="text"
        onChange={handleChange}
        value={result}
        className="input"
        placeholder="0"
      />

      <Button value="AC" onClick={handleAcBtn} />
      <Button value="Undo" onClick={handleUndoBtn} />
      <Button value="%" onClick={handlePercentageBtn} />
      <Button value="/" onClick={handleDivisionBtn} />

      <Button value="7" onClick={handleSevenBtn} />
      <Button value="8" onClick={handleEightBtn} />
      <Button value="9" onClick={handleNineBtn} />
      <Button value="x" onClick={handleMultiplication} />

      <Button value="4" onClick={handleFourBtn} />
      <Button value="5" onClick={handleFiveBtn} />
      <Button value="6" onClick={handleSixBtn} />
      <Button value="-" onClick={handleSubstractionBtn} />

      <Button value="1" onClick={handleOneBtn} />
      <Button value="2" onClick={handleTwoBtn} />
      <Button value="3" onClick={handleThreeBtn} />
      <Button value="+" onClick={handlePlusBtn} />

      <Button value="Ans" onClick={handleAnsBtn} />
      <Button value="0" onClick={handleZeroBtn} />
      <Button value="." onClick={handlePointBtn} />
      <Button value="=" onClick={handleEqualBtn} />
    </div>
  );
}

export default CalculatorGrid;
