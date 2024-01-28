import React from "react";
import { IMG_URL } from "../constants";

const DiscountOfferCard = ({ header, couponCode, description }) => {
  return (
    <div className="w-64 h-16 border-2 rounded-md p-2 flex flex-col gap-2 cursor-pointer bg-white tracking-tight">
      <h2 className="flex gap-2 items-center text-sm font-bold text-gray-600">
        <img
          className="h-5"
          src={IMG_URL + "offers/generic"}
          alt="offer icon"
        />
        {header}
      </h2>
      <p className="text-xs font-semibold text-gray-500 ">
        {couponCode} | {description}
      </p>
    </div>
  );
};

export default DiscountOfferCard;
