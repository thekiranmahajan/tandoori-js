import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RestaurantMenuShimmerUI } from "../shimmers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import useRestaurantMenu from "../custom-hooks/useRestaurantMenu.js";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { restaurantInfo } = useRestaurantMenu(resId);
  console.log(restaurantInfo, resId);
  return restaurantInfo === null ? (
    <RestaurantMenuShimmerUI />
  ) : (
    <div className="md:w-2/3 w-9/12 min-h-screen flex flex-col items-center mt-12">
      <div className=" w-full h-36 rounded-xl p-2 bg-white flex items-center justify-between">
        <div className="flex flex-col gap-1 ">
          <div className="rounded-lg ">{restaurantInfo?.name}</div>
          <div className="rounded-lg">
            {restaurantInfo?.cuisines?.join(", ")}
          </div>

          <div className=" rounded-lg">
            {restaurantInfo?.areaName +
              ", " +
              restaurantInfo?.feeDetails?.message?.substring(0, 6)}
          </div>
          <div className="rounded-lg">
            {restaurantInfo?.feeDetails?.message}
          </div>
        </div>
        <div className="flex flex-col gap-1 mr-4">
          <div className="rounded-lg">
            <FontAwesomeIcon className="text-green-500" icon={faStar} />
            {restaurantInfo?.avgRatingString}
          </div>
          <div className=" rounded-lg">
            {restaurantInfo?.totalRatingsString}
          </div>
        </div>
      </div>
      <div className="mt-1  w-full h-28 rounded-xl p-2 bg-white flex flex-col items-center justify-between ">
        <div className="flex w-full gap-5 ml-6">
          <div className=" rounded-lg ">{restaurantInfo?.sla?.slaString}</div>
          <div className="rounded-lg ">{restaurantInfo?.costForTwoMessage}</div>
        </div>
        <div className="flex gap-2 overflow-hidden">
          <div className="w-28 md:w-36 lg:w-40 h-12 bg-gray-300 rounded-lg"></div>
          <div className="w-28 md:w-36 lg:w-40 h-12 bg-gray-300 rounded-lg"></div>
          <div className="hidden md:flex w-28 md:w-36 lg:w-40 h-12 bg-gray-300 rounded-lg"></div>
          <div className="hidden lg:flex w-28 md:w-36 lg:w-40 h-12 bg-gray-300 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};
export default RestaurantMenu;
