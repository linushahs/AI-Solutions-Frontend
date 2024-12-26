import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-500 h-full px-16 py-10">
      {/* 1st footer  */}
      <div className="flex justify-between items-center mb-12">
        <div className="flex items-center gap-2">
          <img src="/footer/cross.png" alt="" />
          <h2 className=" font-medium text-gray-300 text-2xl">AI Solutions</h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-white flex items-center justify-center gap-2 p-2 rounded">
            <img src="/footer/mail.png" alt="" />
            Enter your email to get the latest news...
          </div>
          <button className="rounded flex items-center gap-4 justify-center border-[2px] font-semibold bg-blue border-blue px-6 py-[7px] text-white">
            Subscribe
          </button>
        </div>
      </div>
      <hr />

      {/* 2nd footer  */}
      <div className="my-10 flex justify-between items-center">
        {/* 1st column  */}
        <div className="text-white flex flex-col gap-4 basis-[100%]">
          <div>
            <h4 className="font-semibold text-lg">Column One</h4>
          </div>
          <div>
            <p>Twenty One</p>
            <p>Thirty Two</p>
            <p>Fourty Three</p>
            <p>Fifty Four</p>
          </div>
        </div>

        {/* 2nd column  */}
        <div className="text-white flex flex-col gap-4 basis-[100%]">
          <div>
            <h4 className="font-semibold text-lg">Column Two</h4>
          </div>
          <div>
            <p>Twenty One</p>
            <p>Thirty Two</p>
            <p>Fourty Three</p>
            <p>Fifty Four</p>
          </div>
        </div>

        {/* 3rd column  */}
        <div className="text-white flex flex-col gap-4 basis-[100%]">
          <div>
            <h4 className="font-semibold text-lg">Column Three</h4>
          </div>
          <div>
            <p>Twenty One</p>
            <p>Thirty Two</p>
            <p>Fourty Three</p>
            <p>Fifty Four</p>
          </div>
        </div>

        {/* 4th column  */}
        <div className="text-white flex flex-col gap-4 basis-[100%]">
          <div>
            <h4 className="font-semibold text-lg">Column Four</h4>
          </div>

          {/* App stores  */}
          <div className="flex items-center gap-2">
            {/* apple  */}
            <img src="/footer/applebtn.png" alt="" />
            {/* google */}
            <img src="/footer/google.png" alt="" />
          </div>

          <p className="font-bold">Join Us</p>
          <div>
            <img src="/footer/Socialicons.png" alt="" />
          </div>
        </div>
      </div>
      <hr />

      {/* 3rd footer  */}
      <div className="flex items-center justify-between mt-10 text-white">
        <p>CompanyName @ 202X. All rights reserved.</p>
        <div className="flex gap-10 items-center font-semibold">
          <p>Eleven</p>
          <p>Twelve</p>
          <p>Thirteen</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
