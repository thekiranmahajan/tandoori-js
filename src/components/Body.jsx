import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import RestaurantList from "./RestaurantList";
import SearchBar from "./SearchBar";

const Body = () => {
  const [carouselCards, setCarouselCards] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const getRestaurants = async () => {
    try {
      const url =
        "https://corsproxy.org/?" +
        encodeURIComponent(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.51981990724166&lng=73.86026275822753&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
      const response = await fetch(url);
      const data = await response.json();
      // console.log(
      //   data?.data?.cards[0]?.card?.card
      // );
      if (data?.data?.cards[1]) {
        setAllRestaurants(
          data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setCarouselCards(
          data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
        );
      } else {
        setAllRestaurants(
          data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
      }
    } catch (error) {
      console.log("Something went wrong while fetching API...😵");
    }
  };

  const onSearch = (searchText) => {
    const filteredData = allRestaurants.filter((restaurant) => {
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
      console.log(searchText, restaurant.info.name);
    });
    setFilteredRestaurants(filteredData);
  };
  console.log(filteredRestaurants);
  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <div className="w-11/12 min-h-[80vh]  flex items-center flex-col">
      <Carousel carouselCards={carouselCards} />

      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        onSearch={() => onSearch(searchText)}
      />

      <RestaurantList restaurants={filteredRestaurants} />
    </div>
  );
};

export default Body;
