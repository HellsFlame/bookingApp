import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import SearchItem from "../components/SearchItem";

const Hotels = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="flex justify-center mt-5">
        <div className="w-full max-w-[1024px] flex gap-5">
          <div className="w-2/6 bg-[#febb02] sticky top-2.5 p-2.5 rounded-lg h-fit">
            <span className=" text-xl text-[#555] mb-2.5 capitalize font-bold">
              search
            </span>
            <div className="flex flex-col mb-2.5 gap-1">
              <label className="text-xs">Destination</label>
              <input
                className="h-7 border-none p-1"
                placeholder={destination}
                type="text"
              />
            </div>
            <div className="flex flex-col mb-2.5 gap-1">
              <label className="text-xs">Check-in Date</label>
              <span
                onClick={() => setOpenDate(!openDate)}
                className="h-7 bg-white flex items-center cursor-pointer p-1"
              >
                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  ranges={date}
                  minDate={new Date()}
                />
              )}
            </div>
            <div className="flex flex-col mb-2.5 gap-1">
              <label className="text-xs">Options</label>
              <div className="p-2.5">
                <div className="flex justify-between mb-2.5 text-[#555] text-xs">
                  <span>
                    Min price <small>per night</small>
                  </span>
                  <input className="w-12" type="number" name="" id="" />
                </div>
                <div className="flex justify-between mb-2.5 text-[#555] text-xs">
                  <span>
                    Max price <small>per night</small>
                  </span>
                  <input className="w-12" type="number" name="" id="" />
                </div>
                <div className="flex justify-between mb-2.5 text-[#555] text-xs">
                  <span>Adult</span>
                  <input
                    placeholder={options.adults}
                    min={1}
                    className="w-12"
                    type="number"
                    name=""
                    id=""
                  />
                </div>
                <div className="flex justify-between mb-2.5 text-[#555] text-xs">
                  <span>Children</span>
                  <input
                    placeholder={options.children}
                    min={0}
                    className="w-12"
                    type="number"
                    name=""
                    id=""
                  />
                </div>
                <div className="flex justify-between mb-2.5 text-[#555] text-xs">
                  <span>Room</span>
                  <input
                    placeholder={options.rooms}
                    min={1}
                    className="w-12"
                    type="number"
                    name=""
                    id=""
                  />
                </div>
              </div>
            </div>
            <div className="p-2.5 capitalize bg-[#0071c2] text-white w-full font-bold cursor-pointer flex justify-center">
              search
            </div>
          </div>
          <div className="w-4/6">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
