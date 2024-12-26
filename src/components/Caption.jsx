import React from "react";

const Caption = () => {
  return (
    <div className="mt-14 mb-14">
      <div className="flex flex-col justify-center items-center gap-16">
        <div className="text-center">
          <h2 className="uppercase font-semibold text-black tracking-wide">
            CAPTION
          </h2>
          <h1 className="uppercase font-bold text-3xl">What we provide</h1>
        </div>
        <div className="grid grid-cols-2 gap-20 ">
          <div className="flex flex-col items-center gap-4">
            <img src="/tools/calendar.png" className="w-20" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur ipsum <br /> adipisicing
              elit ipsum elit sir adipsicing amet.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img src="/tools/luggage.png" className="w-20" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur ipsum <br /> adipisicing
              elit ipsum elit sir adipsicing amet.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img src="/tools/activity.png" className="w-20" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur ipsum <br /> adipisicing
              elit ipsum elit sir adipsicing amet.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img src="/tools/Vector.png" className="w-20" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur ipsum <br /> adipisicing
              elit ipsum elit sir adipsicing amet.
            </p>
          </div>
        </div>
        <button className="flex items-center gap-4 justify-center border-[2px] font-semibold bg-blue border-blue px-6 py-[7px] text-white">
          Primary Action
        </button>
      </div>
    </div>
  );
};

export default Caption;
