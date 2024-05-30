import React from "react";
import { useParams } from "react-router-dom";
import { RestaurantMenuShimmerUI } from "../shimmers";
import useRestaurantMenu from "../hooks/useRestaurantMenu.js";
import { RestaurantMenuHeader } from "../components";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
import floralDesign from "../../public/images/floralDesign.svg";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { restaurantInfo, restaurantOffers } = useRestaurantMenu(resId);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem("mango"));
  };

  return restaurantInfo === null ? (
    <RestaurantMenuShimmerUI />
  ) : (
    <div className="mt-8 flex min-h-screen w-4/5 flex-col items-center pt-16 md:w-2/3">
      <RestaurantMenuHeader
        restaurantInfo={restaurantInfo}
        restaurantOffers={restaurantOffers}
      />
      <div className="mt-1 flex w-full items-center justify-center gap-2 rounded-xl bg-gray-100 p-2 font-semibold ">
        <img className="h-8 " src={floralDesign} alt="Floral Design" />
        MENU
        <img
          className="h-8 scale-x-[-1]"
          src={floralDesign}
          alt="Floral Design"
        />
      </div>
      
    </div>
  );
};
export default RestaurantMenu;
