import React, { useEffect } from "react";
import Header from "../components/header/Header";
import Navbar from "../components/navigation/Navbar";
import { Outlet, useNavigation } from "react-router";
import LatestNews from "../components/LatestNews/LatestNews";
import LeftSide from "../pages/home/LeftSide";
import RightSide from "../pages/home/RightSide";
import Loading from "../pages/Loading/Loading";

const MainLayout = () => {
  const { state } = useNavigation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-10/12 mx-auto">
      <div
      // className="sticky z-10 top-0 bg-white"
      >
        <Header />
        <LatestNews />
        <Navbar />
      </div>
      <main className="grid lg:grid-cols-12">
        <LeftSide />
        {state == "loading" ? (
          <div className="col-span-6">
            <Loading></Loading>
          </div>
        ) : (
          <Outlet></Outlet>
        )}
        <RightSide />
      </main>
    </div>
  );
};

export default MainLayout;
