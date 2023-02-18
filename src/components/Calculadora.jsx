import React from "react";

import Painel from "./Painel";
import Button from "./Button";

import "./Calculadora.css";

const Calculadora = ({
  screenValue,
  result,
  clear,
  HandleAddDigitScreen,
  operation,
}) => {
  return (
    <div className="container">
      <Painel screenValue={screenValue} result={result} />
      <div className="buttons-area">
        <Button onClick={clear}>AC</Button>
        <Button onClick={() => HandleAddDigitScreen("(")}>(</Button>
        <Button onClick={() => HandleAddDigitScreen(")")}>)</Button>
        <Button onClick={() => HandleAddDigitScreen("/")}>÷</Button>
        <Button onClick={() => HandleAddDigitScreen("7")}>7</Button>
        <Button onClick={() => HandleAddDigitScreen("8")}>8</Button>
        <Button onClick={() => HandleAddDigitScreen("9")}>9</Button>
        <Button onClick={() => HandleAddDigitScreen("*")}>X</Button>
        <Button onClick={() => HandleAddDigitScreen("4")}>4</Button>
        <Button onClick={() => HandleAddDigitScreen("5")}>5</Button>
        <Button onClick={() => HandleAddDigitScreen("6")}>6</Button>
        <Button onClick={() => HandleAddDigitScreen("-")}>-</Button>
        <Button onClick={() => HandleAddDigitScreen("1")}>1</Button>
        <Button onClick={() => HandleAddDigitScreen("2")}>2</Button>
        <Button onClick={() => HandleAddDigitScreen("3")}>3</Button>
        <Button onClick={() => HandleAddDigitScreen("+")}>+</Button>
        <Button
          onClick={() => HandleAddDigitScreen("0")}
          style={{ borderRadius: "0 0 0 8px" }}
        >
          0
        </Button>
        <Button onClick={() => HandleAddDigitScreen(".")}>.</Button>
        <Button onClick={() => operation("backspace")}>{"<-"}</Button>
        <Button
          onClick={() => operation("=")}
          style={{ borderRadius: "0 0 8px 0" }}
        >
          =
        </Button>
      </div>
    </div>
  );
};

export default Calculadora;
