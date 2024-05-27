import React from "react";
import { IMG_URL } from "../utils/constants";

const DiscountOfferCard = ({ header, couponCode, description }) => {
  return (
    <div className="flex h-16 w-64 cursor-pointer flex-col gap-2 rounded-md border-2 bg-white p-2 tracking-tight">
      <h2 className="flex items-center gap-2 text-sm font-bold text-gray-600">
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
