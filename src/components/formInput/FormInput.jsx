import React, { useState } from "react";
import "./formInput.styles.css";

const FormInput = (props) => {
  const [display, setDisplay] = useState(false);
  const { label, errorMessage, handleChange, id, ...inputProps } = props;  
  return (
    <div className="input-container">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={handleChange}
        onBlur={() => setDisplay(true)}
        onFocus={() => inputProps.name === "confirmPassword" && setDisplay(true)}
        focus={display.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
