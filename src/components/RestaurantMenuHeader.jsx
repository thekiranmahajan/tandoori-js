import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faRupeeSign,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { IMG_URL } from "../utils/constants.js";
import DiscountOfferCard from "./DiscountOfferCard.jsx";
import { Link } from "react-router-dom";

const RestaurantMenuHeader = ({ restaurantOffers, restaurantInfo }) => {
  const {
    name,
    cuisines,
    areaName,
    sla,
    feeDetails,
    avgRatingString,
    totalRatingsString,
    costForTwoMessage,
  } = restaurantInfo;
  console.log(restaurantOffers);
  return (
    <>
      <div className="mb-6 w-full text-left  text-[0.65rem] font-semibold text-gray-500 md:mb-10">
        <Link to="/">Home</Link>
        <span className="cursor-pointer"> / Pune / </span>
        <span className="text-gray-800">{name}</span>
      </div>
      <div className=" flex h-36 w-full items-center justify-between rounded-xl bg-gray-100 p-2">
        <div className="flex flex-col gap-1 px-4">
          <div className="text-xl font-bold">{name}</div>
          <div className="text-xs font-medium text-gray-400">
            {cuisines?.join(", ")}
          </div>

          <div className="text-xs font-medium text-gray-400">
            {areaName + ", " + sla?.lastMileTravelString}
          </div>
          <div className="mt-2 flex items-center gap-2 text-xs font-medium text-gray-500 md:text-sm">
            {feeDetails?.message && (
              <>
                <img
                  className="h-5 mix-blend-multiply"
                  src={IMG_URL + feeDetails?.icon}
                  alt="icon"
                />
                <span>{feeDetails?.message}</span>
              </>
            )}
          </div>
        </div>
        <div className="mr-4 flex w-20 flex-col gap-1 rounded-lg border-2 bg-gray-50 p-1 text-center md:h-14">
          <div className="rounded-lg  border-b pb-1  text-xs font-semibold text-green-500 md:border-b-2 md:text-sm md:font-bold">
            <FontAwesomeIcon icon={faStar} />
            {avgRatingString}
          </div>
          <div className=" rounded-lg text-[0.55rem] font-semibold tracking-tighter text-gray-400 md:text-[0.6rem]">
            {totalRatingsString}
          </div>
        </div>
      </div>
      <div className="mt-1  flex h-32 w-full flex-col justify-around overflow-hidden  rounded-xl bg-gray-100 px-3 py-2">
        <div className="flex w-full gap-3 p-2 font-semibold md:ml-6 md:gap-8">
          <p className="flex items-center gap-1 text-sm md:gap-3 md:text-base">
            <FontAwesomeIcon icon={faClock} />
            {sla?.slaString}
          </p>
          <p className="flex items-center gap-1 text-sm md:gap-3 md:text-base">
            <FontAwesomeIcon icon={faRupeeSign} />
            {costForTwoMessage}
          </p>
        </div>
        <div className="no-scrollbar flex h-28 w-screen items-center  overflow-x-auto scroll-smooth">
          <div className="flex w-[2500px]  items-center gap-4 ">
            {restaurantOffers.map((offer) => (
              <DiscountOfferCard
                {...offer?.info}
                key={offer?.info?.offerIds[0]}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default RestaurantMenuHeader;
