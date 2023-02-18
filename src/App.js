import React, { useState } from "react";
import { evaluate } from "mathjs";

import Calculadora from "./components/Calculadora";

const App = () => {
  const [screenValue, setScrenValue] = useState("");
  const [result, setResult] = useState(0);
  const [isOperation, setIsOperation] = useState(false);
  const [operated, setOperated] = useState(false);

  const HandleAddDigitScreen = (digit) => {
    if (
      (digit === "+" ||
        digit === "-" ||
        digit === "/" ||
        digit === "*" ||
        digit === ".") &&
      isOperation &&
      !operated
    ) {
      setIsOperation(false);
      const screenVal = screenValue + digit;
      setScrenValue(screenVal);
      return;
    }

    if (
      (digit === "+" ||
        digit === "-" ||
        digit === "/" ||
        digit === "*" ||
        digit === ".") &&
      !isOperation
    ) {
      return;
    }

    if (
      (digit === "+" || digit === "-" || digit === "/" || digit === "*") &&
      operated
    ) {
      setOperated(false);
      setIsOperation(false);
      setScrenValue(result + digit);
      return;
    }

    if (operated) {
      setScrenValue(digit);
      setIsOperation(true);
      setOperated(false);
      return;
    }

    const screenVal = screenValue + digit;
    setScrenValue(screenVal);
    setIsOperation(true);
  };

  const clear = () => {
    setOperated(false);
    setScrenValue("");
    setIsOperation(false);
    setResult(0);
  };

  const operation = (oper) => {
    if (oper === "backspace") {
      let vscreen = screenValue;
      vscreen = vscreen.substring(0, vscreen.length - 1);
      setScrenValue(vscreen);
      setIsOperation(true);
      setOperated(false);
      return;
    }

    try {
      if (screenValue !== "") {
        const res = evaluate(screenValue);
        setResult(res);
        setOperated(true);
      }
    } catch {
      setResult("ERRO");
    }
  };

  return (
    <Calculadora
      screenValue={screenValue}
      result={result}
      clear={clear}
      HandleAddDigitScreen={HandleAddDigitScreen}
      operation={operation}
    />
  );
};

export default App;
