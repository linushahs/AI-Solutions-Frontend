import React from "react";
import Input from "./ui/input";

const ContactUs = () => {
  return (
    <div className="flex mt-16 mb-20 gap-16 items-start justify-center">
      {/* -------------------------Left Side------------------------------  */}
      <div className="basis-[100%] h-full">
        <img
          className="rounded-xl w-full"
          src="/contact-us.avif"
          alt="AI-image"
        />
      </div>

      {/* ----------------------------Right Side-------------------------------  */}
      <div className="flex flex-col gap-2 basis-[100%] mt-4">
        <h1 className="font-bold text-3xl text-gray-800">Get In Touch</h1>
        <span className="relative bottom-2 mb-2 font-semibold text-gray-700">
          Rhoncus morbi et augue nec, in id ullamcorper at sit.{" "}
        </span>

        <form action="" className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="flex flex-col basis-full">
              <label htmlFor="FirstName">FirstName</label>
              <Input placeholder="eg. John" id="FirstName" />
            </div>
            <div className="flex flex-col basis-full">
              <label htmlFor="LastName">LastName</label>
              <Input placeholder="eg. Doe" id="LastName" />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col flex-1">
              <label htmlFor="contact">Contact</label>
              <Input type={"number"} placeholder="eg. 98xxxxxxx" id="contact" />
            </div>

            <div className="flex flex-col flex-1">
              <label htmlFor="email">Email Address</label>
              <Input
                type={"text"}
                placeholder="eg. johndoe@gmail.com"
                id="email"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="address">Address</label>
            <Input placeholder="eg. Kathmandu" id="address" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message">Message</label>
            <textarea
              rows={4}
              placeholder="Write you queries here."
              id="message"
              className="outline-none rounded p-2 bg-gray-200 border-b-2 border-gray-400"
            />
          </div>
        </form>

        {/* buttons  */}
        <div className="flex gap-3 items-center justify-end mt-4">
          <button className="gap-4 border-[2px] rounded-md font-semibold bg-blue border-blue px-6 py-[7px] text-white">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
