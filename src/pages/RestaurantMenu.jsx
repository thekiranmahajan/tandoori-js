import React from "react";
import { useParams } from "react-router-dom";
import { RestaurantMenuShimmerUI } from "../shimmers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import useRestaurantMenu from "../custom-hooks/useRestaurantMenu.js";
import { IMG_URL } from "../constants.js";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { restaurantInfo } = useRestaurantMenu(resId);
  console.log(restaurantInfo, resId);
  return restaurantInfo === null ? (
    <RestaurantMenuShimmerUI />
  ) : (
    <div className="md:w-2/3 w-9/12 min-h-screen flex flex-col items-center mt-12">
      <div className=" w-full h-36 rounded-xl p-2 bg-white flex items-center justify-between">
        <div className="flex flex-col gap-1 px-4">
          <div className="font-bold text-xl">{restaurantInfo?.name}</div>
          <div className="text-xs text-gray-600">
            {restaurantInfo?.cuisines?.join(", ")}
          </div>

          <div className="text-xs text-gray-600">
            {restaurantInfo?.areaName +
              ", " +
              restaurantInfo?.sla?.lastMileTravelString}
          </div>
          <div className="mt-2 flex items-center gap-2 text-sm ">
            {restaurantInfo?.feeDetails?.message && (
              <>
                <img
                  className="h-6"
                  src={IMG_URL + restaurantInfo?.feeDetails?.icon}
                  alt="icon"
                />
                <span className="text-gray-400">
                  {restaurantInfo?.feeDetails?.message}
                </span>
              </>
            )}
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
