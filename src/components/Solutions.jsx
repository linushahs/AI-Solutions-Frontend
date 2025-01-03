import React from "react";
import Container from "./ui/container";

const Solutions = () => {
  return (
    <Container>
      {/* First  */}
      <div className="py-20 flex  gap-12 items-center justify-center">
        {/* -------------------------Left Side------------------------------  */}
        <div className="flex flex-col gap-[35px] basis-[50%]">
          <div className="">
            <h1 className="font-semibold text-lg text-blue mb-2.5">
              {solutions[0].caption}
            </h1>
            <h3 className="font-bold text-4xl">{solutions[0].title}</h3>
          </div>
          <p className="tracking-wide text-justify">
            {solutions[0].description}
          </p>

          {/* buttons  */}
          <div className="flex gap-3">
            <button className="flex items-center gap-4 justify-center border-[2px] font-semibold bg-blue border-blue px-6 py-[7px] rounded-md text-white">
              Read More
            </button>
          </div>
        </div>

        {/* ----------------------------Right Side-------------------------------  */}
        <div className="basis-[50%]">
          <img
            className="rounded-xl"
            src={solutions[0].thumbnail}
            alt="AI-image"
          />
        </div>
      </div>

      {/* Second  */}
      <div className="pt-16 pb-20 flex gap-12 items-center justify-center">
        {/* -------------------------Left Side------------------------------  */}
        <div className="basis-[50%]">
          <img
            className="rounded-xl h-[420px] object-cover"
            src={solutions[1].thumbnail}
            alt="AI-image"
          />
        </div>

        {/* ----------------------------Right Side-------------------------------  */}
        <div className="flex flex-col gap-[35px] basis-[50%]">
          <div>
            <h1 className="font-semibold text-lg text-blue mb-2.5">
              {solutions[1].caption}
            </h1>
            <h3 className="font-bold text-4xl">{solutions[1].title}</h3>
          </div>
          <p className="tracking-wide text-justify">
            {solutions[1].description}
          </p>

          {/* buttons  */}
          <div className="flex gap-3">
            <button className="flex items-center gap-4 justify-center border-[2px] font-semibold bg-blue border-blue px-6 py-[7px] rounded-md text-white">
              Read More
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

const solutions = [
  {
    title: "Intelligent Process Automation",
    caption: "Streamline Your Operations",
    description:
      "Our Intelligent Process Automation solution leverages AI and machine learning to automate repetitive tasks, optimize workflows, and reduce operational costs. This solution is perfect for businesses looking to increase efficiency and focus on strategic initiatives while minimizing errors.",
    thumbnail: "/solutions/solution1.webp",
  },
  {
    title: "Personalized Customer Engagement",
    caption: "Enhance Customer Experience with AI",
    description:
      "Our AI-driven customer engagement solution provides personalized interactions across multiple channels, ensuring each customer feels valued. By analyzing customer behavior and preferences, our system delivers tailored recommendations, targeted campaigns, and real-time support to improve satisfaction and loyalty.",
    thumbnail: "/solutions/solution2.webp",
  },
];

export default Solutions;
