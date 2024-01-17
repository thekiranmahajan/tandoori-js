import React from "react";
import { IMG_URL } from "../constants.js";
const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  locality,
  avgRating,
  sla,
}) => {
  return (
    <div className="m-4 w-72 h-72 rounded-2xl  overflow-hidden hover:scale-90 transition-transform duration-300">
      <div className="w-full h-40">
        <img
          className=" w-full h-full object-cover object-center rounded-2xl"
          src={IMG_URL + cloudinaryImageId}
          alt="Restaurant Img"
        />
      </div>
      <div className="w-full px-4 py-2">
        <h2 className="text-lg font-semibold truncate">{name}</h2>
        <p className="font-semibold text-lg">
          <span>{avgRating}</span> <span>{sla.deliveryTime}</span>mins
        </p>
        <p className="text-gray-500 truncate">{cuisines.join(", ")}</p>
        <p className="text-gray-500 truncate">{locality}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
