import React from "react";

const Questions = () => {
  return (
    <div className="bg-gray-200 h-[100vh] p-16">
      {/* head title  */}
      <div className="text-center">
        <h2 className="uppercase text-blue font-bold text-black tracking-wide">
          TOP FAQS
        </h2>
        <h1 className="uppercase font-bold text-3xl">
          Frequently Asked Questions
        </h1>
      </div>

      {/* Questions  */}
      <div className="pt-20 flex flex-col gap-4 items-center">
        {/* 1st question  */}
        <div className="bg-white h-[60px] w-[850px] flex items-center justify-between p-4">
          <h3 className="font-semibold">Who should use the app? </h3>
          <img src="/team/plus.png" alt="" />
        </div>

        {/* 2nd question  */}
        <div className="bg-white h-[60px] w-[850px] flex items-center justify-between p-4">
          <h3 className="font-semibold">
            What is included with my subcription?{" "}
          </h3>
          <img src="/team/plus.png" alt="" />
        </div>

        {/* 3rd question  */}
        <div className="bg-white h-[60px] w-[850px] flex items-center justify-between p-4">
          <h3 className="font-semibold">How do i get paid? </h3>
          <img src="/team/plus.png" alt="" />
        </div>

        {/* 4th question  */}
        <div className="bg-white h-[60px] w-[850px] flex items-center justify-between p-4">
          <h3 className="font-semibold">Is my personal information safe? </h3>
          <img src="/team/plus.png" alt="" />
        </div>

        {/* 5th question  */}
        <div className="bg-white h-[60px] w-[850px] flex items-center justify-between p-4">
          <h3 className="font-semibold">How can we get in touch? </h3>
          <img src="/team/plus.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Questions;
