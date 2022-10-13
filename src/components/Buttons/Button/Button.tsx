import React from "react";
import "./styles.scss";
import { ButtonTypes } from "./types";

const Button: React.FC<ButtonTypes> = ({ btnText, onClick }) => {
  return (
    <button onClick={onClick} className="btn">
      {btnText}
    </button>
  );
};

export default Button;
