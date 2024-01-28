import React from "react";
import { useParams } from "react-router-dom";
import { RestaurantMenuShimmerUI } from "../shimmers";
import useRestaurantMenu from "../custom-hooks/useRestaurantMenu.js";
import { RestaurantMenuHeader } from "../components";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { restaurantInfo, restaurantOffers } = useRestaurantMenu(resId);

  return restaurantInfo === null ? (
    <RestaurantMenuShimmerUI />
  ) : (
    <div className="md:w-2/3 w-9/12 min-h-screen flex flex-col items-center mt-12">
      <RestaurantMenuHeader
        restaurantInfo={restaurantInfo}
        restaurantOffers={restaurantOffers}
      />
    </div>
  );
};
export default RestaurantMenu;
