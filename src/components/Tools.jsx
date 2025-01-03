import React from "react";
import { useTranslation } from "react-i18next";

const Tools = () => {
  const { t } = useTranslation();

  return (
    <section id="tools" className="py-[50px] flex flex-col gap-14">
      {/*--------------- Head of tools ------------ */}
      <div className="text-center">
        <h2 className="uppercase font-semibold text-blue tracking-wide mb-2">
          {t("tools-subtitle")}
        </h2>
        <h1 className="uppercase font-bold text-3xl">{t('tools-title')}</h1>
      </div>

      {/*--------------------- Icons and tools ------------------------- */}
      <div className="px-52 text-center flex justify-between items-center">
        <div className="flex flex-col items-center gap-5">
          <img src="/tools/calendar.png" className="w-[55px] h-[55px]" />
          <p className="font-semibold text-md">
            AI-Powered
            <br />
            Productivity Tools
          </p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <img src="/tools/luggage.png" className="w-[55px] h-[55px]" />
          <p className="font-semibold text-md">
            Personalized
            <br />
            Employee Experiences
          </p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <img src="/tools/activity.png" className="w-[55px] h-[55px]" />
          <p className="font-semibold text-md">
            Advanced
            <br />
            Data Insights
          </p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <img src="/tools/Vector.png" className="w-[55px] h-[55px]" />
          <p className="font-semibold text-md">
            Seamless
            <br />
            Integration
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tools;
