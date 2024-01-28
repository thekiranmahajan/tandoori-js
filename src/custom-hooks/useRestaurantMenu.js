import { useEffect, useState } from "react";
import { MENU_API } from "../constants.js";

const useRestaurantMenu = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [restaurantOffers, setRestaurantOffers] = useState(null);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  const getRestaurantMenu = async () => {
    try {
      const response = await fetch(MENU_API + resId);
      const data = await response.json();

      setRestaurantInfo(
        data?.data?.cards[2]?.card?.card?.info ||
          data?.data?.cards[0]?.card?.card?.info
      );

      setRestaurantOffers(
        data?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers ||
          data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers
      );
    } catch (err) {
      console.log(
        "Something went wrong while fetching RestaurantMenu API...😵"
      );
    }
  };

  return { restaurantInfo, restaurantOffers };
};

export default useRestaurantMenu;
