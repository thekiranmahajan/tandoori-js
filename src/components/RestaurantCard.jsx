import React from "react";
import { IMG_URL } from "../utils/constants.js";
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
    <div className="m-4 h-72 w-72 overflow-hidden  rounded-2xl transition-transform duration-300 hover:scale-90  ">
      <div className="h-40 w-full">
        <img
          className=" h-full w-full rounded-2xl object-cover object-center"
          src={IMG_URL + cloudinaryImageId}
          alt="Restaurant Img"
        />
      </div>
      <div className="w-full px-4 py-2">
        <h2 className="truncate text-lg font-semibold">{name}</h2>
        <div className="text-md flex gap-2 font-semibold ">
          <p className="flex items-center  gap-1">
            <FontAwesomeIcon className="text-green-500" icon={faStar} />
            {avgRating}
          </p>
          <p className="flex items-center gap-1">
            <FontAwesomeIcon className="text-[0.4rem]" icon={faCircle} />
            {sla?.deliveryTime} mins
          </p>
        </div>
        <p className="truncate text-gray-500">{cuisines?.join(", ")}</p>
        <p className="truncate text-gray-500">{locality}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
