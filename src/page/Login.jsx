import React from "react";
import LoginForm from "../component/authentication/LoginForm";
import loginImage from "../assets/login.jpg";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div
      className="grid grid-cols-12 h-full lg:h-screen items-center"
      style={{
        backgroundImage: `url(${loginImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="md:col-span-6 col-span-12 flex text-white flex-col items-center">
        <h1 className=" text-4xl font-bold">Welcome Back</h1>
        <p className="w-[65%] text-justify mt-8">
          Stay organized and boost your productivity with TaskFlow. Log in to
          access your personalized dashboard, track tasks effortlessly, and
          collaborate with your team in 4real time
        </p>
      </div>

      <div className=" lg:col-span-6 col-span-12 lg:px-5 md:px-32 lg:mt-0 mt-10  px-5 justify-center ">
        <div className="bg-white xl:w-[60%] lg:w-[75%]   p-12 p  rounded-2xl shadow-lg">
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
