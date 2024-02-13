import React from "react";

const Featured = () => {
  return (
    <div className="w-full max-w-[1024px] flex justify-between gap-5">
      <div className="w-1/3 relative text-white h-60">
        <img
          src="https://cf.bstatic.com/xdata/images/city/540x270/977220.jpg?k=ee4b7b42c35b8cbf09c8ddb7630092b40cd706fec153c41904ed6e252a883938&o="
          alt=""
          className="w-full object-cover h-full rounded-lg "
        />
        <div className="flex flex-col absolute bottom-5 left-5">
          <span className="capitalize font-extrabold text-xl">dubai</span>
          <span className="text-lg font-bold">123 properties</span>
        </div>
      </div>
      <div className="w-1/3 relative text-white h-60 ">
        <img
          src="https://cf.bstatic.com/xdata/images/city/354x266/724981.jpg?k=d2a74ca55c128d783c4a6836713abe2ef7874ba2cc276b9f671df017ff24da19&o="
          alt=""
          className="w-full object-cover h-full rounded-lg "
        />
        <div className="flex flex-col absolute bottom-5 left-5">
          <span className="capitalize font-extrabold text-xl">islamabad</span>
          <span className="text-lg font-bold">456 properties</span>
        </div>
      </div>
      <div className="w-1/3 relative text-white h-60">
        <img
          src="https://cf.bstatic.com/xdata/images/city/354x266/688591.jpg?k=9a550fedccb750cfa3f2e8eaf507287d4007f21def68e6566cc00b200946e876&o="
          alt=""
          className="w-full object-cover h-full rounded-lg "
        />
        <div className="flex flex-col absolute bottom-5 left-5">
          <span className="capitalize font-extrabold text-xl">makkah</span>
          <span className="text-lg font-bold">789 properties</span>
        </div>
      </div>
    </div>
  );
};

export default Featured;
