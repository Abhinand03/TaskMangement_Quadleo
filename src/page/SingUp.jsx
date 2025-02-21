import React from "react";
import LoginForm from "../component/authentication/LoginForm";
import loginImage from "../assets/login.jpg";
import { NavLink } from "react-router-dom";
import SignUpform from "../component/authentication/SignUpform";

function SingUp() {
  return (
    <div
      className="grid grid-cols-12 h-screen lg:h-screen items-center"
      style={{
        backgroundImage: `url(${loginImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="md:col-span-6 col-span-12 flex text-white flex-col items-center">
        <h1 className=" text-4xl font-bold">Create your account</h1>
        <p className="w-[65%] text-justify mt-8">
          Stay organized and boost your productivity with TaskFlow. Log in to
          access your personalized dashboard, track tasks effortlessly, and
          collaborate with your team in 4real time
        </p>
      </div>
      <div className="lg:col-span-6 col-span-12 lg:px-5 md:px-32 lg:mt-0 mt-10 ">
        <div className="xl:w-[60%] lg:w-[75%] bg-white   p-12  rounded-2xl shadow-lg">
          <h1 className="text-5xl font-bold">Register</h1>
<SignUpform/>
          <div className="mt-5 text-sm">
            <NavLink to={'/login'}>
              Already have an account?{" "}
              <span className="text-blue-600">sign in</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingUp;
