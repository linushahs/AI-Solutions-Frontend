import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaPlus } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

const FAQs = ({ className }) => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={twMerge("bg-white h-[700px] pt-16", className)}>
      <div className="text-center">
        <h2 className="uppercase text-blue font-bold tracking-wide mb-2">
          {t("faq-subtitle")}
        </h2>
        <h1 className="uppercase font-bold text-3xl">{t("faq-title")}</h1>
      </div>

      <div className="pt-14 flex flex-col gap-4 items-center">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg w-[850px] p-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{faq.question}</h3>
              <FaPlus
                className={`size-4 transition-transform duration-300 ${
                  activeIndex === index ? "rotate-45" : ""
                }`}
              />
            </div>

            <div
              className={`transition-all duration-300 overflow-hidden ${
                activeIndex === index ? "max-h-40 mt-2" : "max-h-0"
              }`}
            >
              <p className="text-gray-500">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const faqs = [
  {
    question: "What services does your AI Solutions business offer?",
    answer:
      "We provide AI-powered services such as predictive analytics, chatbot and virtual assistant development, process automation, personalized recommendations, and data-driven decision-making tools tailored to meet your business needs.",
  },
  {
    question: "How can AI improve my business operations?",
    answer:
      "AI can enhance efficiency by automating repetitive tasks, providing actionable insights through data analysis, improving customer engagement with chatbots, and optimizing workflows for better productivity and cost-effectiveness.",
  },
  {
    question: "What industries do you cater to?",
    answer:
      "Our solutions are versatile and can be adapted to various industries, including retail, healthcare, finance, education, and logistics, ensuring tailored AI applications to suit industry-specific challenges.",
  },
  {
    question: "Is my data safe with your AI Solutions?",
    answer:
      "Absolutely. We prioritize data security by implementing robust encryption, secure access protocols, and compliance with data protection regulations like GDPR to safeguard your sensitive information.",
  },
  {
    question: "How do I get started with your services?",
    answer:
      "Getting started is easy! Contact us through our website or email, and our team will schedule a consultation to understand your requirements and design a customized AI solution for your business.",
  },
];

export default FAQs;
