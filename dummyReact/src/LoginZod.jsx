import React, { useState, useEffect } from "react";
import * as z from "zod";

// Define styles
const errorTextStyle = {
  color: "red",
  fontSize: "0.85rem",
  marginTop: "4px",
  wordWrap: "break-word",
  overflowWrap: "break-word",
  wordBreak: "break-word",
};

// Define Zod schema
const schema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[A-Z]/, "Must contain at least one uppercase letter")
    .regex(/[a-z]/, "Must contain at least one lowercase letter")
    .regex(/[0-9]/, "Must contain at least one number")
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Must contain at least one special character"
    ),
});

// Initial form state
const initialState = {
  email: "",
  password: "",
};

const LoginZod = () => {
  const [formData, setFormData] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Validate and submit
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const result = schema.safeParse(formData);
    
    if (result.success) {
      setFormErrors({});
      setIsSubmit(true);
      console.log("✅ Form submitted successfully:", formData);
    } else {
      // Fix: Properly handle Zod validation errors
      const fieldErrors = {};
      result.error.issues.forEach((issue) => {
        fieldErrors[issue.path[0]] = issue.message;
      });
      setFormErrors(fieldErrors);
      setIsSubmit(false);
      console.log("❌ Validation failed:", fieldErrors);
    }
  } catch (error) {
    console.error("Validation error:", error);
    setFormErrors({ general: "An unexpected error occurred" });
    setIsSubmit(false);
  }
};
  // Handle successful submit
  useEffect(() => {
    if (isSubmit && Object.keys(formErrors).length === 0) {
      // You can add your API call or further processing here
      console.log("Form is valid and ready to submit");
    }
  }, [formErrors, isSubmit]);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
        <pre>{JSON.stringify(formData)}</pre>
      <h1>Login</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          border: "2px solid #333",
          padding: "1.5rem",
          borderRadius: "0.5rem",
          minWidth: "320px",
        }}
      >
        <div style={{ marginBottom: "1rem" }}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            style={{ padding: "10px", width: "100%" }}
          />
          {formErrors.email && (
            <p style={errorTextStyle}>{formErrors.email}</p>
          )}
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            style={{ padding: "10px", width: "100%" }}
          />
          {formErrors.password && (
            <p style={errorTextStyle}>{formErrors.password}</p>
          )}
        </div>

        <button 
          type="submit" 
          style={{ 
            padding: "10px", 
            width: "100%",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginZod;