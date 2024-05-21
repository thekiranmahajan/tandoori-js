import React, { useEffect, useState } from "react";
import { Carousel, SearchBar, RestaurantList } from "../components";
import { HomeShimmerUI } from "../shimmers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { API_URL } from "../constants";

const Home = () => {
  const [carouselCards, setCarouselCards] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

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

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <div className="w-11/12 min-h-[80vh] flex items-center flex-col   select-none pt-16">
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
        <HomeShimmerUI />
      ) : (
        <>
          <Carousel carouselCards={carouselCards} />
          <SearchBar
            setFilteredRestaurants={setFilteredRestaurants}
            allRestaurants={allRestaurants}
          />
          <RestaurantList restaurants={filteredRestaurants} />
        </>
      )}
    </div>
  );
};

export default Home;
