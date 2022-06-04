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
    <div className="navbar shadow-lg w-full fixed top-0 left-0 md:px-10 px-7">
      <div className="md:flex md:items-center justify-between py-4">
        <div className="font-bold text-2xl cursor-pointer ">Portfolio</div>
      </div>
      <ul>
        {links.map((link) => (
          <li>
            <a className="text-white" href={link.link}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
