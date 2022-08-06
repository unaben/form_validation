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
  const [inputData] = useInput(values);

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
        {inputData.map((data) => {
          return (
            <FormInput
              key={data.id}
              {...data}
              value={values[data.name]}
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
