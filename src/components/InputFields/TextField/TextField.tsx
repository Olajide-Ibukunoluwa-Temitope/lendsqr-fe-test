import React from "react";
import { TextFieldProps } from "./types";
import "./styles.scss";

const TextField: React.FC<TextFieldProps> = ({
  type,
  placeholder,
  value,
  name,
  handleChange,
  handleInputOptionClick,
  inputOption,
  showPassword,
}) => {
  return (
    <div className="textfield-container">
      <input
        className="textfield"
        type={showPassword ? "text" : type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
      {inputOption && (
        <div className="input-option" onClick={handleInputOptionClick}>
          <p>{showPassword ? "hide" : "show"}</p>
        </div>
      )}
    </div>
  );
};

export default TextField;
