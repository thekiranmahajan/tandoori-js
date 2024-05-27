import React, { useState } from "react";
import Button from "./Button";
import { faStar, faBolt, faSeedling } from "@fortawesome/free-solid-svg-icons";
import {
  onSearchFilter,
  topRatedFilter,
  deliveryTimefilter,
  vegFilter,
} from "../utils/helper";
const SearchBar = ({ setFilteredRestaurants, allRestaurants }) => {
  const [searchText, setSearchText] = useState("");

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSearchFilter(allRestaurants, setFilteredRestaurants, searchText);
    }
  };
  return (
    <div className="mt-10 flex w-11/12 flex-wrap items-center   justify-center gap-5 p-4 md:justify-between">
      <div className="flex items-center justify-center gap-0">
        <input
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          onKeyDown={handleEnter}
          className="mr-4 h-10 truncate rounded-lg border-none px-3 py-2 text-sm outline-none md:w-72"
          type="text"
          value={searchText}
          placeholder="Search you favorite restaurants"
        />
        <Button
          btnText={"Search"}
          onClick={() => {
            onSearchFilter(allRestaurants, setFilteredRestaurants, searchText);
          }}
        />
      </div>
      <div className="flex flex-wrap gap-4">
        <Button
          btnIcon={faStar}
          onClick={() => topRatedFilter(allRestaurants, setFilteredRestaurants)}
          btnText="Top Rated"
        />
        <Button
          btnIcon={faBolt}
          onClick={() =>
            deliveryTimefilter(allRestaurants, setFilteredRestaurants)
          }
          btnText="Delivery Time"
        />
        <Button
          btnIcon={faSeedling}
          onClick={() => vegFilter(allRestaurants, setFilteredRestaurants)}
          btnText="Veg"
        />
      </div>
    </div>
  );
};

export default SearchBar;
