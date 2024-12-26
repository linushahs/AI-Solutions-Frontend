import React from "react";
import { GoArrowRight } from "react-icons/go";
import Container from "./ui/container";

const Home = () => {
  return (
    <div className="h-[calc(100vh-80px)] bg-gray-200">
      <Container className="h-full flex gap-12 items-center justify-center">
        {/* -------------------------Left Side------------------------------  */}
        <div className="flex flex-col gap-[40px] basis-[50%]">
          <h1 className="font-bold text-5xl text-gray-800 tracking-lighter">
            Empowering Workplaces <br />{" "}
            <span className="relative top-2">with AI innovation</span>
          </h1>
          <p className="tracking-wide">
            Enhancing digital employee experiences with AI-driven solutions that
            transform industries and drive success.
          </p>

          {/* buttons  */}
          <div className="flex gap-3">
            <button className="flex items-center gap-4 justify-center border-[2px] font-semibold bg-blue border-blue px-6 py-[7px] text-white">
              Primary Action <GoArrowRight />
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
            src="https://in.nec.com/en_IN/solutions_services/aipf/images/ai_solutions_01.jpg"
            alt="AI-image"
          />
        </div>
      </Container>
    </div>
  );
};

export default Home;
