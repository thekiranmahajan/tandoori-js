import React from "react";

const RestaurantCard = () => {
  return (
    <div className="w-72 h-72 rounded-2xl  overflow-hidden hover:scale-90 transition-transform duration-300">
      <div className="w-full h-40">
        <img
          className=" w-full h-full object-cover object-center rounded-2xl"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cgf7qsoqsvfwletamxt4"
          alt="Restaurant Img"
        />
      </div>
      <div className="w-full px-4 py-2">
        <h2 className="text-lg font-semibold truncate">
          Shahji's Parantha House (Laxmi Road)
        </h2>
        <h4 className="font-semibold text-lg">4.5.32 mins</h4>
        <p className="text-gray-500 truncate">
          Biryani, North Indian, Punjabi, Health
        </p>
        <p className="text-gray-500 truncate">Shaniwar Peth</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
