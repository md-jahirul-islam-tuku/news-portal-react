import React from "react";
import Header from "../components/header/Header";
import Navbar from "../components/navigation/Navbar";
import { Outlet } from "react-router";
import LatestNews from "../components/LatestNews/LatestNews";
import LeftSide from "../pages/home/LeftSide";
import RightSide from "../pages/home/RightSide";

const MainLayout = () => {
  return (
    <div className="w-10/12 mx-auto my-10">
      <Header />
      <LatestNews />
      <Navbar />
      <main className="grid grid-cols-12">
        <LeftSide />
        <Outlet />
        <RightSide />
      </main>
    </div>
  );
};

export default MainLayout;
