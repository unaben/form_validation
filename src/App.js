import React, { useState } from "react";
import "./App.css";
import FormInput from "./components/formInput/FormInput.jsx";
import useInput from "./components/hooks/useInput";

const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });
  const [inputs] = useInput(values);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => {
          return (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              handleChange={handleChange}
            />
          );
        })}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
