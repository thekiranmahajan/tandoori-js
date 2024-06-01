import React from "react";
import { useParams } from "react-router-dom";
import { RestaurantMenuShimmerUI } from "../shimmers";
import useRestaurantMenu from "../hooks/useRestaurantMenu.js";
import { RestaurantMenuHeader, RestaurantMenuSection } from "../components";
import floralDesign from "../../public/images/floralDesign.svg";
import { IMG_URL } from "../utils/constants.js";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const { restaurantInfo, restaurantOffers, restaurantMenuList } =
    useRestaurantMenu(resId);
  const secondLastObj = restaurantMenuList?.at(-2)?.card?.card;
  const lastObj = restaurantMenuList?.at(-1)?.card?.card;

  return restaurantInfo === null ? (
    <RestaurantMenuShimmerUI />
  ) : (
    <div
      className="mb-10 mt-8 flex min-h-screen w-11/12
     select-none flex-col items-center pt-16 md:w-2/3"
    >
      <RestaurantMenuHeader
        restaurantInfo={restaurantInfo}
        restaurantOffers={restaurantOffers}
      />
      <div className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gray-100 p-2 font-semibold ">
        <img className="h-8 " src={floralDesign} alt="Floral Design" />
        MENU
        <img
          className="h-8 scale-x-[-1]"
          src={floralDesign}
          alt="Floral Design"
        />
      </div>
      {restaurantMenuList
        ?.filter((section) => section?.card?.card?.itemCards)
        ?.map((filteredSection, index) => (
          <div
            className="flex w-full flex-col items-center justify-between"
            key={index}
          >
            <RestaurantMenuSection {...filteredSection?.card?.card} />
            <div className="h-3 w-full rounded-lg bg-gray-100"></div>
          </div>
        ))}
      <div className="py -m-2 min-h-72 w-full rounded-lg bg-gray-100 px-3 py-2 text-2xl md:p-5">
        <div className="flex items-center justify-start gap-5 border-b-2 border-gray-400 pb-2 text-sm font-medium text-gray-500">
          <img
            className="h-8"
            src={IMG_URL + secondLastObj?.imageId}
            alt="FSSAI Logo"
          />
          {secondLastObj?.text[0]}
        </div>
        <div className="flex flex-col border-b-2 border-gray-400 py-2 text-gray-500">
          <h2 className=" text-sm font-bold md:text-lg">{lastObj?.name}</h2>
          <h4 className="text-xs font-medium text-gray-400">
            (Outlet:{lastObj?.area})
          </h4>
          <p className="mt-4 flex items-center gap-3 text-[0.6rem] leading-4  md:text-xs">
            <FontAwesomeIcon className="text-xs" icon={faLocationDot} />
            {lastObj?.completeAddress}
          </p>
        </div>
      </div>
    </div>
  );
};
export default RestaurantMenu;
