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

  return <Calculadora />;
};

export default App;
