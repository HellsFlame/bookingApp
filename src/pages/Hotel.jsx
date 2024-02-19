import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import MailList from "../components/MailList";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [showSlider, setShowSlider] = useState(false);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setShowSlider(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;
    if (direction === "left") {
      newSlideNumber = slideNumber === 0 ? photos.length - 1 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === photos.length - 1 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/213270443.jpg?k=6dbf8ac665f597f52e7728e9c32d53e774d0c03f8ebb5ee062b1951a15ad8491&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/213154403.jpg?k=76cf0f58b5f0c6e8ebd1d6d775712b1d4193f8def652a8095534fa488d23948a&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/213154358.jpg?k=99f768c306d58bc1a7870c06332e476b9a4465fc5e0cf34f3ef874640a58231b&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/233010854.jpg?k=825e8de7abeef55e885125940735b04df12ce0e1aa07bf3e6d391d52647f039f&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/213270413.jpg?k=cc49454793bed93031fd764a8dd646c79d384717a18550c8a7dded2bb26ee992&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/213270365.jpg?k=fe9152c4598cebcdd6c5e7a8cea7adabb650e83b48a1fc33ce3299b66eef0d51&o=&hp=1",
    },
  ];
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="flex flex-col items-center mt-5">
        {showSlider && (
          <div className="sticky top-0 left-0 w-screen h-screen z-50 flex items-center justify-between bg-[rgba(0,0,0,0.426)]">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="absolute top-5 right-5 text-3xl text-gray-300 cursor-pointer"
              onClick={() => setShowSlider(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="text-5xl text-gray-300 cursor-pointer"
              onClick={() => handleMove("left")}
            />
            <div className="w-full h-full flex items-center justify-center">
              <img
                className="w-[80%] h-[80vh]"
                src={photos[slideNumber].src}
                alt=""
              />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="text-5xl text-gray-300 cursor-pointer"
              onClick={() => handleMove("right")}
            />
          </div>
        )}
        <div className="flex flex-col w-full max-w-[1024px] gap-2.5 relative">
          <button className="absolute top-2.5 right-0 border-none py-2.5 px-5 bg-[#0071c2] text-white font-bold cursor-pointer rounded-md">
            Reserve or Book Now!
          </button>
          <span className="text-2xl capitalize font-bold">grand hotel</span>
          <div className="flex text-xs items-center gap-2.5">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New york</span>
          </div>
          <span className="text-[#0071c2] font-medium">
            Excellent location - 500m from center
          </span>
          <span className="text-[#008009] font-medium">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="flex flex-wrap justify-between">
            {photos.map((photo, ind) => (
              <div className="w-[33%]">
                <img
                  onClick={() => handleOpen(ind)}
                  className="w-full object-cover cursor-pointer"
                  src={photo.src}
                  alt=""
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between gap-5 mt-5">
            <div className="w-3/4 flex flex-col">
              <span className="text-2xl font-bold">
                Stay in the heart of Krakow
              </span>
              <span className="text-sm mt-5">
                Conveniently set in the centre of Kraków, Hotel Perfect offers
                4-star accommodation close to Wawel Royal Castle and St. Mary's
                Basilica. The property is close to Main Market Square, Cloth
                Hall and St. Florian's Gate. The accommodation provides a
                24-hour front desk, airport transfers, room service and free
                WiFi throughout the property. Guests at the accommodation can
                enjoy a buffet breakfast. Popular points of interest near Hotel
                Perfect include Lost Souls Alley, Schindler Factory Museum and
                Town Hall Tower. The nearest airport is John Paul II
                International Kraków–Balice Airport, 24 km from the hotel.
              </span>
            </div>
            <div className="w-1/4 flex flex-col bg-[#ebf3ff] p-4 gap-4">
              <span className="text-[#555] text-lg font-bold">
                Perfect for a 9-night stay!
              </span>
              <span className="text-sm">
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <span className="">
                <b>$945</b> (9 nights)
              </span>
              <button className="border-none py-2.5 px-5 bg-[#0071c2] text-white font-bold cursor-pointer rounded-md">
                Reserve or Book Now!
              </button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
