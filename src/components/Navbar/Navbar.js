import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar shadow-lg w-full fixed top-0 left-0 md:px-10 px-7">
      <div className="md:flex py-4">
        <div className="font-bold text-2xl cursor-pointer ">Portfolio</div>
      </div>
    </div>
  );
};

export default Navbar;
