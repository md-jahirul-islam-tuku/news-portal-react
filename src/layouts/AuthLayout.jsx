import React, { useEffect } from "react";
import Navbar from "../components/navigation/Navbar";
import { Outlet, useNavigation } from "react-router";
import Loading from "../pages/Loading/Loading";

const AuthLayout = () => {
  const { state } = useNavigation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-10/12 mx-auto">
      <Navbar />
      <main className="min-h-screen flex items-start justify-center">
        {state == "loading" ? <Loading /> : <Outlet />}
      </main>
    </div>
  );
};

export default AuthLayout;
