import React from "react";

const Team = () => {
  return (
    <div className="mt-20 bg-gray-200 p-16">
      <div className="flex flex-col gap-14">
        {/* head title  */}
        <div className="text-center">
          <h2 className="uppercase text-blue font-bold  tracking-wide">
            THE TEAM
          </h2>
          <h1 className="uppercase font-bold text-3xl">Meet Our Team</h1>
        </div>

        {/* mid content  */}
        <div className="flex gap-4">
          {/* 1st member*/}
          <div className="basis-[50%] flex flex-col gap-4">
            <img src="/team/1.png" alt="" />
            <div className="text-center">
              <p className="font-semibold ">Darrell Steward</p>
              <p className="text-gray-600">UI Designer & Co-founder</p>
            </div>
            <div className="self-center flex items-center justify-center">
              <button className="flex items-center gap-4 justify-center border-[2px] font-semibold text-blue border-blue px-6 py-[7px]">
                Primary Action
              </button>
            </div>
          </div>
          {/* 1st member*/}
          <div className="basis-[50%] flex flex-col gap-4">
            <img src="/team/2.png" alt="" />
            <div className="text-center">
              <p className="font-semibold ">Darrell Steward</p>
              <p className="text-gray-600">UI Designer & Co-founder</p>
            </div>
            <div className="self-center flex items-center justify-center">
              <button className="flex items-center gap-4 justify-center border-[2px] font-semibold text-blue border-blue px-6 py-[7px]">
                Primary Action
              </button>
            </div>
          </div>
          {/* 1st member*/}
          <div className="basis-[50%] flex flex-col gap-4">
            <img src="/team/3.png" alt="" />
            <div className="text-center">
              <p className="font-semibold ">Darrell Steward</p>
              <p className="text-gray-600">UI Designer & Co-founder</p>
            </div>
            <div className="self-center flex items-center justify-center">
              <button className="flex items-center gap-4 justify-center border-[2px] font-semibold text-blue border-blue px-6 py-[7px]">
                Primary Action
              </button>
            </div>
          </div>
          {/* 4th member*/}
          <div className="basis-[50%] flex flex-col gap-4">
            <img src="/team/4.png" alt="" />
            <div className="text-center">
              <p className="font-semibold ">Darrell Steward</p>
              <p className="text-gray-600">UI Designer & Co-founder</p>
            </div>
            <div className="self-center flex items-center justify-center">
              <button className="flex items-center gap-4 justify-center border-[2px] font-semibold text-blue border-blue px-6 py-[7px]">
                Primary Action
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
