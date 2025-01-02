import React from "react";

const Banner = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="flex flex-col gap-12">
        <h1 className="self-center font-bold text-4xl leading-[40%]">
          Trusted by Industry Leaders
        </h1>
        <p className="self-center text-lg">
          Discover how our AI solutions empower business across diverse sectors
          to achieve their goals.
        </p>
        <div className="flex justify-between px-28 items-center">
          <div className="flex gap-2 items-center">
            <img src="/banner/shells.png" alt="" />
            <h2 className="text-gray-600 font-bold text-[20px]">SHELLS</h2>
          </div>
          <div className="flex gap-2 items-center">
            <img src="/banner/smartfinder.png" alt="" />
            <h2 className="text-gray-600 font-bold text-[20px]">SmartFinder</h2>
          </div>
          <div className="flex gap-2 items-center">
            <img src="/banner/zoomerr.png" alt="" />
            <h2 className="text-gray-600 font-bold text-[20px]">Zoomerr</h2>
          </div>
          <div className="flex gap-2 items-center">
            <img src="/banner/artvennue.png" alt="" />
            <h2 className="text-gray-600 font-bold text-[20px]">ArtVenue</h2>
          </div>
          <div className="flex gap-2 items-center">
            <img src="/banner/kontrastr.png" alt="" />
            <h2 className="text-gray-600 font-bold text-[20px]">Kontrastr</h2>
          </div>
          <div className="flex gap-2 items-center">
            <img src="/banner/wavesmarathon.png" alt="" />
            <h2 className="text-gray-600 font-bold text-[20px]">
              WAVES<span className="font-semibold text-[19px]">MARATHON</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
