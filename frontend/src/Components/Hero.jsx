import React from "react";
import Heading from "./Heading"; // Adjust the path if necessary
import HeroImg from "../assests/Home/home.jpg";

const Hero = () => {
  return (
    <section
      className="hero bg-cover bg-center h-[90vh] w-full"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      <div className="container pt-[15%]">
        <Heading
          title="Search Your Next Home"
          subtitle="Find new & featured property located in your local city."
        />

        <form className="flex bg-white rounded-[5px] mt-[50px] px-[20px]">
          <div className="box p-[15px] first:border-l-0 border-l border-gray-300">
            <span className="text-sm text-gray-500">City/Street</span>
            <input
              type="text"
              placeholder="Location"
              className="p-[10px] w-full border border-gray-300 mt-[5px] rounded-[5px] placeholder-black text-lg"
            />
          </div>
          <div className="box p-[15px] border-l border-gray-300">
            <span className="text-sm text-gray-500">Property Type</span>
            <input
              type="text"
              placeholder="Property Type"
              className="p-[10px] w-full border border-gray-300 mt-[5px] rounded-[5px] placeholder-black text-lg"
            />
          </div>
          <div className="box p-[15px] border-l border-gray-300">
            <span className="text-sm text-gray-500">Price Range</span>
            <input
              type="text"
              placeholder="Price Range"
              className="p-[10px] w-full border border-gray-300 mt-[5px] rounded-[5px] placeholder-black text-lg"
            />
          </div>
          <div className="box p-[15px] border-l border-gray-300">
            <h4 className="font-medium">Advance Filter</h4>
          </div>
          <button className="btn1">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
