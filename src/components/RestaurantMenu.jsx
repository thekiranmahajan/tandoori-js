import React from "react";
import { useParams } from "react-router-dom";
import RestaurantMenuShimmerUI from "./RestaurantMenuShimmerUI";

const RestaurantMenu = () => {
  const { resId } = useParams();

  return <RestaurantMenuShimmerUI/>;
};
export default RestaurantMenu;
