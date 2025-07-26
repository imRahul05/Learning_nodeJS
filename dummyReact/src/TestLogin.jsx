import React from "react";
import { useForm } from "react-hook-form";
const TestLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit =(data)=>console.log(data)
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input {...register("name", {required:"name is required",pattern:{value:/^[A-Za-z]+$/i,message:"Only chars allowed"}})} />
          {errors.name?.message}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TestLogin;
