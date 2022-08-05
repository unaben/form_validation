import React, { useState } from "react";
import "./formInput.styles.css";

const FormInput = (props) => {
  const [focus, setFocus] = useState(false);
  const { label, errorMessage, handleChange, id, ...inputProps } = props;
  const handleFocus = () => {
    setFocus(true);
  };
  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={handleChange}
        onBlur={handleFocus}
        onFocus={() => inputProps.name === "confirmPassword" && setFocus(true)}
        focus={focus.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
