import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { inputData } from "./data";
import { formDataType } from "./types";

import TextField from "../../components/InputFields/TextField/TextField";
import Button from "../../components/Buttons/Button";

import logo from "../../assets/logo/lendsqr_logo.svg";
import loginImg from "../../assets/images/login_img.svg";

import "./styles.scss";

const Login: React.FC = () => {
  // state
  const [formData, setFormData] = useState<formDataType>({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();

  // funtions
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState: formDataType) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const displayInputFields = () => {
    return inputData.map((value, idx) => {
      return (
        <TextField
          key={idx}
          name={value.name}
          type={value.type}
          placeholder={value.placeholder}
          value={formData[value.name as keyof formDataType]}
          handleChange={handleChange}
          inputOption={value.showInputOption}
          handleInputOptionClick={handleToggleShowPassword}
          showPassword={showPassword}
        />
      );
    });
  };

  return (
    <div className="login">
      <div className="left-side side-container">
        <div className="logo-container">
          <img src={logo} alt="logo" />
        </div>
        <div className="login-image">
          <img src={loginImg} alt="login" />
        </div>
      </div>
      <div className="right-side side-container">
        <div className="right-side-content">
          <h3 className="heading">Welcome!</h3>
          <p className="sub-text">Enter details to login.</p>
          <div className="form-container">
            {displayInputFields()}
            <p className="forgot-password">forgot password?</p>
            <Button
              btnText="log in"
              onClick={() => navigate("/dashboard/customers/users")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
