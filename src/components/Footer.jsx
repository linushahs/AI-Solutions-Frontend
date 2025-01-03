import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Container from "./ui/container";

const Footer = () => {
  const { t } = useTranslation();

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
      label: t("Contact Us"),
      href: "/contactus",
    },
    {
      label: t("Blogs"),
      href: "/blogs",
    },
  ];

  return (
    <div className="bg-gray-700 h-full py-10">
      <Container>
        {/* 1st footer  */}
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-2">
            <img src="/logo-white.png" alt="logo" className="w-[120px]" />
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white flex items-center justify-center gap-2 p-2 rounded">
              <img src="/footer/mail.png" alt="" />
              Enter your email to get the latest news...
            </div>
            <button className="rounded flex items-center gap-4 justify-center border-[2px] font-semibold bg-blue border-blue px-6 py-[7px] text-white">
              Subscribe
            </button>
          </div>
        </div>
        <hr />

        {/* 2nd footer  */}
        <div className="my-10 flex justify-between items-start">
          <div className="flex flex-1">
            {/* 1st column  */}
            <div className="text-white flex flex-col gap-4 w-[30%]">
              <div>
                <h4 className="font-semibold text-lg">Menus</h4>
              </div>
              <ul className="flex flex-col gap-2.5">
                {menuItems.map((item) => (
                  <li key={item.label} className="hover:underline">
                    <Link to={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 2nd column  */}
            <div className="text-white flex flex-col gap-4">
              <div>
                <h4 className="font-semibold text-lg">Useful Links</h4>
              </div>
              <ul className="flex flex-col gap-2.5">
                {[
                  { label: "Sitemap", href: "" },
                  { label: "Cookie Policy", href: "" },
                  { label: "Terms and Conditions", href: "" },
                ].map((item) => (
                  <li>
                    <Link to={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 4th column  */}
          <div className="ml-auto text-white flex flex-col gap-4">
            <div>
              <h4 className="font-semibold text-lg">Column Four</h4>
            </div>

            {/* App stores  */}
            <div className="flex items-center gap-2">
              {/* apple  */}
              <img src="/footer/applebtn.png" alt="" />
              {/* google */}
              <img src="/footer/google.png" alt="" />
            </div>

            <p className="font-bold">Join Us</p>
            <div>
              <img src="/footer/Socialicons.png" alt="" />
            </div>
          </div>
        </div>
        <hr />

        {/* 3rd footer  */}
        <div className="flex items-center justify-between mt-10 text-white">
          <p>AISolutions @ 2024. All rights reserved.</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
