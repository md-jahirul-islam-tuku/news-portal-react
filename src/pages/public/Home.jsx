import React from "react";
import { Navigate } from "react-router";

const Home = () => {
  const path = location.pathname;
  console.log(path);
  return <Navigate to="/0"></Navigate>;
};

export default Home;
