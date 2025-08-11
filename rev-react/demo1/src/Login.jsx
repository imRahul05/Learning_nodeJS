import React, { useState } from 'react'

const initialState= {
    email:'',
    password:''
}



  const validators = {
    email: (value) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Enter a valid email",
    password: (value) =>
      /^(?=.*[A-Z])(?=.*\d).{6,}$/.test(value)
        ? ""
        : "At least 6 chars, 1 uppercase, 1 number",
  };

const Login = () => {

    const [ FormData,setFormData] = useState(initialState)
    const [touched,setTouched] = useState({})
    const [errors,setErrors] = useState({})

     function handleChange(e){  
        const {name, value} = e.target;
        setFormData({
            ...FormData,
            [name]: value
        });

        if(touched[name]){
            setErrors((prev)=>({...prev,[name]: validators[name](value)}));
        }
     }

     function handleBlur(e){
          const {name, value} = e.target;
         setTouched((prev)=>({...prev,[name]: true}));
         setErrors((prev)=>({...prev,[name]: validators[name](value)}));
     }
    function handleSubmit(event) {
        event.preventDefault();
        console.log(FormData)

    }

  return (
    <div>

        <h2>Login</h2>
        {JSON.stringify(FormData)}
        <br/>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required onChange={handleChange} value={FormData.email} onBlur={handleBlur} />
            </div>
            {touched.email && errors.email && (
        <small style={{ color: "red" }}>{errors.email}</small>
      )}

            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required onChange={handleChange} value={FormData.password} onBlur={handleBlur} />
            </div>
            {touched.password && errors.password && (
        <small style={{ color: "red" }}>{errors.password}</small>
      )}
           <div>
             <button type="submit">Login</button>
           </div>
        </form>
    </div>
  )
}

export default Login