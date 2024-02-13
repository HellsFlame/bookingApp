import React from "react";

const PropertyList = () => {
  return (
    <div className="w-full max-w-[1024px] flex justify-between gap-5">
      <div className=" flex-1 h-36 cursor-pointer">
        <img
          className="w-full object-cover h-full rounded-lg"
          src="https://r-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o="
          alt=""
        />
        <div className="flex flex-col">
          <span className=" text-lg capitalize font-bold">hotels</span>
          <span className="text-sm font-light">233 hotels</span>
        </div>
      </div>
      <div className=" flex-1 h-36 cursor-pointer">
        <img
          className="w-full object-cover h-full rounded-lg"
          src="https://q-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o="
          alt=""
        />
        <div className="flex flex-col">
          <span className=" text-lg capitalize font-bold">apartments</span>
          <span className="text-sm font-light">233 hotels</span>
        </div>
      </div>
      <div className=" flex-1 h-36 cursor-pointer">
        <img
          className="w-full object-cover h-full rounded-lg"
          src="https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o="
          alt=""
        />
        <div className="flex flex-col">
          <span className=" text-lg capitalize font-bold">resorts</span>
          <span className="text-sm font-light">233 hotels</span>
        </div>
      </div>
      <div className=" flex-1 h-36 cursor-pointer">
        <img
          className="w-full object-cover h-full rounded-lg"
          src="https://r-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o="
          alt=""
        />
        <div className="flex flex-col">
          <span className=" text-lg capitalize font-bold">villas</span>
          <span className="text-sm font-light">233 hotels</span>
        </div>
      </div>
      <div className=" flex-1 h-36 cursor-pointer">
        <img
          className="w-full object-cover h-full rounded-lg"
          src="https://q-xx.bstatic.com/xdata/images/hotel/263x210/52979454.jpeg?k=6ac6d0afd28e4ce00a8f817cc3045039e064469a3f9a88059706c0b45adf2e7d&o="
          alt=""
        />
        <div className="flex flex-col">
          <span className=" text-lg capitalize font-bold">cabins</span>
          <span className="text-sm font-light">233 hotels</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
