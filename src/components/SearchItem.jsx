import React from "react";

const SearchItem = () => {
  return (
    <div className="border border-gray-300 p-2.5 flex justify-between gap-5 mb-5 rounded-md">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square200/406410116.webp?k=7ab1b6c2dd65b51b8f4a6bd130392ff62c262e0b08a25759d5dc2235327e3d03&o="
        alt=""
        className="object-cover w-52 h-52"
      />
      <div className="flex flex-col gap-2.5 w-2/3">
        <span className="text-xl text-[#0071c2] capitalize font-bold">
          tower street apartments
        </span>
        <span className="text-xs">500m from center</span>
        <span className="text-xs text-white bg-[#008009] w-fit p-1 rounded-md">
          free airport taxi
        </span>
        <span className="text-xs font-bold">
          Studio Apartment with Air Conditioning
        </span>
        <span className="text-xs">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="text-xs font-bold text-[#008009]">
          Free cancellation
        </span>
        <span className="text-xs text-[#008009]">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="w-1/3 flex flex-col justify-between">
        <div className="flex justify-between">
          <span className="font-semibold capitalize">excellent</span>
          <button className="bg-[#003580] font-bold px-1 py-0.5 text-white border-none">
            8.9
          </button>
        </div>
        <div className="flex flex-col gap-1 text-right">
          <span className="text-2xl">$123</span>
          <span className="text-xs text-gray-600">Includes taxes and fees</span>
          <button className="bg-[#0071c2] font-bold text-white py-2 px-1 border-none cursor-pointer rounded-md">
            See availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
