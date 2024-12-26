import React from "react";
import { Link } from "react-router-dom";
import { IoGlobeOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [selectedLanguage, setSelectedLanguage] = React.useState("en");
  const { i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="h-[70px]  border-b border-gray-200 pl-20 pr-20 flex items-center justify-between">
      {/* Logo & Title  */}
      <Link to="/" className="flex items-center gap-3">
        <img src="/footer/cross.png" alt="" />
        <h2 className=" font-medium text-gray-500 text-2xl">AI Solutions</h2>
      </Link>
      {/* Navigations Links  */}
      <div className="flex gap-7 font-sans font-medium text-gray-700">
        {menuItems.map((item) => (
          <Link to={item.href}>{item.label}</Link>
        ))}
      </div>
      {/* Login Signup  */}
      <div className="flex gap-6">
        <div className="flex gap-1 items-center">
          <IoGlobeOutline className="text-xl text-blue" />

          <select
            value={selectedLanguage}
            className="cursor-pointer"
            onChange={handleLanguageChange}
          >
            <option value={"en"}>English (EN)</option>
            <option value={"np"}>Nepali (NP)</option>
          </select>
        </div>

        <Link
          to="/contactus"
          className="border-[2px] rounded-md font-semibold border-blue text-blue px-5 py-[6px]"
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
  {
    label: "Blogs",
    href: "/blogs",
  },
];

export default Navbar;
