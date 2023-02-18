import React, { useState } from "react";

import Calculadora from "./components/Calculadora";

const App = () => {
  const [screenValue, setScrenValue] = useState("");
  const [result, setResult] = useState(0);
  const [accumulator, setAccumulator] = useState();
  const [operated, setOperated] = useState(false);

  const HandleAddDigitScreen = (digit) => {
    if (
      digit === "+" ||
      digit === "-" ||
      digit === "÷" ||
      (digit === "X" && operated)
    ) {
      console.log("+-*/");
      setOperated(false);
      setScrenValue(result + digit);
      return;
    }

    if (operated) {
      setScrenValue(digit);
      setOperated(false);
      return;
    }

    setScrenValue(screenValue + digit);
  };

  const clear = () => {
    setOperated(false);
    setScrenValue("");
    setResult(0);
    setAccumulator(0);
  };

  const operation = (oper) => {
    if (oper === "backspace") {
      let vscreen = screenValue;
      vscreen = vscreen.substring(0, vscreen.length - 1);
      setScrenValue(vscreen);
      setOperated(false);
      return;
    }

    try {
      const res = eval(screenValue);
      setAccumulator(res);
      setResult(res);
      setOperated(true);
    } catch {
      setResult("ERRO");
    }
  };

  return <Calculadora />;
};

export default App;
