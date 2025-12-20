import React, { useEffect } from "react";
import Header from "../components/header/Header";
import RightSide from "../pages/home/RightSide";
import Navbar from "../components/navigation/Navbar";
import { Outlet, useNavigation } from "react-router";
import LatestNews from "../components/LatestNews/LatestNews";
import Loading from "../pages/Loading/Loading";

const OthersLayout = () => {
  const { state } = useNavigation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="w-10/12 mx-auto">
      <Header />
      <LatestNews />
      <Navbar />
      <main className="grid grid-cols-12 gap-5">
        <div className="col-span-9">
          {state == "loading" ? <Loading /> : <Outlet />}
        </div>
        <div className="col-span-3">
          <RightSide />
        </div>
      </main>
    </div>
  );
};

export default OthersLayout;
