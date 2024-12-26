import React from "react";

const Solutions = () => {
  return (
    <div>
      {/* First  */}
      <div className="p-20 flex  gap-12 items-center justify-center">
        {/* -------------------------Left Side------------------------------  */}

        <div className="flex flex-col gap-[40px] basis-[50%]">
          <h1 className="font-bold text-lg text-blue">CAPTION</h1>
          <h3 className="font-bold text-4xl relative bottom-9">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ut
            exercitationem perspiciatis minus?
          </h3>
          <p className="tracking-wide">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia,
            excepturi aut sunt labore, minima voluptate sequi error ullam
            repellat eos praesentium nulla eligendi consequuntur.
          </p>

          {/* buttons  */}
          <div className="flex gap-3">
            <button className="flex items-center gap-4 justify-center border-[2px] font-semibold bg-blue border-blue px-6 py-[7px] text-white">
              Primary Action
            </button>
            <button className="border-[2px] font-semibold border-blue text-blue px-5 py-[6px]">
              Secondary Action
            </button>
          </div>
        </div>

        {/* ----------------------------Right Side-------------------------------  */}
        <div className="basis-[50%]">
          <img
            className="rounded-lg"
            src="/solutions/picture.png"
            alt="AI-image"
          />
        </div>
      </div>

      {/* Second  */}
      <div className="p-20 flex gap-12 items-center justify-center">
        {/* -------------------------Left Side------------------------------  */}
        <div className="basis-[50%]">
          <img
            className="rounded-lg"
            src="/solutions/picture.png"
            alt="AI-image"
          />
        </div>

        {/* ----------------------------Right Side-------------------------------  */}
        <div className="flex flex-col gap-[40px] basis-[50%]">
          <h1 className="font-bold text-lg text-blue">CAPTION</h1>
          <h3 className="font-bold text-4xl relative bottom-9">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ut
            exercitationem perspiciatis minus?
          </h3>
          <p className="tracking-wide">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia,
            excepturi aut sunt labore, minima voluptate sequi error ullam
            repellat eos praesentium nulla eligendi consequuntur.
          </p>

          {/* buttons  */}
          <div className="flex gap-3">
            <button className="flex items-center gap-4 justify-center border-[2px] font-semibold bg-blue border-blue px-6 py-[7px] text-white">
              Primary Action
            </button>
            <button className="border-[2px] font-semibold border-blue text-blue px-5 py-[6px]">
              Secondary Action
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
