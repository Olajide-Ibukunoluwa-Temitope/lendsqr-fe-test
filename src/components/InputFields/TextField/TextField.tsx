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
  borderRadius,
  label,
}) => {
  return (
    <div className="textfield-container">
      <div className="label">
        <label htmlFor={name}>{label}</label>
      </div>
      <div className="custom-container">
        <input
          className="textfield"
          type={showPassword ? "text" : type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          style={{ borderRadius }}
        />
        {inputOption && (
          <div className="input-option" onClick={handleInputOptionClick}>
            <p>{showPassword ? "hide" : "show"}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TextField;
