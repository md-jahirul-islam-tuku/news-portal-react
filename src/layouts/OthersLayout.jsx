import React from "react";
import Header from "../components/header/Header";
import RightSide from "../pages/home/RightSide";
import Navbar from "../components/navigation/Navbar";
import { Outlet } from "react-router";
import LatestNews from "../components/LatestNews/LatestNews";

const OthersLayout = () => {
  return (
    <div className="w-10/12 mx-auto">
      <Header />
      <LatestNews />
      <Navbar />
      <main className="grid grid-cols-12 gap-5">
        <div className="col-span-9">
          <Outlet />
        </div>
        <div className="col-span-3">
          <RightSide />
        </div>
      </main>
    </div>
  );
};

export default OthersLayout;
