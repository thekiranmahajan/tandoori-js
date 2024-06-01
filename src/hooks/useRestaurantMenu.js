import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants.js";

const useRestaurantMenu = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [restaurantOffers, setRestaurantOffers] = useState(null);
  const [restaurantMenuList, setRestaurantMenuList] = useState(null);

  useEffect(() => {
    getRestaurantMenu();
  }, [resId]);

  const getRestaurantMenu = async () => {
    try {
      const response = await fetch(MENU_API + resId);
      const jsonData = await response.json();
      const data = await JSON.parse(jsonData.contents);
      // console.log(data?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards);

      setRestaurantMenuList(
        data?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards,
      );

      setRestaurantInfo(
        data?.data?.cards[2]?.card?.card?.info ||
          data?.data?.cards[0]?.card?.card?.info,
      );

      setRestaurantOffers(
        data?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers ||
          data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers,
      );
    } catch (err) {
      console.log(
        "Something went wrong while fetching RestaurantMenu API...😵",err
      );
    }
  };

  return { restaurantInfo, restaurantOffers, restaurantMenuList };
};

export default useRestaurantMenu;
