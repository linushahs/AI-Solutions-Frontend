import React from "react";
import { IoEyeOutline } from "react-icons/io5";

const Login = () => {
  return (
    <div className="flex justify-center items-center gap-16 my-10">
      <img src="/login/login.png" className="h-[100vh] w-[38%]" alt="" />
      <div className="flex flex-col gap-10 w-[38%]">
        <h1 className="font-bold text-3xl">Log In</h1>
        <div className="flex flex-col gap-4">
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
            <p className="font-semibold text-sm text-gray-600">
              It must be a combination of minimum 8 letters, numbers, and
              symbols.
            </p>
          </div>
          <div className="flex justify-between font-semibold text-gray-700">
            <div className="flex gap-2 items-center">
              <input type="checkbox" />
              <label htmlFor="">Remember me</label>
            </div>
            <a href="#">Forgot Password ?</a>
          </div>
          {/* button  */}
          <div>
            <button className="w-full gap-4 border-[2px] font-semibold bg-blue border-blue px-6 py-[7px] text-white">
              Log In
            </button>
          </div>
        </div>

        <hr />
        <a href="#" className="font-semibold text-gray-700">
          No account yet? Sign Up
        </a>
      </div>
    </div>
  );
};

export default Login;
