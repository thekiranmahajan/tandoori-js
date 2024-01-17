import React from "react";
import RestaurantCard from "./RestaurantCard";
const RestaurantList = ({ restaurants }) => {
  return (
    <div className="mt-10 flex flex-wrap justify-center">
      {restaurants.map((restaurant) => (
        <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
      ))}
    </div>
  );
};

export default RestaurantList;
