import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faRupeeSign,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { IMG_URL } from "../constants.js";
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
      <div className="text-[0.65rem] text-gray-500 font-semibold  md:mb-10 mb-6 text-left w-full">
        <Link to="/">Home</Link>
        <span className="cursor-pointer"> / Pune / </span>
        <span className="text-gray-800">{name}</span>
      </div>
      <div className=" w-full h-36 rounded-xl p-2 bg-gray-100 flex items-center justify-between">
        <div className="flex flex-col gap-1 px-4">
          <div className="font-bold text-xl">{name}</div>
          <div className="text-xs text-gray-400 font-medium">
            {cuisines?.join(", ")}
          </div>

          <div className="text-xs text-gray-400 font-medium">
            {areaName + ", " + sla?.lastMileTravelString}
          </div>
          <div className="mt-2 flex items-center gap-2 text-gray-500 font-medium text-xs md:text-sm">
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
        <div className="flex flex-col gap-1 mr-4 rounded-lg border-2 p-1 md:h-14 w-20 text-center bg-gray-50">
          <div className="rounded-lg  text-green-500 text-xs  md:text-sm font-semibold md:font-bold md:border-b-2 border-b pb-1">
            <FontAwesomeIcon icon={faStar} />
            {avgRatingString}
          </div>
          <div className=" rounded-lg text-gray-400 text-[0.55rem] md:text-[0.6rem] font-semibold tracking-tighter">
            {totalRatingsString}
          </div>
        </div>
      </div>
      <div className="mt-1  w-full h-32 rounded-xl px-3 py-2 bg-gray-100  flex flex-col justify-around overflow-hidden">
        <div className="flex w-full md:gap-8 gap-3 md:ml-6 p-2 font-semibold">
          <p className="flex md:gap-3 gap-1 items-center text-sm md:text-base">
            <FontAwesomeIcon icon={faClock} />
            {sla?.slaString}
          </p>
          <p className="flex md:gap-3 gap-1 items-center text-sm md:text-base">
            <FontAwesomeIcon icon={faRupeeSign} />
            {costForTwoMessage}
          </p>
        </div>
        <div className="flex items-center overflow-x-auto w-screen h-28  no-scrollbar scroll-smooth">
          <div className="w-[2500px] flex  items-center gap-4 ">
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
