import React from "react";
import Navbar from "../component/navbar/Navbar";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
