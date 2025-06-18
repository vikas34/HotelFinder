import React from "react";
import { assets, facilityIcons, roomsDummyData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import StarRating from "../Components/StarRating";

const AllRooms = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col-reverse lg-flex-row items-start justify-between pt-18 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32">
      <div className="flex flex-col items-start text-left">
        <h1 className="font-playfair text-4xl md:text-[40px]">Hotel Rooms</h1>

        <p className="text-sm md:text-baset text-gray-500/90 mt-2 mx-w-174">
          Take advantege of our limited time offers and special packages to
          enhance your stay and create unforgattble memories.
        </p>

        {roomsDummyData.map((room) => (
          <div key={room._id} className="flex flex-col md:flex-row items-start py-10 gap-6 border-b border-gray-300 last:pb-30 last:border-0">
            <img
              onClick={() => {
                navigate(`/rooms/${room._id}`);
                scrollTo(0, 0);
              }}
              src={room.images[0]}
              alt="hotel-img"
              title="View Room Details"
              className="max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer"
            />
            <div className="flex flex-col gap-2 md:w-1/2">
              <p className="text-gray-500">{room.hotel.city}</p>
              <p
                onClick={() => {
                  navigate(`/rooms/${room._id}`);
                  scrollTo(0, 0);
                }}
                className="text-gray-800 font-playfair text-3xl cursor-pointer"
              >
                {room.hotel.name}
              </p>
              <div className="flex items-center">
                <StarRating />
                <p className="ml-2"> 200+ Reviews</p>
              </div>
              <div className="flex items-center gap-1 texr-gray-500 mt-2 text-sm"><img src={assets.locationIcon} alt="location-icon" />
               <span>{room.hotel.address}</span>
              </div>
              {/*Room Amenities*/}

              <div className="flex flex-wrap items-center mt-3 mb-6 gap-4 max-w-[275px]">
                {room.amenities.map((item, index)=>(
                    <div key={index} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F5FF]/70"> 
                        <img src={facilityIcons[item]} alt={item}  className="w-5 h-5"/>
                        <p className="text-xs">{item}</p>
                    </div>
                ))}
              </div>
             
            </div>
          </div>
        ))}
      </div>
      {/*Filters*/}
      <div></div>
    </div>
  );
};

export default AllRooms;
