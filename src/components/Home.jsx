import React from "react";
import { useTranslation } from "react-i18next";
import { GoArrowRight } from "react-icons/go";
import Container from "./ui/container";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="h-[calc(100vh-80px)] bg-gray-100">
      <Container className="h-full flex gap-12 items-center justify-center">
        {/* -------------------------Left Side------------------------------  */}
        <div className="flex flex-col gap-5 basis-[50%]">
          <h1 className="font-bold text-5xl text-gray-800 tracking-normal leading-[120%] w-[80%] ">
            {t("Welcome to React")}
          </h1>
          <p className="tracking-wide w-3/4">
            Enhancing digital employee experiences with AI-driven solutions that
            transform industries and drive success.
          </p>

          {/* buttons  */}
          <div className="flex gap-3 mt-6">
            <a href="#tools">
              <button className="flex items-center gap-4 justify-center border-[2px] font-semibold bg-blue border-blue px-6 py-[7px] text-white rounded">
                Get Started <GoArrowRight />
              </button>
            </a>
          </div>
        </div>

        {/* ----------------------------Right Side-------------------------------  */}
        <div className="basis-[40%] h-[420px]">
          <img
            className="rounded-xl size-full  object-cover"
            src="/homepage-banner.jpg"
            alt="AI-image"
          />
        </div>
      </Container>
    </div>
  );
};

export default Home;
