import React from "react";

const Tools = () => {
  return (
    <section id="tools" className="py-[50px] flex flex-col gap-14">
      {/*--------------- Head of tools ------------ */}
      <div className="text-center">
        <h2 className="uppercase font-semibold text-black tracking-wide">
          The tools you need
        </h2>
        <h1 className="uppercase font-bold text-3xl">What we offer</h1>
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
