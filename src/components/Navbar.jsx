import React from "react";

const Navbar = () => {
  return (
    <div className=" h-12 bg-[#003580] flex justify-center">
      <div className="w-full max-w-[1024px] text-white flex items-center justify-between">
        <span className="font-medium text-lg cursor-pointer">lamabooking.</span>
        <div className="flex items-center gap-5">
          <button className="py-1 px-2 bg-white text-[#003580] cursor-pointer">
            login
          </button>
          <button className="py-1 px-2  bg-white text-[#003580] cursor-pointer">
            register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
