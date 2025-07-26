import React, { useEffect, useState } from "react";
import * as z from "zod";

// Initial form state
const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [formData, setFormData] = useState(initialState);
  const [FormErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  // Input handler
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setFormErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  }

  useEffect(() => {
    console.log(FormErrors);
    if (Object.keys(FormErrors).length === 0 && isSubmit) {
      console.log(formData);
    }
  }, [FormErrors]);
  function handleSubmit(e) {
    e.preventDefault();
    setFormErrors(validate(formData));
    setIsSubmit(true);

    //  console.log("Form Data Submitted:", formData);
  }

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    if (!values.email) {
      errors.email = "email is required";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Enter a valid email address";
    }
    if (!values.password) {
      errors.email = "password is required";
    } else {
      let passwordError = [];

      if (values.password.length < 8) {
        passwordError.push("Password must be at least 8 characters long");
      }
      if (!/(?=.*[A-Z])/.test(values.password)) {
        passwordError.push("Must contain at least one uppercase letter");
      }
      if (!/(?=.*[a-z])/.test(values.password)) {
        passwordError.push("Must contain at least one lowercase letter");
      }
      if (!/(?=.*\d)/.test(values.password)) {
        passwordError.push("Must contain at least one number");
      }
      if (!specialCharRegex.test(values.password)) {
        passwordError.push(
          'Must contain at least one special character (!@#$%^&*(),.?":{}|<>)'
        );
      }

      if (passwordError.length > 0) {
        errors.password = passwordError.join(". ");
      }
    }

    return errors;
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div>
        <pre>{JSON.stringify(formData)}</pre>
      </div>
      <h1>Login</h1>
      <form
        style={{
          border: "2px solid black",
          padding: "12px",
          borderRadius: ".5rem",
          minWidth: "300px",
        }}
        onSubmit={handleSubmit}
      >
        <div style={{ marginBottom: "1rem" }}>
          <input
            type="text"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ padding: "12px", width: "90%" }}
          />
          {FormErrors && (
            <p
              style={{
                color: "red",
                fontSize: "0.85rem",
                margin: "4px 0 0",
                maxWidth: "90%",
                wordWrap: "break-word",
                overflowWrap: "break-word",
                wordBreak: "break-word",
              }}
            >
              {FormErrors.email}
            </p>
          )}
        </div>

        <div style={{ marginBottom: "1rem", overflow: "hidden" }}>
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ padding: "12px", width: "90%" }}
          />
        
            <p
              style={{
                color: "red",
                fontSize: "0.85rem",
                margin: "4px 0 0",
                maxWidth: "90%",
                wordWrap: "break-word",
                overflowWrap: "break-word",
                wordBreak: "break-word",
              }}
            >
              {FormErrors.password}
            </p>
          
        </div>

        <div>
          <button type="submit" style={{ padding: "10px", width: "100%" }}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
