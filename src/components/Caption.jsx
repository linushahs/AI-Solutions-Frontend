import React from "react";

const Caption = () => {
  return (
    <div className="pt-14 pb-20 flex justify-center">
      <div className="w-3/4 flex flex-col justify-center items-center gap-16">
        <div className="text-center">
          <h2 className="uppercase font-semibold text-blue tracking-wide">
            SERVICES
          </h2>
          <h1 className="uppercase font-bold text-3xl">What we provide</h1>
        </div>
        <div className="grid grid-cols-2 gap-x-10 gap-y-16 place-items-center">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center gap-4 w-3/4">
              <img src={service.icon} className="w-20" alt="" />
              <h2 className="text-xl font-semibold text-center mt-2">
                {service.title}
              </h2>
              <p className="text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const services = [
  {
    title: "Predictive Analytics",
    description:
      "AI-driven insights for forecasting trends and optimizing decision-making processes",
    icon: "/data-analytics.png",
  },
  {
    title: "Chatbots and Virtual Assistants",
    description:
      "Automated customer support and engagement using natural language processing.",
    icon: "/chatbot.png",
  },
  {
    title: "Personalized Recommendations",
    description:
      "Tailored product or service suggestions based on user behavior and preferences.",
    icon: "/selfcare.png",
  },
  {
    title: "Process Automation",
    description:
      "Streamlining workflows with AI-powered automation to increase efficiency.",
    icon: "/automation.png",
  },
];

export default Caption;
