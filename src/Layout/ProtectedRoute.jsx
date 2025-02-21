import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

function ProtectedRoute() {
  const admin = useSelector((state) => state?.admin);
  const isLogin = admin?.token;
  if (!isLogin) {
    useEffect(() => {
      toast.warning("please login");
    }, [])}

  return (
    <div>
      {isLogin ? (
        <Outlet />
      ) : (
        <>
        {
          toast.success("please")
        }
          <Navigate to={"/login"} />
        </>
      )}
    </div>
  );
}

export default ProtectedRoute;
