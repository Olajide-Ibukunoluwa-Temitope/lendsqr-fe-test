import React from "react";
import { SelectFieldProps } from "./types";
import "./styles.scss";

const SelectField: React.FC<SelectFieldProps> = ({
  placeholder,
  name,
  handleChange,
  borderRadius,
  label,
  options,
}) => {
  return (
    <div className="selectfield-container">
      <div className="label">
        <label htmlFor={name}>{label}</label>
      </div>
      <div className="custom-container">
        <select
          name={name}
          className="select-input"
          onChange={handleChange}
          style={{ borderRadius }}
        >
          <option value={""}>{placeholder}</option>
          {options.map((item, idx) => {
            return (
              <option key={idx} value={item.value}>
                {item.label}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default SelectField;
