import React, { use } from "react";
import { Link, NavLink } from "react-router";
import profilePhoto from "../../assets/user.png";
import { AuthContext } from "../../pages/Authentication/AuthContext";
import { MdLogout } from "react-icons/md";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const handleSignOut = () => {
    signOutUser()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  const link = (
    <>
      <li>
        <NavLink to={"/category/0"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/others/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/others/career"}>Career</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 mt-5 mb-14">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-lg text-primary"
          >
            {link}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl"></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4 text-xl text-primary">
          {link}
        </ul>
      </div>
      <div className="navbar-end gap-2 items-center">
        <a className="cursor-pointer">
          <img className="w-14" src={!user ? profilePhoto : ""} alt="" />
        </a>
        {user ? (
          <>
            <h1 className="text-lg font-bold text-accent">{user?.displayName}</h1>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <button onClick={handleSignOut} className="text-accent font-bold">
                  <MdLogout />Log out
                  </button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <Link
            to={"/auth/login"}
            className="btn btn-secondary shadow-none py-6 px-10 text-lg text-white"
          >
            Log in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
