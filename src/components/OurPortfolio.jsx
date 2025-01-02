import React from "react";
import { Link } from "react-router-dom";

const OurPortfolio = () => {
  return (
    <div className="mt-10 flex justify-center">
      <div className="flex flex-col gap-14 mb-20">
        {/* head title */}
        <div className="text-center">
          <h1 className="uppercase font-bold text-3xl">Our Portfolio</h1>
        </div>

        {/* portfolio projects  */}
        <div className="grid grid-cols-4 items-center gap-4 justify-between px-20 ">
          {new Array(4).fill("").map((_, index) => (
            <div
              key={index}
              className="bg-white border flex flex-col h-full rounded-lg gap-2"
            >
              <img src="/blog/picture.png" alt="" />
              <div className="pt-4 pb-7 px-4 flex flex-col items-center gap-4">
                <h2 className="font-bold text-lg">Article Title</h2>
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <Link
                  to="#"
                  className="border-[2px] rounded-md font-semibold border-blue text-blue px-5 py-[6px]"
                >
                  Visit Site
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPortfolio;
