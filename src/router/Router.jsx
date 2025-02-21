import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../page/Login";
import PageNotFound from "../page/PageNotFound";
import Dashboard from "../page/Dashboard";
import SingUp from "../page/SingUp";
import AppLayout from "../Layout/AppLayout";
import AddEditTask from "../page/AddEditTask";
import Profile from "../page/Profile";
import ProtectedRoute from "../Layout/ProtectedRoute";

function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SingUp />} />
      <Route path="*" element={<PageNotFound />} />

      <Route element={<ProtectedRoute />}>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/new-task" element={<AddEditTask />} />
          <Route path="/edit-task" element={<AddEditTask />} />

          <Route path="/profile" element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default Router;
