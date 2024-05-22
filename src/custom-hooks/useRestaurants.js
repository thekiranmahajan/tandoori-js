import { useEffect, useState } from "react";
import { API_URL } from "../utils/constants";

const useRestaurants = () => {
  const [carouselCards, setCarouselCards] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    try {
      const response = await fetch(API_URL);
      const jsonData = await response.json();
      const data = await JSON.parse(jsonData.contents);

      const APICall =
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
        data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      console.log(APICall);
      setAllRestaurants(APICall);
      setFilteredRestaurants(APICall);
      setCarouselCards(
        data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
      );
    } catch (error) {
      console.log("Something went wrong while fetching API...😵");
    }
  };
  return {
    carouselCards,
    allRestaurants,
    filteredRestaurants,
    setFilteredRestaurants,
  };
};

export default useRestaurants;
