import React, { use } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo-white.png"
import heroBanner from "../assets/heroBanner.mp4";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const {user, logOut} = use(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {
        alert("Logged out successfully");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
  
  const links = [
    <NavLink className="md:mx-3">Home</NavLink>,
    <NavLink to="/add-transactions" className="md:mx-3">Add Transactions</NavLink>,
    // <NavLink to="/my-transactions" className="md:mx-3">My Transactions</NavLink>,
    <NavLink to="/my-tran" className="md:mx-3">My Transaction</NavLink>,
    <NavLink className="md:mx-3">Reports</NavLink>,
  ]  
  return (
    <div className="md:mx-80 p-4 md:pt-5 ">
    <div className="navbar shadow-sm bg-black text-white rounded-full">
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
            className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link><img src={logo} alt="" className="w-30 ps-5" /></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      {
        user ? 
          (<div className="navbar-end md:me-5">
            <button onClick={handleLogout} className="btn rounded-full">Log Out</button>
          </div>) : 
          (<div className="navbar-end md:me-5">
            <NavLink to="/login" className="btn rounded-full">Login</NavLink>
          </div>)
      }
      
    </div>
    </div>
  );
};

export default Navbar;
