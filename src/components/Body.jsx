import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import RestaurantList from "./RestaurantList";
import SearchBar from "./SearchBar";
import ShimmerUI from "./ShimmerUI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

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

      setAllRestaurants(
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setCarouselCards(
        data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
      );
    } catch (error) {
      console.log("Something went wrong while fetching API...😵");
    }
  };

  const onSearch = (searchText) => {
    const filteredData = allRestaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredData);
    console.log(filteredData);
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <div className="w-11/12 min-h-[80vh] flex items-center flex-col">
      {allRestaurants === undefined ? (
        <div className="w-full h-[80vh] flex items-center justify-center flex-col">
          <FontAwesomeIcon
            className="text-[10rem] text-red-500 drop-shadow-xl"
            icon={faTriangleExclamation}
          />
          <h1 className="mt-5 text-2xl text-center font-semibold">
            Sorry😵
            <br />
            No restaurants are available <br /> Try again later...
          </h1>
        </div>
      ) : allRestaurants?.length === 0 ? (
        <ShimmerUI />
      ) : (
        <>
          <Carousel carouselCards={carouselCards} />
          <SearchBar
            searchText={searchText}
            setSearchText={setSearchText}
            onSearch={onSearch}
          />
          <RestaurantList restaurants={filteredRestaurants} />
        </>
      )}
    </div>
  );
};

export default Body;
