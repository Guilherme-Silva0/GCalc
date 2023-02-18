import React from "react";

import "./Painel.css";

const Painel = ({ screenValue, result }) => {
  return (
    <div className="painel">
      <span className="operation">{screenValue}</span>
      <span className="result">{result}</span>
    </div>
  );
};

export default Painel;
