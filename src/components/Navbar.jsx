import React from "react";
import { useTranslation } from "react-i18next";
import { IoGlobeOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const Navbar = () => {
  const [selectedLanguage, setSelectedLanguage] = React.useState("en");
  const { i18n, t } = useTranslation();

  const { pathname } = useLocation();

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  const menuItems = [
    {
      label: t("Home"),
      href: "/",
    },
    {
      label: t("Portfolio"),
      href: "/portfolio",
    },
    {
      label: t("Solutions"),
      href: "/solutions",
    },
    {
      label: t("Blogs"),
      href: "/blogs",
    },
    {
      label: t("Contact Us"),
      href: "/contactus",
    },
  ];

  return (
    <div className="h-[70px]  border-b border-gray-200 pl-20 pr-20 flex items-center justify-between">
      {/* Logo & Title  */}
      <Link to="/" className="flex items-center gap-3">
        <img src="/logo.png" alt="logo" className="w-[160px]" />
      </Link>
      {/* Navigations Links  */}
      <div className="flex gap-7 font-sans font-medium text-gray-700">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            className={twMerge(pathname === item.href && "text-blue")}
          >
            {item.label}
          </Link>
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
          className={
            "border-[2px] rounded-md font-semibold border-blue text-blue px-5 py-[6px]"
          }
        >
          {t("Contact Us")}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
