import React from "react";
import { assets, cities } from "../assets/assets";

const Hero = () => {
  return (
    <div className="relative h-screen text-white overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://assets-cug1-825v2.tajhotels.com/video/TAJ%20WEBSITE%20FILM_1920%20X%20930_148mb.mp4?Impolicy=Medium_High"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Foreground Content */}
      <div className="flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 h-full ">
        <p className="bg-[#49B9FF]/50 px-4 py-1 rounded-full mt-10 ml-1 md:ml-7">
          The Ultimate Hotel Experience
        </p>

        <h1 className="font-playfair text-3xl md:text-5xl font-bold md:font-extrabold max-w-xl mt-4 ml-1 md:ml-7">
          Discover Your Perfect Gateway Destination
        </h1>

        <p className="text-sm md:text-base max-w-lg mt-2 ml-1 md:ml-7">
          Unparalleled luxury and comfort await at the world’s most exclusive
          hotels & resorts. Start your journey today!
        </p>

        <form className="bg-white text-gray-800 rounded-lg px-4 sm:px-6 py-4 flex flex-col md:flex-row items-start md:items-end gap-4 w-full max-w-3xl mt-8 shadow-md ml-0 md:ml-6">
          {/* Destination */}
          <div className="flex flex-col w-full md:w-1/5">
            <label
              htmlFor="destinationInput"
              className="flex items-center gap-2 text-sm font-medium"
            >
              <img src={assets.calenderIcon} alt="" className="h-4" />
              Destination
            </label>
            <input
              list="destinations"
              id="destinationInput"
              type="text"
              className="rounded border border-gray-200 px-3 py-2 mt-1 text-sm outline-none"
              placeholder="Type here"
              required
            />
            <datalist id="destinations">
              {cities.map((city, index) => (
                <option value={city} key={index} />
              ))}
            </datalist>
          </div>

          {/* Check-In */}
          <div className="flex flex-col w-full md:w-1/5">
            <label
              htmlFor="checkIn"
              className="flex items-center gap-2 text-sm font-medium"
            >
              <img src={assets.calenderIcon} alt="" className="h-4" />
              Check in
            </label>
            <input
              id="checkIn"
              type="date"
              className="rounded border border-gray-200 px-3 py-2 mt-1 text-sm outline-none"
            />
          </div>

          {/* Check-Out */}
          <div className="flex flex-col w-full md:w-1/5">
            <label
              htmlFor="checkOut"
              className="flex items-center gap-2 text-sm font-medium"
            >
              <img src={assets.calenderIcon} alt="" className="h-4" />
              Check out
            </label>
            <input
              id="checkOut"
              type="date"
              className="rounded border border-gray-200 px-3 py-2 mt-1 text-sm outline-none"
            />
          </div>

          {/* Guests */}
          <div className="flex flex-col w-full md:w-1/5">
            <label htmlFor="guests" className="text-sm font-medium">
              Guests
            </label>
            <input
              min={1}
              max={4}
              id="guests"
              type="number"
              className="rounded border border-gray-200 px-3 py-2 mt-1 text-sm outline-none w-full"
              placeholder="0"
            />
          </div>

          {/* Search Button */}
          <button className="flex items-center justify-center gap-2 rounded-md bg-black px-5 py-3 text-white font-medium hover:bg-gray-800 transition w-full md:w-auto">
            <img src={assets.searchIcon} alt="search" className="h-5" />
            <span>Search</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
