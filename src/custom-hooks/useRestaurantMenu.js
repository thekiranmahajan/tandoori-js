import { useEffect, useState } from "react";
import { MENU_API } from "../constants.js";

const useRestaurantMenu = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

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

      // console.log(data?.data?.cards[2]?.card?.card?.info);
    } catch (err) {
      console.log(
        "Something went wrong while fetching RestaurantMenu API...😵"
      );
    }
  };
  console.log(restaurantInfo);
  return { restaurantInfo };
};

export default useRestaurantMenu;
