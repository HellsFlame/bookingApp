import React from "react";

const MailList = () => {
  return (
    <div className="w-full mt-12 bg-[#003580] text-white flex flex-col items-center gap-5 p-12">
      <span className="text-2xl font-bold">Save time, save money!</span>
      <span>Sign up and we'll send the best deals to you</span>
      <div className="flex gap-2.5">
        <input
          className=" w-72 h-10 p-2.5 border-none text-black rounded-md"
          type="text"
          placeholder="Your Email"
        />
        <div className="capitalize h-10 bg-[#0071c2] text-white font-semibold border-none rounded-md cursor-pointer flex items-center justify-center px-1">
          subscribe
        </div>
      </div>
    </div>
  );
};

export default MailList;
