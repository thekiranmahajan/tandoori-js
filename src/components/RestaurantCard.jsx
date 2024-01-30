import React from "react";
import { IMG_URL } from "../constants.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faStar } from "@fortawesome/free-solid-svg-icons";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  locality,
  avgRating,
  sla,
}) => {
  return (
    <div className="m-4 w-72 h-72 rounded-2xl  overflow-hidden hover:scale-90 transition-transform duration-300  ">
      <div className="w-full h-40">
        <img
          className=" w-full h-full object-cover object-center rounded-2xl"
          src={IMG_URL + cloudinaryImageId}
          alt="Restaurant Img"
        />
      </div>
      <div className="w-full px-4 py-2">
        <h2 className="text-lg font-semibold truncate">{name}</h2>
        <div className="font-semibold text-md flex gap-2 ">
          <p className="flex items-center  gap-1">
            <FontAwesomeIcon className="text-green-500" icon={faStar} />
            {avgRating}
          </p>
          <p className="flex items-center gap-1">
            <FontAwesomeIcon className="text-[0.4rem]" icon={faCircle} />
            {sla?.deliveryTime} mins
          </p>
        </div>
        <p className="text-gray-500 truncate">{cuisines?.join(", ")}</p>
        <p className="text-gray-500 truncate">{locality}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
