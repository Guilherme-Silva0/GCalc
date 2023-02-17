import React from "react";

import Painel from "./Painel";
import Button from "./Button";

import "./Calculadora.css";

const Calculadora = () => {
  return (
    <div className="container">
      <Painel />
      <div className="buttons-area">
        <Button>AC</Button>
        <Button>(</Button>
        <Button>)</Button>
        <Button>÷</Button>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>X</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>-</Button>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>+</Button>
        <Button style={{ borderRadius: "0 0 0 8px" }}>0</Button>
        <Button>.</Button>
        <Button>{"<-"}</Button>
        <Button style={{ borderRadius: "0 0 8px 0" }}>=</Button>
      </div>
    </div>
  );
};

export default Calculadora;
