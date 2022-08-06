const useInput = (values) => {
  const inputData = [
    {
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: "Character should be 3-16, no special charcter required",
      label: "Username",
      required: true,
      pattern: "^[A-Za-z0-9]{3,16}$",
    },
    {
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Vaild email required",
      label: "Email",
      required: true,
    },
    {
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Should contain 8-20 characters @ least 1 letter, 1 number and 1 special character",
      label: "Password",
      required: true,
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
    },
    {
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Password don't match!",
      label: "Confirm Password",
      required: true,
      pattern: values.password,
    },
  ];
  return [inputData];
};

export default useInput;
