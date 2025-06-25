import React, { useContext, useState } from "react";
import '../styles/Login.css'
import { useAuth } from "../ContextAPI/AuthContext";
const initialState = {
  email: "eve.holt@reqres.in",
  password: "cityslicka",
};


const Login = () => {
  const {login,loading}= useAuth();
  const [formData, setFormData] = useState(initialState);
    const [error, setError] = useState("");

 function handleChange(e){
    const {name,value}= e.target

    setFormData((prev)=>({
        ...prev,
        [name]:value
    }))
}
 async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const res = await login(formData.email, formData.password);
    if (!res.success) {
      setError(res.error);
    } else {
      alert("Login successful!");
    }
  }
  return (
    <div className="login-container">
      <form className="login-form"  onSubmit={handleSubmit}>
        <input type="text" 
        placeholder="enter the mail" 
        name="email"
        value={formData.email}
        onChange={handleChange}
        />
        <input type="text"
         placeholder="enter the password" 
        name="password"
        value={formData.password}
         onChange={handleChange}
        />

        <button type="submit">Submit </button>
      </form>
    </div>
  );
};

export default Login;
