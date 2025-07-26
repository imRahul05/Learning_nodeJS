// // import React from "react";
// // import { useForm } from "react-hook-form";

// // const errorTextStyle = {
// //   color: "red",
// //   fontSize: "0.85rem",
// //   marginTop: "4px",
// //   wordWrap: "break-word",
// //   overflowWrap: "break-word",
// //   wordBreak: "break-word",
// // };

// // const formStyle = {
// //   border: "2px solid #333",
// //   padding: "1.5rem",
// //   borderRadius: "0.5rem",
// //   minWidth: "320px",
// // };

// // const inputStyle = {
// //   padding: "10px",
// //   width: "100%",
// //   border: "1px solid #ccc",
// //   borderRadius: "4px",
// //   fontSize: "1rem",
// // };

// // const buttonStyle = {
// //   padding: "12px",
// //   width: "100%",
// //   backgroundColor: "#4CAF50",
// //   color: "white",
// //   border: "none",
// //   borderRadius: "4px",
// //   cursor: "pointer",
// //   fontSize: "1rem",
// //   fontWeight: "bold",
// // };

// // const LoginForm = () => {
// //   const {
// //     register,
// //     handleSubmit,
// //     formState: { errors },
// //   } = useForm();

// //   const preventSpace = (e) => {
// //     if (e.key === " ") {
// //       e.preventDefault();
// //     }
// //   };

// //   const onSubmit = (data) => {
// //     console.log("✅ Form submitted successfully:", data);
// //   };

// //   return (
// //     <div
// //       style={{
// //         display: "flex",
// //         height: "100vh",
// //         justifyContent: "center",
// //         alignItems: "center",
// //         flexDirection: "column",
// //         backgroundColor: "#f5f5f5",
// //       }}
// //     >
// //       <h1 style={{ marginBottom: "2rem", color: "#333" }}>Login</h1>
// //       <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>
// //         <div style={{ marginBottom: "1.5rem" }}>
// //           <input
// //             type="email"
// //             placeholder="Enter your email"
              
// //             {...register("email", {
// //               required: "Email is required",
// //               pattern: {
// //                 value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
// //                 message: "Enter a valid email address",
// //               },
// //             })}
// //             style={inputStyle}
// //           />
// //           {errors.email && <p style={errorTextStyle}>{errors.email.message}</p>}
// //         </div>

// //         <div style={{ marginBottom: "1.5rem" }}>
// //           <input
// //             type="password"
// //             placeholder="Enter your password"
// //             onKeyDown={preventSpace}
// //             {...register("password", {
// //               required: "Password is required",
// //               validate: (value) => {
// //                 const errors = [];
// //                 if (value.length < 8) {
// //                   errors.push("At least 8 characters");
// //                 }
// //                 if (!/[A-Z]/.test(value)) {
// //                   errors.push("1 uppercase letter");
// //                 }
// //                 if (!/[a-z]/.test(value)) {
// //                   errors.push("1 lowercase letter");
// //                 }
// //                 if (!/[0-9]/.test(value)) {
// //                   errors.push("1 number");
// //                 }
// //                 if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
// //                   errors.push("1 special character");
// //                 }
// //                 return errors.length === 0 || `Password must contain: ${errors.join(", ")}`;
// //               },
// //             })}
// //             style={inputStyle}
// //           />
// //           {errors.password && (
// //             <p style={errorTextStyle}>{errors.password.message}</p>
// //           )}
// //         </div>

// //         <button type="submit" style={buttonStyle}>
// //           Login
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default LoginForm;
import { useForm } from "react-hook-form";

const formStyle = {
    border: "2px solid #333",
    padding: "2rem",
    borderRadius: "0.5rem",
    minWidth: "320px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
};

const inputStyle = {
    padding: "10px",
    width: "100%",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "1rem",
    marginBottom: "1rem",
    boxSizing: "border-box",
};

const labelStyle = {
    display: "block",
    marginBottom: "0.5rem",
    fontWeight: "bold",
    color: "#333",
};

const buttonStyle = {
    padding: "12px",
    width: "100%",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "bold",
    marginTop: "1rem",
};

const errorTextStyle = {
    color: "red",
    fontSize: "0.85rem",
    marginBottom: "1rem",
    wordWrap: "break-word",
};

export default function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div
            style={{
                display: "flex",
                height: "100vh",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f5f5f5",
            }}
        >
            <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>
                <div>
                    <label style={labelStyle}>First Name</label>
                    <input
                        style={inputStyle}
                        {...register("firstName",
                             { required: "First name is required", 
                                maxLength: { value: 20, message: "Max 20 characters" }
                             })}
                    />
                    {errors.firstName && <p style={errorTextStyle}>{errors.firstName.message}</p>}
                </div>
                <div>
                    <label style={labelStyle}>Last Name</label>
                    <input
                        style={inputStyle}
                        {...register("lastName", { pattern: { value: /^[A-Za-z]+$/i, message: "Only letters allowed" } })}
                    />
                    {errors.lastName && <p style={errorTextStyle}>{errors.lastName.message}</p>}
                </div>
                <div>
                    <label style={labelStyle}>Age</label>
                    <input
                        type="number"
                        style={inputStyle}
                        {...register("age", {
                            min: { value: 18, message: "Minimum age is 18" },
                            max: { value: 99, message: "Maximum age is 99" },
                        })}
                    />
                    {errors.age && <p style={errorTextStyle}>{errors.age.message}</p>}
                </div>
                <button type="submit" style={buttonStyle}>
                    Login
                </button>
            </form>
        </div>
    );
}
// import { useForm } from "react-hook-form";

// export default function LoginForm() {
//   const { register, handleSubmit ,formState:errors} = useForm();
//   const onSubmit = data => console.log(data);
   
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register("firstName", { required: true,minLength:4, maxLength: 20 ,message:"should be greater than 4 chars"})} />
//       <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      
//       <input type="submit" />
//     </form>
//   );
// }