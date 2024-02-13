import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Featured from "../components/Featured";
import PropertyList from "../components/PropertyList";
import FeaturedProperties from "../components/FeaturedProperties";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className=" mt-12 flex flex-col items-center gap-7">
        <Featured />
        <p className="font-bold text-xl w-full max-w-[1024px]">
          Browse by property type
        </p>
        <PropertyList />
        <p className="font-bold text-xl w-full max-w-[1024px]">
          Home guestes love
        </p>
        <FeaturedProperties />
      </div>
    </div>
  );
};

export default Home;
