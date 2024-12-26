import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Testimonials = () => {
  return (
    <div className="py-16 bg-gray-200 flex justify-center">
      <div className="flex flex-col gap-16">
        <div className="text-center">
          <h2 className="uppercase font-semibold text-black tracking-wide">
            TESTIMONIALS
          </h2>
          <h1 className="uppercase font-bold text-3xl">
            What Our Customer Says
          </h1>
        </div>

        <div className="flex items-center gap-5 justify-between px-12 ">
          {/* Zoomerr */}
          <IoIosArrowBack className="text-xl" />
          <div className="basis-[50%] bg-white p-10 flex flex-col items-center gap-8">
            <div className="flex items-center gap-2">
              <img src="/banner/zoomerr.png" alt="" />
              <h2>Zoomerr</h2>
            </div>
            <p className="text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
              nesciunt dolor non magnam vel architecto labore quis officiis
              aliquam nostrum! Tenetur ratione quod est!
            </p>
            <div className="flex flex-col items-center gap-1">
              <img src="/testimonials/pp.png" alt="" />
              <h2>Author Name</h2>
              <p>Role</p>
            </div>
          </div>
          {/* ArtVenue */}
          <div className="basis-[50%] bg-white p-10 flex flex-col items-center gap-8">
            <div className="flex items-center gap-2">
              <img src="/banner/artvennue.png" alt="" />
              <h2>ArtVennue</h2>
            </div>
            <p className="text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
              nesciunt dolor non magnam vel architecto labore quis officiis
              aliquam nostrum! Tenetur ratione quod est!
            </p>
            <div className="flex flex-col items-center gap-1">
              <img src="/testimonials/pp.png" alt="" />
              <h2>Author Name</h2>
              <p>Role</p>
            </div>
          </div>
          <IoIosArrowForward className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
