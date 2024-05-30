import React from "react";
import RestaurantCard from "./RestaurantCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const RestaurantList = ({ restaurants }) => {
  return (
    <div className="mt-10 flex flex-wrap justify-center  ">
      {restaurants.length === 0 ? (
        <div className="m-10 flex flex-col items-center justify-center">
          <FontAwesomeIcon
            className="text-[8rem] text-yellow-400 drop-shadow-xl"
            icon={faCircleExclamation}
          />

          <h1 className="mt-10 text-center text-xl font-semibold">
            No restaurants are matched <br /> Try again later...
          </h1>
        </div>
      ) : (
        restaurants.map((restaurant) => (
          <Link
            to={`/restaurant-menu/${restaurant?.info?.id}`}
            key={restaurant?.info?.id}
          >
            <RestaurantCard {...restaurant?.info} />
          </Link>
        ))
      )}
    </div>
  );
};

export default RestaurantList;
