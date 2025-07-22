// import React, { useState } from "react";
// import * as z from "zod";

// // Initial form state
// const initialState = {
//   email: "",
//   password: "",
// };

// // Zod schema
// const UserSchema = z.object({
//   email: z.string().email("Invalid email format"),
//   password: z
//     .string()
//     .min(8, "Password must be at least 8 characters")
//     .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
//     .regex(/[a-z]/, "Password must contain at least one lowercase letter")
//     .regex(/[0-9]/, "Password must contain at least one digit"),
// });

// const Login = () => {
//   const [formData, setFormData] = useState(initialState);
//   const [errors, setErrors] = useState({}); // Store field-wise errors

//   // Input handler
//   function handleChange(e) {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//     setErrors((prev) => ({
//       ...prev,
//       [name]: "", // Clear error on change
//     }));
//   }

//   // Form submission handler
//   function handleSubmit(e) {
//     e.preventDefault();
//     try {
//       UserSchema.parse(formData); // ✅ validate
//       setErrors({}); // Clear previous errors
//       console.log("Form Data Submitted:", formData);
//     } catch (err) {
//       if (err instanceof z.ZodError) {
//         // Create field-wise error map
//         const fieldErrors = {};
//         err.errors.forEach((issue) => {
//           const fieldName = issue.path[0];
//           fieldErrors[fieldName] = issue.message;
//         });
//         setErrors(fieldErrors);
//       }
//     }
//   }

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         height: "100vh",
//       }}
//     >
//       <h1>Login</h1>
//       <form
//         style={{
//           border: "2px solid black",
//           padding: "12px",
//           borderRadius: ".5rem",
//           minWidth: "300px",
//         }}
//         onSubmit={handleSubmit}
//       >
//         <div style={{ marginBottom: "1rem" }}>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             style={{ padding: "12px", width: "100%" }}
//           />
//           {errors.email && (
//             <div style={{ color: "red", marginTop: "5px" }}>{errors.email}</div>
//           )}
//         </div>

//         <div style={{ marginBottom: "1rem" }}>
//           <input
//             type="password"
//             placeholder="Enter your password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             style={{ padding: "12px", width: "100%" }}
//           />
//           {errors.password && (
//             <div style={{ color: "red", marginTop: "5px" }}>{errors.password}</div>
//           )}
//         </div>

//         <div>
//           <button
//             type="submit"
//             style={{ padding: "10px", width: "100%" }}
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;
import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    reset(); // Clear form
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Login</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          border: "2px solid #ccc",
          padding: "20px",
          borderRadius: "10px",
          width: "300px",
        }}
      >
        {/* Email Field */}
        <div style={{ marginBottom: "15px" }}>
          <input
            type="text"
            placeholder="Enter email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            style={{
              width: "100%",
              padding: "10px",
              border: errors.email ? "1px solid red" : "1px solid #ccc",
            }}
          />
          {errors.email && (
            <span style={{ color: "red", fontSize: "12px" }}>
              {errors.email.message}
            </span>
          )}
        </div>

        {/* Password Field */}
        <div style={{ marginBottom: "15px" }}>
          <input
            type="password"
            placeholder="Enter password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              validate: {
                hasUppercase: (val) =>
                  /[A-Z]/.test(val) || "At least one uppercase letter required",
                hasLowercase: (val) =>
                  /[a-z]/.test(val) || "At least one lowercase letter required",
                hasNumber: (val) =>
                  /[0-9]/.test(val) || "At least one number required",
              },
            })}
            style={{
              width: "100%",
              padding: "10px",
              border: errors.password ? "1px solid red" : "1px solid #ccc",
            }}
          />
          {errors.password && (
            <span style={{ color: "red", fontSize: "12px" }}>
              {errors.password.message}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            padding: "10px",
            width: "100%",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
