import React from "react";
import logo from "../../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex flex-col text-center pt-10">
      <img className="lg:w-5/12 mx-auto" src={logo} alt="logo" />
      <h1 className="my-5 lg:text-xl text-primary font-semibold">Journalism Without Fear or Favour</h1>
      <p className="lg:text-2xl font-semibold text-primary">{format(new Date(),"EEEE, MMMM dd, yyyy")}</p>
    </div>
  );
};

export default Header;
