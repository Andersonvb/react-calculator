import React, { useState } from "react";
import "../stylesheets/CalculatorGrid.css";
import Button from "./Button.jsx";
import { evaluate } from "mathjs";

function CalculatorGrid() {
  const [result, setResult] = useState("");
  const [ans, setAns] = useState("");
  const [afterClickEqualBtn, setAfterClickEqualBtn] = useState(false);

  function handleZeroBtn() {
    if (result) {
      setResult((prev) => prev + "0");
    } else {
      setResult("0");
      setAfterClickEqualBtn(false);
    }
  }

  function handleOneBtn() {
    if (!afterClickEqualBtn) {
      setResult((prev) => prev + "1");
    } else {
      setResult("1");
      setAfterClickEqualBtn(false);
    }
  }

  function handleTwoBtn() {
    if (!afterClickEqualBtn) {
      setResult((prev) => prev + "2");
    } else {
      setResult("2");
      setAfterClickEqualBtn(false);
    }
  }

  function handleThreeBtn() {
    if (!afterClickEqualBtn) {
      setResult((prev) => prev + "3");
    } else {
      setResult("3");
      setAfterClickEqualBtn(false);
    }
  }

  function handleFourBtn() {
    if (!afterClickEqualBtn) {
      setResult((prev) => prev + "4");
    } else {
      setResult("4");
      setAfterClickEqualBtn(false);
    }
  }

  function handleFiveBtn() {
    if (!afterClickEqualBtn) {
      setResult((prev) => prev + "5");
    } else {
      setResult("5");
      setAfterClickEqualBtn(false);
    }
  }

  function handleSixBtn() {
    if (!afterClickEqualBtn) {
      setResult((prev) => prev + "6");
    } else {
      setResult("6");
      setAfterClickEqualBtn(false);
    }
  }

  function handleSevenBtn() {
    if (!afterClickEqualBtn) {
      setResult((prev) => prev + "7");
    } else {
      setResult("7");
      setAfterClickEqualBtn(false);
    }
  }

  function handleEightBtn() {
    if (!afterClickEqualBtn) {
      setResult((prev) => prev + "8");
    } else {
      setResult("8");
      setAfterClickEqualBtn(false);
    }
  }

  function handleNineBtn() {
    if (!afterClickEqualBtn) {
      setResult((prev) => prev + "9");
    } else {
      setResult("9");
      setAfterClickEqualBtn(false);
    }
  }

  function handleAcBtn() {
    setAns(result);
    setResult("");
  }

  function handlePercentageBtn() {
    if (result) {
      if (
        result.endsWith("% ") ||
        result.endsWith("/ ") ||
        result.endsWith("* ") ||
        result.endsWith("+ ") ||
        result.endsWith("- ")
      ) {
        setResult((prev) => prev.slice(0, prev.length - 2) + " % ");
        console.log("hi");
      } else {
        setResult((prev) => prev + " % ");
      }
    }
  }

  function handleUndoBtn() {
    if (!afterClickEqualBtn) {
      setResult((prev) => prev.slice(0, prev.length - 1));
    }
  }

  function handleDivisionBtn() {
    if (result) {
      if (
        result.endsWith("% ") ||
        result.endsWith("/ ") ||
        result.endsWith("* ") ||
        result.endsWith("+ ") ||
        result.endsWith("- ")
      ) {
        setResult((prev) => prev.slice(0, prev.length - 2) + " / ");
      } else {
        setResult((prev) => prev + " / ");
      }
    }
  }

  function handleMultiplication() {
    if (result) {
      if (
        result.endsWith("% ") ||
        result.endsWith("/ ") ||
        result.endsWith("* ") ||
        result.endsWith("+ ") ||
        result.endsWith("- ")
      ) {
        setResult((prev) => prev.slice(0, prev.length - 2) + " * ");
      } else {
        setResult((prev) => prev + " * ");
      }
    }
  }

  function handlePlusBtn() {
    if (result) {
      if (
        result.endsWith("% ") ||
        result.endsWith("/ ") ||
        result.endsWith("* ") ||
        result.endsWith("+ ") ||
        result.endsWith("- ")
      ) {
        setResult((prev) => prev.slice(0, prev.length - 2) + " + ");
      } else {
        setResult((prev) => prev + " + ");
      }
    }
  }

  function handleSubstractionBtn() {
    if (result) {
      if (
        result.endsWith("% ") ||
        result.endsWith("/ ") ||
        result.endsWith("* ") ||
        result.endsWith("+ ") ||
        result.endsWith("- ")
      ) {
        setResult((prev) => prev.slice(0, prev.length - 2) + " - ");
      } else {
        setResult((prev) => prev + " - ");
      }
    }
  }

  function handlePointBtn() {
    if (result) {
      setResult((prev) => prev + ".");
    }
  }

  function handleAnsBtn() {
    setResult((prev) => prev + ans);
  }

  function handleEqualBtn() {
    if (result) {
      setResult((prev) => "= " + evaluate(prev));
      setAfterClickEqualBtn(true);
    }
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

      <Button value="AC" bg="bg-gray" onClick={handleAcBtn} />
      <Button value="Undo" bg="bg-gray" onClick={handleUndoBtn} />
      <Button value="%" bg="bg-gray" onClick={handlePercentageBtn} />
      <Button value="/" bg="bg-gray" onClick={handleDivisionBtn} />

      <Button value="7" bg="bg-light-gray" onClick={handleSevenBtn} />
      <Button value="8" bg="bg-light-gray" onClick={handleEightBtn} />
      <Button value="9" bg="bg-light-gray" onClick={handleNineBtn} />
      <Button value="x" bg="bg-gray" onClick={handleMultiplication} />

      <Button value="4" bg="bg-light-gray" onClick={handleFourBtn} />
      <Button value="5" bg="bg-light-gray" onClick={handleFiveBtn} />
      <Button value="6" bg="bg-light-gray" onClick={handleSixBtn} />
      <Button value="-" bg="bg-gray" onClick={handleSubstractionBtn} />

      <Button value="1" bg="bg-light-gray" onClick={handleOneBtn} />
      <Button value="2" bg="bg-light-gray" onClick={handleTwoBtn} />
      <Button value="3" bg="bg-light-gray" onClick={handleThreeBtn} />
      <Button value="+" bg="bg-gray" onClick={handlePlusBtn} />

      <Button value="Ans" bg="bg-gray" onClick={handleAnsBtn} />
      <Button value="0" bg="bg-light-gray" onClick={handleZeroBtn} />
      <Button value="." bg="bg-light-gray" onClick={handlePointBtn} />
      <Button value="=" bg="bg-blue" onClick={handleEqualBtn} />
    </div>
  );
}

export default CalculatorGrid;
