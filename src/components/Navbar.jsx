import React from "react";
import { GoChevronDown } from "react-icons/go";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-[70px] border-b-gray-200 pl-20 pr-20 flex items-center justify-between">
      {/* Logo & Title  */}
      <Link to="/" className="flex items-center gap-3">
        <img src="/footer/cross.png" alt="" />
        <h2 className=" font-medium text-gray-500 text-2xl">AI Solutions</h2>
      </Link>
      {/* Navigations Links  */}
      <div className="flex gap-7 font-sans font-semibold text-gray-700">
        {menuItems.map((item) => (
          <Link to={item.href}>{item.label}</Link>
        ))}

        <Link to="/more" className="flex items-center justify-center gap-2">
          More
          <span>
            <GoChevronDown className="text-[20px]" />
          </span>
        </Link>
      </div>
      {/* Login Signup  */}
      <div className="flex gap-2">
        <Link
          to="/contactus"
          className="border-[2px] font-semibold border-blue text-blue px-5 py-[6px]"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

const menuItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Portfolio",
    href: "/portfolio",
  },
  {
    label: "Solutions",
    href: "/solutions",
  },
  {
    label: "Contact Us",
    href: "/contactus",
  },
];

export default Navbar;
