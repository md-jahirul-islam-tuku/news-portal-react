import React from "react";
import Navbar from "../components/navigation/Navbar";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="w-10/12 mx-auto">
      <Navbar />
      <main className="min-h-screen flex items-start justify-center">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
