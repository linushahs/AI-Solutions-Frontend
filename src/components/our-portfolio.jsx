import React from "react";
import { Link } from "react-router-dom";
import Container from "./ui/container";

const OurPortfolio = () => {
  return (
    <div className="mt-10 flex justify-center">
      <Container className="flex flex-col gap-14 mb-20">
        {/* head title */}
        <div className="text-center">
          <h1 className="uppercase font-bold text-3xl">Our Portfolio</h1>
        </div>

        {/* portfolio projects  */}

        <div className="grid grid-cols-4 items-center gap-4 justify-between ">
          {projects.map(({ title, description, img, link }, index) => (
            <div
              key={index}
              className="bg-white group cursor-pointer border flex flex-col h-full rounded-lg overflow-hidden gap-2"
            >
              <div className="h-[220px] overflow-hidden">
                <img src={img} alt={title} className="h-full group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover" />
              </div>
              <div className="pt-4 pb-7 px-4 flex flex-col items-center gap-4">
                <h2 className="font-semibold text-lg text-center h-[50px]">
                  {title}
                </h2>
                <p className="text-center">{description.slice(0, 50)}..</p>
                <Link
                  to={link}
                  className="border-[2px] rounded-md font-semibold border-blue text-blue px-5 py-[6px]"
                >
                  Visit Site
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

const projects = [
  {
    title: "AI-Powered Customer Support Chatbot",
    description:
      "Developed an intelligent chatbot that handles customer queries in real-time, reducing response time by 60% and improving customer satisfaction.",
    link: "https://example.com/chatbot-project",
    img: "/projects/project1.avif",
  },
  {
    title: "Predictive Analytics for Retail",
    description:
      "Implemented a predictive analytics system to forecast inventory demand, optimizing stock levels and reducing wastage for a retail business.",
    link: "https://example.com/analytics-project",
    img: "/projects/project2.webp",
  },
  {
    title: "Personalized Recommendation Engine",
    description:
      "Built a recommendation engine that increased user engagement by providing tailored product suggestions based on browsing and purchase history.",
    link: "https://example.com/recommendation-project",
    img: "/projects/project3.png",
  },
  {
    title: "Automated Data Processing Workflow",
    description:
      "Designed an AI-driven workflow that automated data extraction, cleaning, and analysis, saving over 200 hours of manual effort monthly.",
    link: "https://example.com/automation-project",
    img: "/projects/project4.webp",
  },
];

export default OurPortfolio;
