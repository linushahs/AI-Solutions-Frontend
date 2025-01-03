import React from "react";
import { useTranslation } from "react-i18next";

const Team = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-20 bg-gray-100 p-16">
      <div className="flex flex-col gap-14">
        {/* head title  */}
        <div className="text-center">
          <h2 className="uppercase text-blue font-bold  tracking-wide mb-2">
            {t("team-subtitle")}
          </h2>
          <h1 className="uppercase font-bold text-3xl">{t("team-title")}</h1>
        </div>

        {/* mid content  */}
        <div className="flex gap-4">
          {teamMembers.map(({ img, name, role }, index) => (
            <div key={index} className="basis-[50%] flex flex-col gap-4">
              <img src={img} alt={name} className="h-[280px] object-cover" />
              <div className="text-center">
                <p className="font-semibold ">{name}</p>
                <p className="text-gray-600">{role}</p>
              </div>
              <div className="self-center flex items-center justify-center">
                <button className="flex items-center gap-4 justify-center border-[2px] font-semibold text-blue border-blue rounded-md px-6 py-[7px]">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const teamMembers = [
  {
    img: "/blog/author.webp",
    name: "Sarah Johnson",
    role: "Tech Writer",
  },
  {
    img: "/blog/author2.webp",
    name: "Michael Lee",
    role: "UI/UX Designer",
  },
  {
    img: "/blog/author4.jpg",
    name: "Rajesh Kumar",
    role: "Quality Assurance Lead",
  },
  {
    img: "/blog/author3.jpg",
    name: "Emily Turner",
    role: "Project Manager",
  },
];

export default Team;
