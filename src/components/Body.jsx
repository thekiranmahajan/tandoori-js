import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import RestaurantList from "./RestaurantList";
const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const getRestaurants = async () => {
    try {
      const url =
        "https://corsproxy.org/?" +
        encodeURIComponent(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.51981990724166&lng=73.86026275822753&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
      const response = await fetch(url);
      const data = await response.json();
      console.log(data?.data?.cards);
      setAllRestaurants(
        data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log("Something went wrong while fetching API...😵");
    }
  };
  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <div className="w-11/12 min-h-[80vh]  flex items-center flex-col">
      {/* <Carousel /> */}
      <RestaurantList restaurants={allRestaurants} />
    </div>
  );
};

export default Body;
