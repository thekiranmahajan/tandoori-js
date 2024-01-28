import React from "react";

const DiscountOfferCard = () => {
  return (
    <div className="w-52 h-16 border-2 rounded-md p-2 flex flex-col gap-2 cursor-pointer bg-white">
      <h2 className="flex gap-2 items-center text-sm font-bold text-gray-600">
        <img
          className="h-5"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/Store_Assets/Icons/OfferIconCart"
          alt="offer icon"
        />
        10% OFF UPTO ₹40
      </h2>
      <p className="text-xs font-semibold text-gray-500 ">
        USE TRYNEW | ABOVE ₹159
      </p>
    </div>
  );
};

export default DiscountOfferCard;
