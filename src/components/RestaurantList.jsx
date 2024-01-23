import React from "react";
import RestaurantCard from "./RestaurantCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
const RestaurantList = ({ restaurants }) => {
  return (
    <div className="mt-10 flex flex-wrap justify-center font-[Montserrat]">
      {restaurants.length === 0 ? (
        <div className="flex items-center justify-center flex-col m-10">
          <FontAwesomeIcon
            className="text-[8rem] text-yellow-500 drop-shadow-xl"
            icon={faCircleExclamation}
          />

          <h1 className="mt-10 text-xl text-center font-semibold">
            No restaurants are matched <br /> Try again later...
          </h1>
        </div>
      ) : (
        restaurants.map((restaurant) => (
          <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
        ))
      )}
    </div>
  );
};

export default RestaurantList;
