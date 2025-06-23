import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, facilityIcons, roomCommonData, roomsDummyData } from "../assets/assets";
import StarRating from "../Components/StarRating";

const Roomdetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const room = roomsDummyData.find((room) => room._id === id);
    room && setRoom(room);
    room && setMainImage(room.images[0]);
  }, [id]);

  if (!room) {
    return <div className="p-10 text-center text-xl">Room not found</div>;
  }

  return (
    <div className="py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32">
      {/* Room Details */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
        <h1 className="text-3xl md:text-4xl font-playfair">
          {room.hotel.name}{" "}
          <span className="font-inter text-sm ">({room.roomType})</span>
        </h1>
        <p className="font-inter text-xs py-1.5 px-3 text-white bg-orange-500 rounded-full">
          20% Off
        </p>
      </div>

      {/* Room Rating */}
      <div className="flex items-center gap-1 mt-2">
        <StarRating />
        <p className="ml-2">200+ Reviews</p>
      </div>

      {/* Room Address */}
      <div className="flex items-center gap-1 text-gray-500 mt-2">
        <img src={assets.locationIcon} alt="location-icon" />
        <span>{room.hotel.address}</span>
      </div>

      {/* Room Images */}
      <div className="flex flex-col lg:flex-row mt-6 gap-6">
        <div className="lg:w-1/2 w-full">
          <img
            src={mainImage}
            alt="Room Image"
            className="w-full rounded-xl shadow-lg object-cover"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
          {room.images.length > 1 &&
            room.images.map((image, index) => (
              <img
                onClick={() => setMainImage(image)}
                key={index}
                src={image}
                alt="Room thumbnail"
                className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${
                  mainImage === image
                    ? "outline outline-3 outline-orange-500"
                    : ""
                }`}
              />
            ))}
        </div>
      </div>
      {/* Room Heightlights */}
      <div className="flex flex-col md:flex-row md:justify-between mt-10">
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-4xl font-playfair">
            Experience Luxury Like Never Before
          </h1>
          <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
            {room.amenities.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100"
              >
                <img src={facilityIcons[item]} alt={item} className="w-5 h-5" />
                <p className="text-xs ">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Room Price */}
        <p className="text-2xl font-medium">${room.pricePerNight}/night</p>
      </div>
      {/* CheckIn CjeckOut Form  */}
      <form
        
        className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] px-6 mx-auto rounded-xl mt-16 m-w-6xl py-4 "
      >
        <div className="flex flex-col md:flex-row flex-wrap items-start md:items-center gap-4 md:gap-10 text-gray-500">
          <div className="flex flex-col">
            <label htmlFor="ckeckInDate" className="font-medium">
              Check-In
            </label>
            <input
              type="date"
              placeholder="Check-In"
              id="checkInDate"
              className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 p outline-none"
              required
            />
          </div>
           <div className="w-px h-15 bg-gray-300/70 max-md:hidden">  </div>

          <div className="flex flex-col">
            <label htmlFor="ckeckOutDate" className="font-medium">
              Check-Out
            </label>
            <input
              type="date"
              placeholder="Check-Out"
              id="ckeckOutDate"
              className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 p outline-none"
              required
            />
          </div>
          <div className="w-px h-15 bg-gray-300/70 max-md:hidden">  </div>

        

          <div className="flex flex-col">
            <label htmlFor="guests" className="font-medium">
              Guests
            </label>
            <input
              type="number"
              placeholder="0"
              id="guests"
              className="max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 p outline-none"
              required
            />
          </div>
          
        </div>
        <button
            type="submit"
             className="bg-primary hover:bg-primary-dull active:scale-95 transition-all text-white rounded-md w-full md:w-auto mt-6 md:mt-0 md:px-14 px-6 py-3  md:py-4 text-base cursor-pointer"
          >
          Check Availability
          </button>
      </form>
         {/* Common Specification  */}
         <div className="mt-25 space-y-4">
          {roomCommonData.map((spec, index)=>(
            <div key={index} className="flex items-start gap-2"> 
            <img src={spec.icon} alt={`{spec.title}-icon`} className="w-6.5 " />
            <div>
              <p className="text-base"> {spec.title}</p>
              <p className="text-gray-500">{spec.description}</p>
            </div>
            
            </div>
          ))}
         </div>

         <div className="max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500" >
          <p>
            Guests will be allocated on the ground floor according to the availability. You get a comfortable two bedroom apartment has a true city feeling.
          </p>
         </div>

              {/* Hosted By  */}

         <div className="flex flex-col items-start gap-4">
          <div className="flex gap-4">
            <img src="/owner.png" alt="Host" className="h-12 w-12 md:h-15 md:w-15  rounded-full" />
            <div>
              <p className="text-xl md:text-xl">  Hosted By {room.hotel.name}</p>
              <div className="flex items-center mt-1">
                <StarRating/>
                <p className="ml-2 "> 200+ Reviews</p>
              </div>
            </div>
          </div>
          <button className="px-6 py-2.5 mt-4 rounded text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer ">Contact Now</button>


         </div>


    </div>
  );
};

export default Roomdetails;
