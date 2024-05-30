import React from "react";
import { useParams } from "react-router-dom";
import { RestaurantMenuShimmerUI } from "../shimmers";
import useRestaurantMenu from "../hooks/useRestaurantMenu.js";
import { RestaurantMenuHeader } from "../components";
import { useDispatch } from "react-redux";
import floralDesign from "../../public/images/floralDesign.svg";
import RestaurantMenuSection from "../components/RestaurantMenuSection.jsx";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { restaurantInfo, restaurantOffers, restaurantMenuList } =
    useRestaurantMenu(resId);

  return restaurantInfo === null ? (
    <RestaurantMenuShimmerUI />
  ) : (
    <div className="mb-10 mt-8 flex min-h-screen w-4/5 select-none flex-col items-center pt-16 md:w-2/3">
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
          <>
            <RestaurantMenuSection
              key={index}
              {...filteredSection?.card?.card}
            />
            <div className="h-3 w-full rounded-lg bg-gray-100"></div>
          </>
        ))}
    </div>
  );
};
export default RestaurantMenu;
