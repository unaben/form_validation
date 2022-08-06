import React from "react";
import "./formInput.styles.css";

const FormInput = (props) => {
  const {
    display,
    setDisplay,
    label,
    errorMessage,
    handleChange,  
    ...inputProps
  } = props;
  return (
    <div className="input-container">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={handleChange}
        onBlur={() => setDisplay(true)}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setDisplay(true)
        }
        focus={display.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
