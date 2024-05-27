import { Carousel, SearchBar, RestaurantList } from "../components";
import { HomeShimmerUI } from "../shimmers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import useRestaurants from "../custom-hooks/useRestaurants";
const Home = () => {
  const {
    carouselCards,
    allRestaurants,
    filteredRestaurants,
    setFilteredRestaurants,
  } = useRestaurants();

  return (
    <div className="flex min-h-[80vh] w-11/12 select-none flex-col   items-center pt-16">
      {allRestaurants === undefined ? (
        <div className="flex h-[80vh] w-full flex-col items-center justify-center">
          <FontAwesomeIcon
            className="text-[10rem] text-red-500 drop-shadow-xl"
            icon={faTriangleExclamation}
          />
          <h1 className="mt-5 text-center text-2xl font-semibold">
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
