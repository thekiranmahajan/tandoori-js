export const onSearchFilter = (
  allRestaurants,
  setFilteredRestaurants,
  searchText
) => {
  const filteredData = allRestaurants?.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
  );
  setFilteredRestaurants(filteredData);
  console.log(filteredData, "onSearchFilter!");
};

export const topRatedFilter = (allRestaurants, setFilteredRestaurants) => {
  const topRated = allRestaurants.filter(
    (restaurant) => restaurant?.info?.avgRating > 4.2
  );
  setFilteredRestaurants(topRated);
  console.log(topRated, "topRated!");
};

export const vegFilter = (allRestaurants, setFilteredRestaurants) => {
  const areVeg = allRestaurants.filter(
    (restaurant) => restaurant?.info?.veg === true
  );
  setFilteredRestaurants(areVeg);
  console.log(areVeg, "vegFilter!");
};

export const deliveryTimefilter = (allRestaurants, setFilteredRestaurants) => {
  const deliveryTime = allRestaurants.filter(
    (restaurant) => restaurant?.info?.sla?.deliveryTime <= 28
  );
  setFilteredRestaurants(deliveryTime);
  console.log(deliveryTime, "deliveryTime!");
};
