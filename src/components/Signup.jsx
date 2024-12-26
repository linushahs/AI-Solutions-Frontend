import React from "react";
import { IoEyeOutline } from "react-icons/io5";

const Signup = () => {
  return (
    <div className="flex justify-center items-center gap-16 my-10">
      <img src="/login/login.png" className="h-[100vh] w-[38%]" alt="" />
      <div className="flex flex-col gap-10 w-[38%]">
        <h1 className="font-bold text-3xl mb-[-5px]">Sign Up</h1>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-1 basis-full">
              <label htmlFor="FirstName">FirstName</label>
              <input
                className="outline-none rounded p-2 bg-gray-200 border-b-2 border-gray-400"
                type="text"
                id="FirstName"
                placeholder="Placeholder"
              />
            </div>
            <div className="flex flex-col gap-1 basis-full">
              <label htmlFor="LastName">LastName</label>
              <input
                className="outline-none rounded p-2 bg-gray-200 border-b-2 border-gray-400"
                type="text"
                id="LastName"
                placeholder="Placeholder"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="labelName">Email Address</label>
            <input
              className="outline-none rounded p-3 bg-gray-200 border-b-2 border-gray-400"
              type="email"
              placeholder="Placeholder"
              id="labelName"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="labelName">Password</label>
            <div className="relative flex rounded p-3 bg-gray-200 border-b-2 border-gray-400 items-center justify-between">
              <input
                className="bg-gray-200 outline-none w-full"
                type="password"
                placeholder="Placeholder"
                id="labelName"
              />
              <IoEyeOutline className="text-[20px]" />
            </div>
          </div>
          <div className="flex gap-2 font-semibold text-gray-700">
            <input type="checkbox" />
            <label htmlFor="">Remember me</label>
          </div>
          {/* button  */}
          <div>
            <button className="w-full gap-4 border-[2px] font-semibold bg-blue border-blue px-6 py-[7px] text-white">
              Log In
            </button>
          </div>
        </div>
        <div className="flex gap-4 justify-between text-blue">
          <button className="flex items-center w-full gap-4 border-[2px] font-semibold border-blue px-6 py-[7px]">
            <img src="/login/google.png" alt="google" />
            Log In with Google
          </button>

          <button className="flex items-center w-full gap-4 border-[2px] font-semibold border-blue px-6 py-[7px]">
            <img src="/login/apple.png" alt="apple" />
            Log In with Apple
          </button>
        </div>
        <hr />
        <a href="#" className="font-semibold text-gray-700">
          No account yet? Sign Up
        </a>
      </div>
    </div>
  );
};

export default Signup;
