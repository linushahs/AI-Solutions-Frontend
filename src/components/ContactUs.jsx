import React from "react";
import Input from "./ui/input";

const ContactUs = () => {
  return (
    <div className="flex my-20 gap-20 items-start justify-center">
      {/* -------------------------Left Side------------------------------  */}
      <div className="basis-[100%] h-full">
        <img
          className="rounded-lg w-full"
          src="/solutions/picture.png"
          alt="AI-image"
        />
      </div>

      {/* ----------------------------Right Side-------------------------------  */}
      <div className="flex flex-col gap-2 basis-[100%]">
        <h1 className="font-bold text-3xl text-gray-800">Get In Touch</h1>
        <span className="relative bottom-2 mb-2 font-semibold text-gray-700">
          Rhoncus morbi et augue nec, in id ullamcorper at sit.{" "}
        </span>

        <form action="" className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="flex flex-col basis-full">
              <label htmlFor="FirstName">FirstName</label>
              <Input placeholder="Placeholder" id="FirstName" />
            </div>
            <div className="flex flex-col basis-full">
              <label htmlFor="LastName">LastName</label>
              <Input placeholder="Placeholder" id="LastName" />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="labelName">Label Name</label>
            <Input
              className={"bg-red-300"}
              placeholder="Placeholder"
              id="labelName"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="labelName">Label Name</label>
            <Input placeholder="Placeholder" id="labelName" />
          </div>

          <div className="flex gap-2 items-center">
            <input type="checkbox" />
            <label htmlFor="">
              Vestibulum faucibus odio vitae arcu auctor lectus.
            </label>
          </div>
        </form>

        {/* buttons  */}
        <div className="flex gap-3 items-center justify-end">
          <button className="gap-4 border-[2px] font-semibold bg-blue border-blue px-6 py-[7px] text-white">
            Button Text
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
