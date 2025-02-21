import React from "react";
import { NavLink } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-8xl font-bold">404</h1>
        <p> Sorry, we couldn't find the page you're looking for.</p>
        <NavLink className={"text-white px-4 py-2 rounded-3xl bg-blue-600"} to={"/"}>
          Go back to home
        </NavLink>
      </div>
    </div>
  );
}

export default PageNotFound;
