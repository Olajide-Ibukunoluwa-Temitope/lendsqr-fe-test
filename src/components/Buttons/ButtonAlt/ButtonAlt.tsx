import React from "react";
import "./styles.scss";
import { ButtonTypes } from "./types";

const ButtonAlt: React.FC<ButtonTypes> = ({ btnText, onClick, color }) => {
  return (
    <button
      onClick={onClick}
      className="alt-btn"
      style={{ color, border: `solid 1px ${color}` }}
    >
      {btnText}
    </button>
  );
};

export default ButtonAlt;
