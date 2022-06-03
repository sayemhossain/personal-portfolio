import React from "react";
import "./Navbar.css";
const Navbar = () => {
  let links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "SKILLS", link: "/" },
    { name: "BLOGS", link: "/" },
    { name: "CONTACT", link: "/" },
  ];
  return (
    <div className="navbar shadow-lg w-full fixed top-0 left-0 md:px-10 px-7 md:flex py-4 items-center justify-between">
      <div className="font-bold text-2xl cursor-pointer ">Portfolio</div>
      <ul>
        {links.map((link) => (
          <li>
            <a className="text-white mr-5" href={link.link}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
