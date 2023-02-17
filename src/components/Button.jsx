import React from "react";

import "./Button.css";

const Button = ({ children, onClick, style }) => {
  return (
    <button style={style} onClick={onClick} className="btn">
      {children}
    </button>
  );
};

export default Button;
