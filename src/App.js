import React, { useState } from "react";
import "./App.css";
import FormInput from "./components/formInput/FormInput.jsx";
import useInput from "./components/hooks/useInput";

const App = () => {
  const [display, setDisplay] = useState(false);
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });
  const [inputData] = useInput(values);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({
      username: "",
      email: "",
      birthday: "",
      password: "",
      confirmPassword: "",
    });
    setDisplay(false);
  };
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputData.map((data, index) => {
          return (
            <FormInput
              key={index}
              {...data}
              value={values[data.name]}
              handleChange={handleChange}
              display={display}
              setDisplay={setDisplay}
            />
          );
        })}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
