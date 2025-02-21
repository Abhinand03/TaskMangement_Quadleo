import React from "react";
import LoginForm from "../component/authentication/LoginForm";
import loginImage from "../assets/login.jpg";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div
      className="grid grid-cols-12 h-screen items-center"
      style={{
        backgroundImage: `url(${loginImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="col-span-6 flex text-white flex-col items-center">
        <h1 className=" text-4xl font-bold">Welcome Back</h1>
        <p className="w-[65%] text-justify mt-8">
          Stay organized and boost your productivity with TaskFlow. Log in to
          access your personalized dashboard, track tasks effortlessly, and
          collaborate with your team in 4real time
        </p>
      </div>

      <div className="col-span-6 ">
        <div className="bg-white w-[50%] p-12 p  rounded-2xl shadow-lg">
          <h1 className="text-5xl font-bold">sign in</h1>
          <LoginForm />
          
          <div className="mt-5 text-sm">
            <NavLink to={'/register'}>
              Dont have an account?{" "}
              <span className="text-blue-600">Sign up</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
