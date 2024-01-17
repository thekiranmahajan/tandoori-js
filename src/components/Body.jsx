import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import RestaurantList from "./RestaurantList";
const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const getRestaurants = async () => {
    try {
      const response = await fetch(
        "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D28.7040592%26lng%3D77.10249019999999%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"
      );
      const data = await response.json();
      console.log(
        data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
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
