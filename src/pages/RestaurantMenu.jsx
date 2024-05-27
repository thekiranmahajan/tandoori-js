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
    <div className="mt-8 flex min-h-screen w-4/5 flex-col items-center pt-16 md:w-2/3">
      <RestaurantMenuHeader
        restaurantInfo={restaurantInfo}
        restaurantOffers={restaurantOffers}
      />
    </div>
  );
};
export default RestaurantMenu;
