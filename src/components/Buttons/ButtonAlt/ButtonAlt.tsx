import React from "react";
import "./styles.scss";
import { ButtonTypes } from "./types";

const ButtonAlt: React.FC<ButtonTypes> = ({ btnText, onClick }) => {
  return (
    <button onClick={onClick} className="alt-btn">
      {btnText}
    </button>
  );
};

export default ButtonAlt;
