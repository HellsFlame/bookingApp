import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adults: 1,
    children: 0,
    rooms: 1,
  });
  const navigate = useNavigate();

  const handleOptions = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "d" ? options[name] - 1 : options[name] + 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  return (
    <div className="bg-[#003580] flex justify-center text-white relative">
      <div
        className={`w-full max-w-[1024px] mt-5 ${
          type === "list" ? "mb-0" : "mb-24"
        } `}
      >
        <div className="flex items-center gap-10 mb-12">
          <div className="flex items-center gap-2 cursor-pointer p-2.5 border border-white rounded-3xl">
            <FontAwesomeIcon icon={faBed} />
            <span className="capitalize">stays</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <FontAwesomeIcon icon={faPlane} />
            <span className="capitalize">flights</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <FontAwesomeIcon icon={faCar} />
            <span className="capitalize">car rentals</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <FontAwesomeIcon icon={faBed} />
            <span className="capitalize">attractions</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <FontAwesomeIcon icon={faTaxi} />
            <span className="capitalize">airport taxis</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <div className="gap-3 flex flex-col">
              <p className=" text-3xl font-bold">
                A lifetime of discounts? It's Genius.
              </p>
              <p className="text-lg font-thin">
                {" "}
                Get rewarded for your travels - unlock instant savings of 10% or
                more with a free Lamabooking account
              </p>
              <button className="bg-[#0071c2] text-white border-none p-2.5 cursor-pointer font-medium w-fit">
                Sign in / Register
              </button>
            </div>
            <div className=" h-9  border-[3px] border-yellow-400 bg-white flex items-center justify-around py-5 rounded absolute w-full max-w-[1024px]  bottom-[-23px]">
              <div className="flex items-center gap-2.5">
                <FontAwesomeIcon icon={faBed} className=" text-gray-400" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="border-none outline-none text-black"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2.5">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className=" text-gray-400"
                />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className=" text-gray-400 cursor-pointer"
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    minDate={new Date()}
                    className="absolute top-[43px] z-10"
                  />
                )}
              </div>
              <div className="flex items-center gap-2.5">
                <FontAwesomeIcon icon={faPerson} className=" text-gray-400" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className=" text-gray-400 cursor-pointer"
                >
                  {`${options.adults} adults · ${options.children} children · ${options.rooms} rooms`}
                </span>
                {openOptions && (
                  <div className="flex flex-col absolute top-[43px] text-gray-500 bg-white rounded-md shadow-md p-2.5 w-56 gap-2 z-10">
                    <div className="flex items-center w-full justify-between">
                      <span className="font-semibold">Adult</span>
                      <div className="flex items-center gap-2.5">
                        <button
                          disabled={options.adults <= 1}
                          onClick={() => handleOptions("adults", "d")}
                          className=" w-7 h-7 cursor-pointer border border-[#0071c2] text-[#0071c2] disabled:cursor-not-allowed"
                        >
                          -
                        </button>
                        <span className=" text-xs text-black">{`${options.adults}`}</span>
                        <button
                          onClick={() => handleOptions("adults", "i")}
                          className=" w-7 h-7 cursor-pointer border border-[#0071c2] text-[#0071c2]"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center w-full justify-between">
                      <span className="font-semibold">Children</span>
                      <div className="flex items-center gap-2.5">
                        <button
                          disabled={options.children <= 0}
                          onClick={() => handleOptions("children", "d")}
                          className=" w-7 h-7 cursor-pointer border border-[#0071c2] text-[#0071c2] disabled:cursor-not-allowed"
                        >
                          -
                        </button>
                        <span className=" text-xs text-black">{`${options.children}`}</span>
                        <button
                          onClick={() => handleOptions("children", "i")}
                          className=" w-7 h-7 cursor-pointer border border-[#0071c2] text-[#0071c2]"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center w-full justify-between">
                      <span className="font-semibold">Room</span>
                      <div className="flex items-center gap-2.5">
                        <button
                          disabled={options.rooms <= 1}
                          onClick={() => handleOptions("rooms", "d")}
                          className=" w-7 h-7 cursor-pointer border border-[#0071c2] text-[#0071c2] disabled:cursor-not-allowed"
                        >
                          -
                        </button>
                        <span className=" text-xs text-black">{`${options.rooms}`}</span>
                        <button
                          onClick={() => handleOptions("rooms", "i")}
                          className=" w-7 h-7 cursor-pointer border border-[#0071c2] text-[#0071c2]"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div>
                <button
                  className="bg-[#0071c2] text-white border-none p-1 cursor-pointer font-medium w-fit"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
