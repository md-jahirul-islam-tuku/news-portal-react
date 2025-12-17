import React from "react";
import Header from "../components/header/Header";
import Navbar from "../components/navigation/Navbar";
import { Outlet } from "react-router";
import LatestNews from "../components/LatestNews/LatestNews";
import LeftSide from "../pages/home/LeftSide";
import RightSide from "../pages/home/RightSide";

const MainLayout = () => {
  return (
    <div className="w-10/12 mx-auto">
      <div className="sticky z-10 top-0 bg-white">
        <Header />
        <LatestNews />
        <Navbar />
      </div>
      <main className="grid lg:grid-cols-12">
        <LeftSide />
        <Outlet />
        <RightSide />
      </main>
    </div>
  );
};

export default MainLayout;
